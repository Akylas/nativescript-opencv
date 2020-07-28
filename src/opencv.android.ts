// import { CvCameraPreviewBase } from './opencv.common';
import { Color } from '@nativescript/core/color';

let OpenCVMat: typeof org.opencv.core.Mat;
let CVScalar: typeof org.opencv.core.Scalar;
let CVImgproc: typeof org.opencv.imgproc.Imgproc;
let CVSize: typeof org.opencv.core.Size;
let CVCore: typeof org.opencv.core.Core;
let CVImgcodecs: typeof org.opencv.imgcodecs.Imgcodecs;
let CvType: typeof org.opencv.core.CvType;
let CVPoint: typeof org.opencv.core.Point;

type Constructor<T> = new (...args: any[]) => T;
type OpenCVClass<T> = T & {
    _native: T;
};

function createOpenCVClass<T>(clas: Constructor<T>) {
    const theClass = clas;
    const theClassName = clas.prototype.name;
    return class {
        _native: T;
        constructor(...args) {
            for (let index = 0; index < args.length; index++) {
                const element = args[index];
                if (Array.isArray(element)) {
                    args[index] = arrayNativeBuffer(element);
                }
            }
            // @ts-ignore
            this._native = new theClass(...args);
            return new Proxy(this, this);
        }
        get(target, name, receiver) {
            const native = this._native;
            if (native[name]) {
                return function (...args) {
                    for (let index = 0; index < args.length; index++) {
                        const element = args[index];
                        if (element) {
                            if (element._native) {
                                args[index] = element._native;
                            }
                        }
                    }
                    const methodName = name;
                    try {
                        return native[methodName](...args);
                    } catch (err) {
                        console.error('error calling', theClassName, methodName, err);
                        return null;
                    }
                };
            } else {
                return Reflect.get(target, name, receiver);
            }
        }
    };
}

export function init() {
    if (OpenCVMat) {
        return;
    }
    OpenCVMat = org.opencv.core.Mat as any;
    CVScalar = org.opencv.core.Scalar;
    CVSize = org.opencv.core.Size;
    CVImgproc = org.opencv.imgproc.Imgproc;
    CVCore = org.opencv.core.Core;
    CVPoint = org.opencv.core.Point;
    CvType = org.opencv.core.CvType;
    CVImgcodecs = org.opencv.imgcodecs.Imgcodecs;
    if (!org.opencv.android.OpenCVLoader.initDebug()) {
        console.error('OpenCV failed to load!');
    }
}

export const Imgcodecs = new Proxy(
    {},
    {
        get(target, name, receiver) {
            const nValue = CVImgcodecs[name];
            if (nValue) {
                if (typeof nValue === 'function') {
                    return function (...args) {
                        for (let index = 0; index < args.length; index++) {
                            const element = args[index];
                            if (element && element._native) {
                                args[index] = element._native;
                            }
                        }
                        let returnValue;

                        try {
                            const result = nValue(...args);
                            return returnValue || result;
                        } catch (err) {
                            console.error('error calling Imgcodecs', name, err);
                            return null;
                        }
                    };
                }
                return nValue;
            } else {
                return Reflect.get(target, name, receiver);
            }
        },
    }
);
export const Core = new Proxy(
    {},
    {
        get(target, name, receiver) {
            const nValue = CVCore[name];
            if (nValue) {
                if (typeof nValue === 'function') {
                    return function (...args) {
                        for (let index = 0; index < args.length; index++) {
                            const element = args[index];
                            if (element && element._native) {
                                args[index] = element._native;
                            }
                        }
                        let returnValue;

                        try {
                            const result = nValue(...args);
                            return returnValue || result;
                        } catch (err) {
                            console.error('error calling Core', name, err);
                            return null;
                        }
                    };
                }
                return nValue;
            } else {
                return Reflect.get(target, name, receiver);
            }
        },
    }
);

export function imageFromMat(mat: any) {
    const size = mat.size();
    const bmp = android.graphics.Bitmap.createBitmap(size.width, size.height, android.graphics.Bitmap.Config.ARGB_8888);
    //Imgproc.cvtColor(seedsImage, tmp, Imgproc.COLOR_RGB2BGRA);
    org.opencv.android.Utils.matToBitmap(mat._native || mat, bmp);
    return bmp;
}
export function matFromImage(bmp: android.graphics.Bitmap) {
    const mat = new org.opencv.core.Mat();
    org.opencv.android.Utils.bitmapToMat(bmp, mat);
    return mat;
}

function createArrayBuffer(length: number, useInts = false) {
    let bb: java.nio.ByteBuffer;
    if (useInts) {
        bb = java.nio.ByteBuffer.allocateDirect(length);
    } else {
        bb = java.nio.ByteBuffer.allocateDirect(length * 4).order(java.nio.ByteOrder.LITTLE_ENDIAN);
    }
    // var bb = java.nio.ByteBuffer.allocateDirect(length * 4).order(java.nio.ByteOrder.LITTLE_ENDIAN);
    const result = (ArrayBuffer as any).from(bb);
    result.bb = bb;
    return result;
}
function pointsFromBuffer(buffer: ArrayBuffer, useInts = false) {
    if (useInts) {
        return ((buffer as any).nativeObject as java.nio.ByteBuffer).array();
    }
    const length = buffer.byteLength / 4;
    const testArray = Array.create('float', length);
    ((buffer as any).nativeObject as java.nio.ByteBuffer).asFloatBuffer().get(testArray, 0, length);
    return testArray as number[];
}
export function arrayNativeBuffer(array, useInts = false) {
    if (!Array.isArray(array)) {
        return array;
    }
    const length = array.length;
    const buffer = createArrayBuffer(length, useInts);
    const arrayBuffer = useInts ? new Int8Array(buffer) : new Float32Array(buffer);
    arrayBuffer.set(array);

    return buffer.bb;
}

