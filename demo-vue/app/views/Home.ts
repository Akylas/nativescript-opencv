import { getExamples } from '../examples';
import { Folder, knownFolders, path } from 'tns-core-modules/file-system/file-system';
import { fromFile, ImageSource } from 'tns-core-modules/image-source/image-source';
import * as cv from 'nativescript-opencv';
import * as _ from 'lodash';
import { Color, isIOS } from 'tns-core-modules/ui/page/page';
import { Image } from 'tns-core-modules/ui/image/image';
import { findAndDrawContours } from '~/opencv';
import * as camera from 'nativescript-camera';
// import { AsyncTaskRunner } from 'nativescript-opencv';
import { TnsSideDrawer } from 'nativescript-foss-sidedrawer';

function runOnUiThread(fn) {
    if (isIOS) {
        NSOperationQueue.mainQueue.addOperationWithBlock(fn);
    } else {
        new android.os.Handler().post(
            new java.lang.Runnable({
                run() {
                    fn();
                }
            })
        );
    }
}

function isOnUiThread() {
    if (isIOS) {
        return NSOperationQueue.currentQueue === NSOperationQueue.mainQueue;
    } else {
        return android.os.Looper.myLooper() === android.os.Looper.getMainLooper();
    }
}
export default {
    name: 'Home',
    template: `
    <Page>
      <ActionBar title="OpenCV Demo">
      <StackLayout orientation="horizontal">
            <Label text="OpenCV Demo" fontSize="24" verticalAlignment="center" />
            <Button ref="camButton" text="live" @tap="startCamera"/>
            <Button ref="camButton" text="image" @tap="testImage"/>
        </StackLayout>
      </ActionBar>
      <GridLayout rows="*,auto" backgroundColor="black" height="100%">
        <OpenCvCameraPreview rowSpan="2" ref="cameraPreview" @processMat="processLiveMat" stretch="aspectFill"/>
        <Image rowSpan="2" ref="contoursView" stretch="aspectFill"/>
        <Slider row="1" v-model="opacity" minValue="0" maxValue="255"/>
      </GridLayout>
    </Page>
    `,
    data() {
        return {
            examples: getExamples(),
            opacity: 255
        };
    },
    mounted() {
        const contoursView = (this.$refs.contoursView as any).nativeView as Image;
        contoursView.on('image', (e: any) => {
            console.log('setting contours view imaage');
            contoursView.imageSource = e.data;
        });
        const listener = index => {};

        // TnsSideDrawer.build({
        //     templates: [
        //         {
        //             title: 'Home'
        //         }
        //     ],
        //     title: 'This App Name',
        //     subtitle: 'is just as awesome as this subtitle!',
        //     listener,
        //     context: this
        // });

        // new AsyncTaskRunner().execute(null);
        // (this.$refs.cameraPreview as any).nativeView.startCamera();
        // worker.onmessage = msg => {
        //     const dict = valueFromPointerNumber(NSDictionary, msg.data.value.dictionaryPtr) as NSDictionary<string, any>;
        //     const data = dict.objectForKey('data');
        //     (dict as any).release();
        //     const imgSource = new ImageSource();
        //     imgSource.setNativeSource(data);
        //     const contoursView = (this.$refs.contoursView as any).nativeView as Image;
        //     contoursView.imageSource = imgSource;

        // };
    },
    methods: {
        startCamera() {
            console.log('isOnUiThread, startCamera', isOnUiThread());
            const camView = (this.$refs.cameraPreview as any).nativeView;
            if (camView.cameraStarted()) {
                camView.stopCamera();
                (this.$refs.camButton as any).text = 'start';
            } else {
                camera.requestPermissions().then(
                    function success() {
                        camView.startCamera();
                    },
                    function failure() {
                        // permission request rejected
                        // ... tell the user ...
                    }
                );
                (this.$refs.camButton as any).text = 'stop';
            }
        },
        goToExample({ item }) {
            this.$navigateTo(item);
        },
        // postMessageToWorker(data) {
        //     if (isIOS) {
        //         // the clone makes the UI slow! No solution right now
        //         const nativeDict = NSMutableDictionary.dictionaryWithObjectForKey(data, 'data');
        //         const message = {
        //             value: { dictionaryPtr: interop.handleof(nativeDict).toNumber() }
        //         };
        //         // increase reference count to account for `dictionaryPtr`
        //         (nativeDict as any).retain();
        //         worker.postMessage(message);
        //     }
        // },
        testImage() {
            const folder: Folder = knownFolders.currentApp();
            const folderPath: string = path.join(folder.path, 'images/test.jpg');
            const imageFromLocalFile: ImageSource = fromFile(folderPath);
            const src = cv.imread(imageFromLocalFile);
            const contours = findAndDrawContours(src);
            this.showContours(contours);
            const camView = (this.$refs.cameraPreview as any).nativeView as cv.OpenCvCameraPreview;
            // camView.imageSource = imageFromLocalFile;
        },
        showContours({ contours, width, height }) {
            const start = Date.now();
            // console.log('showContours', contours.size(), width, height, this.opacity, isOnUiThread());
            const mat = cv.createMat(height, width, cv.Core.CV_8UC4);
            mat.setTo(new Color('transparent').ios);
            cv.Imgproc.drawContours(mat, contours, -1, new Color(this.opacity, 255, 0, 0), 1, 8);

            const image = cv.imageFromMat(mat);
            // mat.releaseMat();
            // (global as any).__collect();
            const imageSource = new ImageSource();
            imageSource.setNativeSource(image);
            const imageView = (this.$refs.contoursView as any).nativeView as Image;
            runOnUiThread(() => {
                // console.log('setting image on UITread', isOnUiThread());
                imageView.imageSource = imageSource;
            });
            // console.log('showContours duration', (Date.now() - start) / 1000);
        },
        processLiveMat(event: any) {
            // runOnUiThread(() => {
            //     console.log('isOnUiThread, back', isOnUiThread());
            //     // imageView.imageSource = imageSource;
            // });
            const mat = event.mat;
            // console.log('processLiveMat', isOnUiThread());
            const result = findAndDrawContours(event.mat);
            this.showContours(result);

            // const folder = knownFolders.currentApp();
            // const imageFromLocalFile = fromFile(path.join(folder.path, 'images/test.jpg'));
            // const imageSource = new ImageSource();
            // imageSource.loadFromBase64(imageFromLocalFile.toBase64String('jpg'));
            // const image = imageSource.ios;
            // this.postMessageToWorker(image);
        }
    }
};
