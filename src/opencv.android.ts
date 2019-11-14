import { CvCameraPreviewBase } from './opencv.common';
import { Color } from 'tns-core-modules/color/color';
import { ImageSource } from 'tns-core-modules/image-source/image-source';

import CVMat = org.bytedeco.javacpp.opencv_core.Mat;
import CVScalar = org.opencv.core.Scalar;
import CVImgproc = org.bytedeco.javacpp.opencv_imgproc;
import CVCore = org.bytedeco.javacpp.opencv_core;

export function imageFromMat(mat: org.bytedeco.javacpp.opencv_core.Mat) {
    return null as android.graphics.Bitmap;
}

export class Imgproc extends CVImgproc {
    static cvtColor(
        mat1: any, // Mat
        mat2: any, // Mat
        colorType: number,
        dstChannels = 0
    ) {
        return org.bytedeco.javacpp.opencv_imgproc.cvtColor(mat1, mat2, colorType, dstChannels);
    }

    static Canny(
        mat1: any, // Mat
        mat2: any, // Mat
        threshold1: any,
        threshold2: any,
        apertureSize = 3,
        l2gradient = false
    ) {
        return org.bytedeco.javacpp.opencv_imgproc.Canny(mat1, mat2, threshold1, threshold2, apertureSize, l2gradient);
    }
    static GaussianBlur(
        mat1: any, // Mat
        mat2: any, // Mat
        x: any,
        y: any,
        sigmaX?: any
    ) {
        return org.bytedeco.javacpp.opencv_imgproc.GaussianBlur(mat1, mat2, new org.bytedeco.javacpp.opencv_core.Size(x, y), sigmaX);
    }
    static findContours(
        mat1: any, // Mat
        hierarchy: any, // Mat
        mode: any,
        method: any,
        offset: any = { x: 0, y: 0 }
    ) {
        org.bytedeco.javacpp.opencv_imgproc.findContours(mat1, null, hierarchy, mode, method, new org.bytedeco.javacpp.opencv_core.Point(offset.x, offset.y));
        return {
            size() {
                return 0;
            }
        };
        // const count = result.count;
        // for (let i = 0; i < count; i++) {
        //     const sub = [];
        //     const subArray = result.get(i);
        //     for (let j = 0; j < subArray.count; j++) {
        //         const subObj = subArray.objectAtIndex(j);
        //         if (subObj) {
        //             sub.push({ x: subObj.objectForKey('x'), y: subObj.objectForKey('y') });
        //         }
        //     }
        //     contours.push(sub);
        // }
    }

    static contourArea(contours: any, oriented = false) {
        return org.bytedeco.javacpp.opencv_imgproc.contourArea(contours as any, oriented);
    }

    static drawContours(
        mat: any, // Mat,
        contours: any, // MatVector,
        contourIdx: number,
        color: any, // Scalar
        thickness = 1,
        lineType = 8,
        hierarchy: any = null, // Mat = null,
        maxLevel = Number.MAX_SAFE_INTEGER,
        offset: any = { x: 0, y: 0 } // Point
    ) {
        org.bytedeco.javacpp.opencv_imgproc.drawContours(
            mat,
            contours as any,
            contourIdx,
            new org.bytedeco.javacpp.opencv_core.Scalar((color instanceof Color ? color : new Color(color)).android),
            thickness,
            lineType,
            hierarchy,
            maxLevel,
            new org.bytedeco.javacpp.opencv_core.Point(offset.x, offset.y)
        );
    }
    static resize(
        mat1: any, // Mat
        mat2: any, // Mat
        x: any,
        y?: any
    ) {
        return org.bytedeco.javacpp.opencv_imgproc.resize(mat1, mat2, new org.bytedeco.javacpp.opencv_core.Size(x, y));
    }
}
// const CVMat = org.bytedeco.javacpp.opencv_core.Mat;
// const CVScalar = org.opencv.core.Scalar;
// const CVImgproc = org.bytedeco.javacpp.opencv_imgproc;
// const CVCore = org.bytedeco.javacpp.opencv_core;
export { CVMat as Mat, CVScalar as Scalar, CVCore as Core };

// export { org.opencv.core.Mat as Mat };

// export * from ImgProc;

export function createMat(rows, cols, type) {
    return new org.bytedeco.javacpp.opencv_core.Mat(rows, cols, type);
}

export function imread(value: any): org.bytedeco.javacpp.opencv_core.Mat {
    // console.log('imread', value);
    if (value instanceof ImageSource) {
        // console.log('imread', 'ImageSource');
        value = value.android;
    }
    if (value instanceof android.graphics.Bitmap) {
        const converterToMat = new org.bytedeco.javacv.OpenCVFrameConverter.ToMat();
        const AndroidFrameConverter = new org.bytedeco.javacv.AndroidFrameConverter();
        return converterToMat.convertToMat(AndroidFrameConverter.convert(value));
    } else {
        return org.bytedeco.javacpp.opencv_imgcodecs.imread(value);
    }
    // return null;
}

