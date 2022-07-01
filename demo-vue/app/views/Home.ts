import { android as androidApp } from '@nativescript/core/application';
import { ImageSource } from '@nativescript/core/image-source';
import { Image } from '@nativescript/core';
import { Canvas, Matrix, Paint, Path, Style } from '@nativescript-community/ui-canvas';
import * as cv from 'nativescript-opencv';
import { WorkerEventType, WorkerResult } from '~/workers/BaseWorker';
import { getExamples } from '../examples';
import { request } from '@nativescript-community/perms';
// import Worker from '~/workers/ImageWorker';
let grayImage: cv.Mat;
let worker = null;
const paint = new Paint();
paint.setColor('red');
paint.setStrokeWidth(1);
function runOnUiThread(fn) {
    if (__IOS__) {
        NSOperationQueue.mainQueue.addOperationWithBlock(fn);
    } else {
        (androidApp.foregroundActivity as androidx.appcompat.app.AppCompatActivity).runOnUiThread(
            new java.lang.Runnable({
                run() {
                    fn();
                }
            })
        );
    }
}

function norm(p1: [number, number], p2: [number, number]) {
    const res = [p1[0] - p2[0], p1[1] - p2[1]];
    return Math.sqrt(Math.pow(res[0], 2) + Math.pow(res[1], 2));
}
function contourCenter(c): [number, number] {
    return [c[1][0] - c[0][0], c[1][1] - c[0][1]];
}
function contourArea(c) {
    return (c[1][0] - c[0][0]) * (c[1][1] - c[0][1]);
}

function getColor(index) {
    switch (index) {
        case 0:
            return '#ff0000';
        case 1:
            return '#00ff00';
        case 2:
            return '#0000ff';
        case 3:
            return '#00ffff';
        case 4:
            return '#ffff00';
        case 5:
            return '#ff00ff';
    }
}

function isOnUiThread() {
    if (__IOS__) {
        return NSOperationQueue.currentQueue === NSOperationQueue.mainQueue;
    } else {
        return android.os.Looper.myLooper() === android.os.Looper.getMainLooper();
    }
}

const messagePromises: { [key: string]: { resolve: Function; reject: Function; timeoutTimer: NodeJS.Timer }[] } = {};

