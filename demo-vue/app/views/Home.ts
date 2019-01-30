import { getExamples } from '../examples';
import { Folder, knownFolders, path } from 'tns-core-modules/file-system/file-system';
import { fromFile, ImageSource } from 'tns-core-modules/image-source/image-source';
import * as cv from 'nativescript-opencv';
import * as _ from 'lodash';
import { EventData, isIOS } from 'tns-core-modules/ui/page/page';
import { Image } from 'tns-core-modules/ui/image/image';

const MyWorker = require('nativescript-worker-loader!~/worker.ts');
const worker = new MyWorker();

function pointerTo(type, value) {
    const outerPtr = interop.alloc(interop.sizeof(interop.Pointer));
    const outerRef = new interop.Reference(type, outerPtr);
    outerRef.value = value;
    return outerPtr;
}

function valueFromPointerNumber(type, value) {
    const ptr = new interop.Pointer(value);
    const ptrToPtr = pointerTo(interop.Pointer, ptr);
    const ref = new interop.Reference(type, ptrToPtr);

    return ref.value;
}

function throttle(fn, limit) {
    let waiting = false;
    return (...args) => {
        if (!waiting) {
            fn.apply(this, args);
            waiting = true;
            setTimeout(() => {
                waiting = false;
            }, limit);
        }
    };
}
export default {
    name: 'Home',
    template: `
    <Page>
      <ActionBar title="OpenCV Demo">
      </ActionBar>
      <StackLayout>
      <Button ref="camButton" text="start" @tap="startCamera"/>
      <Button ref="camButton" text="testImage" @tap="testImage"/>
      <AbsoluteLayout backgroundColor="red" height="100%">
        <OpenCvCameraPreview ref="cameraPreview" width="100%" height="100%" @processMat="processLiveMat" stretch="aspectFill"/>
        <Image width="100%" height="100%" ref="contoursView" stretch="aspectFill" />
      </AbsoluteLayout>
      <ListView ref="listView"
          for="example in examples"
          separatorColor="transparent"
          @itemTap="goToExample">
        <v-template>
          <StackLayout class="item" orientation="vertical">
            <Label :text="example.description" class="title"></Label>
            <StackLayout height="1" backgroundColor="#EEEEEE"></StackLayout>
          </StackLayout>
        </v-template>
      </ListView>
      </StackLayout>
    </Page>
    `,
    data() {
        return {
            examples: getExamples()
        };
    },
    mounted() {
        // (this.$refs.cameraPreview as any).nativeView.startCamera();
        worker.onmessage = msg => {
            const dict = valueFromPointerNumber(NSDictionary, msg.data.value.dictionaryPtr) as NSDictionary<string, any>;
            const contoursView = (this.$refs.contoursView as any).nativeView as Image;
            const img = dict.objectForKey('image') as UIImage;
            console.log('test on worker result', dict, img);
            if (img) {
                const imgSource = new ImageSource();
                imgSource.setNativeSource(img);
                contoursView.imageSource = imgSource;
            } else {
                contoursView.imageSource = null;
            }

            (dict as any).release();
        };
    },
    methods: {
        startCamera() {
            const camView = (this.$refs.cameraPreview as any).nativeView;
            if (camView.cameraStarted()) {
                camView.stopCamera();
                (this.$refs.camButton as any).text = 'start';
            } else {
                camView.startCamera();
                (this.$refs.camButton as any).text = 'stop';
            }
        },
        goToExample({ item }) {
            this.$navigateTo(item);
        },

        handleImage: _.throttle(function(mat: OpenCVMat) {
            if (isIOS) {
                // the clone makes the UI slow! No solution right now
                const nativeDict = NSDictionary.dictionaryWithObjectForKey(mat.clone(), 'mat');
                const message = {
                    value: { dictionaryPtr: interop.handleof(nativeDict).toNumber() }
                };
                // increase reference count to account for `dictionaryPtr`
                (nativeDict as any).retain();
                worker.postMessage(message);
            }
        }, 100),
        testImage() {
            const folder: Folder = knownFolders.currentApp();
            const folderPath: string = path.join(folder.path, 'images/test.jpg');
            const imageFromLocalFile: ImageSource = fromFile(folderPath);
            const src = cv.imread(imageFromLocalFile);
            this.handleImage(src);

            const camView = (this.$refs.cameraPreview as any).nativeView as cv.OpenCvCameraPreview;
            const imgSource = new ImageSource();
            // imgSource.setNativeSource(resizedImage.toImage());
            camView.imageSource = imageFromLocalFile;
        },
        processLiveMat(event: any) {
            // console.log('processLiveMat');
            // const mat = event.mat as OpenCVMat;
            // cv.cvtColor(mat, mat, cv.COLOR_RGBA2GRAY);
            this.handleImage(event.mat);
        }
    }
};