// let CvCameraViewListener: CvCameraViewListener;
// export type CvCameraViewListener = new (owner: WeakRef<OpenCvCameraPreview>) => com.nativescript.opencv.CvCameraPreview.CvCameraViewListener;

// function initCvCameraViewListener() {
//     if (CvCameraViewListener) {
//         return;
//     }

//     class CvCameraViewListenerImpl extends com.nativescript.opencv.CvCameraPreview.CvCameraViewListener {
//         constructor(private owner: WeakRef<OpenCvCameraPreview>) {
//             super();
//             /**
//              * Callback reporting an LE device found during a device scan initiated by the startLeScan(BluetoothAdapter.LeScanCallback) function.
//              * @param device [android.bluetooth.BluetoothDevice] - Identifies the remote device
//              * @param rssi [number] - The RSSI value for the remote device as reported by the Bluetooth hardware. 0 if no RSSI value is available.
//              * @param scanRecord [byte[]] - The content of the advertisement record offered by the remote device.
//              */
//             return global.__native(this);
//         }
//         onCameraFrame(mat: org.bytedeco.javacpp.opencv_core.Mat): org.bytedeco.javacpp.opencv_core.Mat {
//             if (this.owner) {
//                 this.owner.get().processOpenCVMat(mat);
//             }
//             return mat;
//         }
//     }
//     CvCameraViewListener = CvCameraViewListenerImpl;
// }

export class AsyncTaskRunner extends android.os.AsyncTask<String, String, String> {
    resp;
    progressDialog;
    doInBackground(...params: string[]) {
        console.log('doInBackground');
        // publishProgress("Sleeping..."); // Calls onProgressUpdate()
        // try {
        //     int time = Integer.parseInt(params[0])*1000;
        //     Thread.sleep(time);
        //     resp = "Slept for " + params[0] + " seconds";
        // } catch (InterruptedException e) {
        //     e.printStackTrace();
        //     resp = e.getMessage();
        // } catch (Exception e) {
        //     e.printStackTrace();
        //     resp = e.getMessage();
        // }
        // return resp;
        return null;
    }
    onPostExecute(result) {
        // execution of result of Long time consuming operation
        // progressDialog.dismiss();
        // finalResult.setText(result);
    }

    onPreExecute() {
        // progressDialog = ProgressDialog.show(MainActivity.this,
        //         "ProgressDialog",
        //         "Wait for "+time.getText().toString()+ " seconds");
    }

    onProgressUpdate(text) {
        // finalResult.setText(text[0]);
    }
}

export class OpenCvCameraPreview extends CvCameraPreviewBase {
    nativeViewProtected: org.nativescript.opencv.CvCameraPreview;
    public createNativeView() {
        const result = new org.nativescript.opencv.CvCameraPreview(this._context, org.nativescript.opencv.CvCameraPreview.CAMERA_BACK, org.nativescript.opencv.CvCameraPreview.SCALE_FIT);
        // console.log('createNativeView', result, result.delegate);
        return result;
    }
    initNativeView() {
        super.initNativeView();
        // initCvCameraViewListener();
        const nativeView = this.nativeViewProtected;
        const listener = new org.nativescript.opencv.CvCameraPreview.CvCameraViewListener({
            onCameraFrame: (mat: org.bytedeco.javacpp.opencv_core.Mat): org.bytedeco.javacpp.opencv_core.Mat => {
                this.notify({ eventName: 'processMat', object: this, mat });

                return mat;
            },
            onCameraViewStarted(param0: number, param1: number) {},
            onCameraViewStopped() {}
        });
        // nativeView.setCvCameraViewListener(listener);
        // (nativeView as any).listener = listener;
        // this._delegate = CvCameraPreviewDelegateImpl.initWithOwner(new WeakRef(this));
    }

    disposeNativeView() {
        // (this.nativeViewProtected as any).listener.owner = null;
        super.disposeNativeView();
    }
    cameraStarted() {
        return this.nativeViewProtected.isCameraConnected();
    }
    startCamera() {
        this.nativeViewProtected.connectCamera();
    }
    stopCamera() {
        this.nativeViewProtected.disconnectCamera();
    }
    processOpenCVMat(mat: org.bytedeco.javacpp.opencv_core.Mat) {
        // const mat2 = new OpenCVMat();
        this.notify({ eventName: 'processMat', object: this, mat });
        // console.log('processOpenCVMat', mat.channels());
    }
}