export const Imgproc = new Proxy(
    {},
    {
        get(target, name, receiver) {
            const nValue = CVImgproc[name];
            if (nValue) {
                if (typeof nValue === 'function') {
                    return function (...args) {
                        for (let index = 0; index < args.length; index++) {
                            const element = args[index];
                            if (element && element._native) {
                                args[index] = element._native;
                            }
                        }
                        let returnValue;
                        if (name === 'findContours') {
                            if (!args[1]) {
                                returnValue = args[1] = new java.util.ArrayList();
                            }
                        }
                        try {
                            const result = nValue(...args);
                            return returnValue || result;
                        } catch (err) {
                            console.error('error calling Imgproc', name, err);
                            return null;
                        }
                    };
                }
                return nValue;
            } else {
                return Reflect.get(target, name, receiver);
            }
        },
    }
);

export class Mat {
    _native: org.opencv.core.Mat;
    constructor(...args) {
        for (let index = 0; index < args.length; index++) {
            const element = args[index];
            if (Array.isArray(element)) {
                args[index] = arrayNativeBuffer(element);
            }
        }
        // @ts-ignore
        this._native = new org.opencv.core.Mat(...args);
        return new Proxy(this, this);
    }
    static ones(...args) {
        return org.opencv.core.Mat.ones.apply(org.opencv.core.Mat, args);
    }
    get(target, name, receiver) {
        const native = this._native;
        if (native[name]) {
            return function (...args) {
                for (let index = 0; index < args.length; index++) {
                    const element = args[index];
                    if (element) {
                        if (element._native) {
                            args[index] = element._native;
                        }
                    }
                }
                const methodName = name;
                if (methodName === 'setTo') {
                    if (!(args[0] instanceof Color)) {
                        args[0] = new Color(args[0]);
                    }
                    args[0] = new CVScalar(args[0].r, args[0].g, args[0].b, args[0].a / 255);
                }
                try {
                    return native[methodName](...args);
                } catch (err) {
                    console.error('error calling Mat', methodName, err);
                    return null;
                }
            };
        } else {
            return Reflect.get(target, name, receiver);
        }
    }
}

export const MatOfByte = createOpenCVClass(org.opencv.core.MatOfByte);
export const MatOfFloat = createOpenCVClass(org.opencv.core.MatOfFloat);
export const MatOfDouble = createOpenCVClass(org.opencv.core.MatOfDouble);
export const MatOfDMatch = createOpenCVClass(org.opencv.core.MatOfDMatch);
export { CVSize as Size, CVScalar as Scalar, CVPoint as Point, CvType };

// export function createMat(rows?, cols?, type?) {
//     // console.log('createMat', rows, cols, type);
//     if (rows !== undefined && cols !== undefined && type !== undefined) {
//         return new Mat(rows, cols, type);
//     } else {
//         return new Mat();
//     }
// }

// export function imread(value: any) {
//     if (value instanceof ImageSource) {
//         value = value.android;
//     }
//     if (value instanceof android.graphics.Bitmap) {
//         const tmp = new Mat(value.getWidth(), value.getHeight(), CvType.CV_8UC1);
//         org.opencv.android.Utils.bitmapToMat(value, tmp as any);
//         return tmp;
//     } else {
//         return org.opencv.imgcodecs.Imgcodecs.imread(value);
//     }
// }
// export class OpenCvCameraPreview extends CvCameraPreviewBase {
//     nativeViewProtected: org.opencv.android.JavaCamera2View;
//     public createNativeView() {
//         const result = new org.opencv.android.JavaCamera2View(this._context, org.opencv.android.CameraBridgeViewBase.CAMERA_ID_BACK);
//         return result;
//     }
//     initNativeView() {
//         super.initNativeView();
//         const nativeView = this.nativeViewProtected;
//         nativeView.setCameraIndex(org.opencv.android.CameraBridgeViewBase.CAMERA_ID_BACK);
//         nativeView.setVisibility(org.opencv.android.CameraBridgeViewBase.VISIBLE);
//         nativeView.enableView();

//         const listener = new org.opencv.android.CameraBridgeViewBase.CvCameraViewListener2({
//             onCameraViewStarted(param0: number, param1: number) {},
//             onCameraViewStopped() {},
//             onCameraFrame: (frame: org.opencv.android.CameraBridgeViewBase.CvCameraViewFrame) => {
//                 this.notify({ eventName: 'processMat', object: this, mat: frame.gray() });
//                 return frame.gray();
//             },
//         });
//         nativeView.setCvCameraViewListener(listener);
//         (nativeView as any).listener = listener;
//     }

//     disposeNativeView() {
//         (this.nativeViewProtected as any).listener = null;
//         super.disposeNativeView();
//     }
//     isCameraStarted = false;
//     cameraStarted() {
//         return this.isCameraStarted;
//     }
//     startCamera() {
//         this.isCameraStarted = true;
//         this.nativeViewProtected.connectCamera(this.getMeasuredWidth(), this.getMeasuredHeight());
//         this.nativeViewProtected.enableFpsMeter();
//     }
//     stopCamera() {
//         this.isCameraStarted = false;
//         this.nativeViewProtected.disconnectCamera();
//     }
// }