let contourMat;
export default {
    name: 'Home',
    template: `
    <Page>
      <ActionBar title="OpenCV Demo">
      </ActionBar>
      <GridLayout rows="*,auto" backgroundColor="black" height="100%">
      <CameraView rowSpan="2" ref="cameraPreview" @frame="processFrame"/>
        <Image rowSpan="2"  ref="contoursView" stretch="aspectFit" :src="image" width="50%" height="30%" horizontalAlignment="right" verticalAlignment="bottom" />
        <CanvasView ref="canvasView" rowSpan="2"  @draw="onCanvasDraw($event)"/>
        <Button v-show="contours && contours.length>0" text="takePicture" @tap="takePicture" verticalAlignment="bottom" horizontalAlignment="center"/>
        <Button text="torch" @tap="switchTorch" verticalAlignment="top" horizontalAlignment="right"/>
        <Button v-show="pausePreview" text="reset" @tap="pausePreview = false" verticalAlignment="top" horizontalAlignment="left"/>
        <ListView for="item in images" horizontalAlignment="right" width="150" rowSpan="2" @itemTap="onImageTap" marginTop="50">
            <v-template>
                <Image :src="item" width="100%"/>
            </v-template>
            </ListView>
        <Image v-show="currentImage" rowSpan="2" stretch="aspectFit" :src="currentImage" width="100%" height="100%" @tap="currentImage = null"/>

        </GridLayout>
    </Page>
    `,
    data() {
        return {
            examples: getExamples(),
            contours: [],
            matrix: new Matrix(),
            images: [],
            pausePreview: false,
            currentImage: null,
            image: null,
            opacity: 255
        };
    },
    mounted() {
        worker = new Worker('~/workers/ImageWorker');
        this.contours = [];
        worker.onmessage = this.onWorkerMessage;
    },
    destroy() {
        this.worker.postMessage({ type: 'terminate' });
    },
    methods: {
        startCamera() {
            const camView = this.$refs.cameraPreview.nativeView;
            contourMat = null;
            if (camView.cameraStarted()) {
                camView.stopCamera();
                this.$refs.camButton.text = 'start';
            } else {
                request('camera').then(
                    function success() {
                        camView.startCamera();
                    },
                    function failure() {
                        // permission request rejected
                        // ... tell the user ...
                    }
                );
                this.$refs.camButton.text = 'stop';
            }
        },

        onWorkerMessage(event: {
            data: {
                type: WorkerEventType;
                result: WorkerResult;
                full?: boolean;
                contours?: number[][];
                width?: number;
                height?: number;
                originalWidth?: number;
                originaHeight?: number;
                id?: number;
                rotation?: number;
                nativeDataKeys: string[];
                nativeDatas?: { [k: string]: any };
            };
        }) {
            const data = event.data;
            const id = data.id;

            if (id && messagePromises.hasOwnProperty(id)) {
                messagePromises[id].forEach(function(executor) {
                    executor.timeoutTimer && clearTimeout(executor.timeoutTimer);
                    // if (isError) {
                    // executor.reject(createErrorFromMessage(message));
                    // } else {
                    const id = data.id;
                    if (data.nativeDataKeys.length > 0) {
                        const nativeDatas: { [k: string]: any } = {};
                        data.nativeDataKeys.forEach(k => {
                            nativeDatas[k] = (org.nativescript as any).demovueopencv.WorkersContext.getValue(`${id}_${k}`);
                            (org.nativescript as any).demovueopencv.WorkersContext.setValue(`${id}_${k}`, null);
                        });
                        data.nativeDatas = nativeDatas;
                    }

                    executor.resolve(data);
                    // }
                });
                delete messagePromises[id];
            }
        },

        onImageTap(event) {
            this.pausePreview = false;
            this.currentImage = event.item;
        },
        sendMessageToWorker(nativeData, messageData, timeout = 20000) {
            return new Promise((resolve, reject) => {
                const id = Date.now().valueOf();
                messagePromises[id] = messagePromises[id] || [];
                let timeoutTimer;
                if (timeout > 0) {
                    timeoutTimer = setTimeout(() => {
                        // we need to try catch because the simple fact of creating a new Error actually throws.
                        // so we will get an uncaughtException
                        try {
                            reject(new Error('timeout'));
                        } catch {}
                        delete messagePromises[id];
                    }, timeout);
                }
                messagePromises[id].push({ resolve, reject, timeoutTimer });

                // const result = worker.processImage(image, { width, height, rotation });
                // this.handleContours(result.contours, rotation, width, height);
                const keys = Object.keys(nativeData);
                keys.forEach(k => {
                    (org.nativescript as any).demovueopencv.WorkersContext.setValue(`${id}_${k}`, nativeData[k]._native || nativeData[k]);
                });
                worker.postMessage(
                    Object.assign(
                        {
                            type: 'image',
                            id,
                            nativeDataKeys: keys
                        },
                        messageData
                    )
                );
            });
        },
        handleContours(contours, rotation, w, h) {
            this.showContour(contours, rotation, w, h);
        },
        showMat(mat, rotation = 0) {
            const imageView = this.$refs.contoursView.nativeView as Image;
            if (!mat) {
                imageView.imageSource = null;
                return;
            }
            let image = cv.imageFromMat(mat);
            if (rotation !== 0) {
                const matrix = new android.graphics.Matrix();
                matrix.postRotate(rotation);
                image = android.graphics.Bitmap.createBitmap(image, 0, 0, image.getWidth(), image.getHeight(), matrix, true);
            }

            const imageSource = new ImageSource();
            imageSource.setNativeSource(image);
            imageView.imageSource = imageSource;
        },
        showContour(contours, rotation, width, height) {
            if (this.contours !== contours) {
                // const newContours = [];
                // contours.forEach((c, i) => {
                //     const toCompare = this.contours[i];
                //     const currentArea = toCompare && contourArea(toCompare);
                //     // console.log('test', toCompare && norm(contourCenter(toCompare), contourCenter(c)), currentArea, toCompare && Math.abs(currentArea - contourArea(c)));
                //     if (toCompare && norm(contourCenter(toCompare), contourCenter(c)) < 2 && Math.abs(currentArea - contourArea(c)) < 0.1* currentArea) {
                //         newContours[i] = toCompare;
                //     } else {
                //         newContours[i] = c;
                //     }
                // });
                // console.log('showContour', contour, rotation, width, height);
                this.contours = contours;
                // this.contours = newContours;
                this.contourWidth = width;
                this.contourHeight = height;
                this.contourRotation = rotation;
                this.$refs.canvasView.nativeView.invalidate();
            }
        },
        processFrame(event) {
            if (this.pausePreview) {
                return;
            }
            const frame = event.frame;
            const viewRotation = frame.getRotationToView();
            const image = frame.getData();
            const size = frame.getSize();
            const w = size.getWidth();
            const h = size.getHeight();
            if (typeof image.getPlanes === 'function') {
                const planes = image.getPlanes();
                const y_plane = planes[0].getBuffer();
                const y_plane_step = planes[0].getRowStride();
                grayImage = new org.opencv.core.Mat(h, w, cv.CvType.CV_8UC1, y_plane, y_plane_step);
            } else {
                grayImage = new org.opencv.core.Mat(h, w, cv.CvType.CV_8UC1);
                grayImage.put(0, 0, image);
            }
            this.sendMessageToWorker({ image: grayImage }, { width: w, height: h, rotation: viewRotation }).then(data => {
                this.handleContours(data.contours, data.rotation, data.width, data.height);
                this.showMat(data.nativeDatas.edgesImage, data.rotation);
            });
        },
        onCanvasDraw(event: { canvas: Canvas }) {
            // const deviceScale = screen.mainScreen.scale;
            const canvas = event.canvas;
            const w = canvas.getWidth();
            const h = canvas.getHeight();
            const contours = this.contours;
            if (contours.length > 0) {
                const imgW = this.contourWidth;
                const imgH = this.contourHeight;
                const scale = h / imgW;
                paint.color = '#ff0000';
                canvas.drawText(contours.length + '', 30, 30, paint);
                canvas.save();
                canvas.scale(scale, scale, w / 2, h / 2);
                canvas.rotate(this.contourRotation, w / 2, h / 2);
                canvas.translate(w / 2 - imgW / 2, h / 2 - imgH / 2);
                contours.forEach((c, i) => {
                    const toDraw = [];
                    for (let index = 0; index < c.length; index++) {
                        const element = c[index];
                        toDraw.push(element[0]);
                        toDraw.push(element[1]);
                        if (index > 0) {
                            toDraw.push(element[0]);
                            toDraw.push(element[1]);
                        }
                    }
                    toDraw.push(toDraw[0]);
                    toDraw.push(toDraw[1]);
                    const path = new Path();
                    path.setLines(toDraw);
                    paint.color = getColor(i);
                    paint.setStyle(Style.FILL);
                    paint.setAlpha(125);
                    canvas.drawPath(path, paint);
                    paint.setStyle(Style.STROKE);
                    paint.setAlpha(255);
                    canvas.drawPath(path, paint);
                });
                canvas.restore();
            }
        },
        takePicture() {
            this.pausePreview = true;
            this.$refs.cameraPreview.nativeView
                .takePicture()
                .then((res: { data: any; rotation: number }) => {
                    // console.log('got image', res.size, res.rotation);
                    // let mat = cv.matFromImage(res.image);
                    const mat = cv.Imgcodecs.imdecode(new cv.MatOfByte(res.data), cv.Imgcodecs.IMREAD_COLOR);
                    cv.Imgproc.cvtColor(mat, mat, cv.Imgproc.COLOR_BGR2RGB);
                    // this.showMat(mat);
                    const size = mat.size();
                    // (org.nativescript as any).demovueopencv.WorkersContext.setValue('fullImage', mat);
                    // this.showMat(mat, res.data.rotation);

                    return this.sendMessageToWorker({ image: mat }, { width: size.width, height: size.height, rotation: res.rotation, full: true, gray: true }).then(data => {
                        const images = [];
                        for (let index = 0; index < data.nativeDatas.images.length; index++) {
                            const imageSource = new ImageSource();
                            imageSource.setNativeSource(data.nativeDatas.images[index]);
                            images[index] = imageSource;
                        }
                        this.images = images;
                    });
                })
                .catch(err => {
                    console.log(err);
                    this.pausePreview = false;
                    alert(err.toString());
                });
        },
        switchTorch() {
            const current = this.$refs.cameraPreview.nativeView.torch;
            this.$refs.cameraPreview.nativeView.torch = current === 'torch' ? 'off' : 'torch';
        }
    }
};
