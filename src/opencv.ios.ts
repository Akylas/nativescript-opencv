// import { CvCameraPreviewBase } from './opencv.common';
import { ImageSource } from '@nativescript/core/image-source';
import { Color } from '@nativescript/core/color';

declare const OPENCV_8U: number;
declare const OPENCV_8S: number;
declare const OPENCV_16U: number;
declare const OPENCV_16S: number;
declare const OPENCV_32S: number;
declare const OPENCV_32F: number;
declare const OPENCV_64F: number;
declare const OPENCV_USRTYPE1: number;

declare const OPENCV_8UC1: number;
declare const OPENCV_8UC2: number;
declare const OPENCV_8UC3: number;
declare const OPENCV_8UC4: number;

declare const OPENCV_8SC1: number;
declare const OPENCV_8SC2: number;
declare const OPENCV_8SC3: number;
declare const OPENCV_8SC4: number;

declare const OPENCV_16UC1: number;
declare const OPENCV_16UC2: number;
declare const OPENCV_16UC3: number;
declare const OPENCV_16UC4: number;

declare const OPENCV_16SC1: number;
declare const OPENCV_16SC2: number;
declare const OPENCV_16SC3: number;
declare const OPENCV_16SC4: number;

declare const OPENCV_32SC1: number;
declare const OPENCV_32SC2: number;
declare const OPENCV_32SC3: number;
declare const OPENCV_32SC4: number;

declare const OPENCV_32FC1: number;
declare const OPENCV_32FC2: number;
declare const OPENCV_32FC3: number;
declare const OPENCV_32FC4: number;

declare const OPENCV_64FC1: number;
declare const OPENCV_64FC2: number;
declare const OPENCV_64FC3: number;

declare const CV_CHAIN_APPROX_SIMPLE: any;

export namespace Core {
    export const CV_8U = OPENCV_8U;
    export const CV_8S = OPENCV_8S;
    export const CV_16U = OPENCV_16U;
    export const CV_16S = OPENCV_16S;
    export const CV_32S = OPENCV_32S;
    export const CV_32F = OPENCV_32F;
    export const CV_64F = OPENCV_64F;
    export const CV_USRTYPE1 = OPENCV_USRTYPE1;
    export const CV_8UC1 = OPENCV_8UC1;
    export const CV_8UC2 = OPENCV_8UC2;
    export const CV_8UC3 = OPENCV_8UC3;
    export const CV_8UC4 = OPENCV_8UC4;
    export const CV_8SC1 = OPENCV_8SC1;
    export const CV_8SC2 = OPENCV_8SC2;
    export const CV_8SC3 = OPENCV_8SC3;
    export const CV_8SC4 = OPENCV_8SC4;
    export const CV_16UC1 = OPENCV_16UC1;
    export const CV_16UC2 = OPENCV_16UC2;
    export const CV_16UC3 = OPENCV_16UC3;
    export const CV_16UC4 = OPENCV_16UC4;
    export const CV_16SC1 = OPENCV_16SC1;
    export const CV_16SC2 = OPENCV_16SC2;
    export const CV_16SC3 = OPENCV_16SC3;
    export const CV_16SC4 = OPENCV_16SC4;
    export const CV_32SC1 = OPENCV_32SC1;
    export const CV_32SC2 = OPENCV_32SC2;
    export const CV_32SC3 = OPENCV_32SC3;
    export const CV_32SC4 = OPENCV_32SC4;
    export const CV_32FC1 = OPENCV_32FC1;
    export const CV_32FC2 = OPENCV_32FC2;
    export const CV_32FC3 = OPENCV_32FC3;
    export const CV_32FC4 = OPENCV_32FC4;
    export const CV_64FC1 = OPENCV_64FC1;
    export const CV_64FC2 = OPENCV_64FC2;
    export const CV_64FC3 = OPENCV_64FC3;
}

export namespace Imgproc {
    export const COLOR_RGB2BGR = CV_RGB2BGR;
    export const COLOR_RGB2BGR555 = CV_RGB2BGR555;
    export const COLOR_RGB2BGR565 = CV_RGB2BGR565;
    export const COLOR_RGB2BGRA = CV_RGB2BGRA;
    export const COLOR_RGB2GRAY = CV_RGB2GRAY;
    export const COLOR_RGB2HLS = CV_RGB2HLS;
    export const COLOR_RGB2HLS_FULL = CV_RGB2HLS_FULL;
    export const COLOR_RGB2HSV = CV_RGB2HSV;
    export const COLOR_RGB2HSV_FULL = CV_RGB2HSV_FULL;
    export const COLOR_RGB2Lab = CV_RGB2Lab;
    export const COLOR_RGB2Luv = CV_RGB2Luv;
    export const COLOR_RGB2RGBA = CV_RGB2RGBA;
    export const COLOR_RGB2XYZ = CV_RGB2XYZ;
    export const COLOR_RGB2YCrCb = CV_RGB2YCrCb;
    export const COLOR_RGB2YUV = CV_RGB2YUV;
    export const COLOR_RGB2YUV_I420 = CV_RGB2YUV_I420;
    export const COLOR_RGB2YUV_IYUV = CV_RGB2YUV_IYUV;
    export const COLOR_RGB2YUV_YV12 = CV_RGB2YUV_YV12;
    export const COLOR_RGBA2BGR = CV_RGBA2BGR;
    export const COLOR_RGBA2BGR555 = CV_RGBA2BGR555;
    export const COLOR_RGBA2BGR565 = CV_RGBA2BGR565;
    export const COLOR_RGBA2BGRA = CV_RGBA2BGRA;
    export const COLOR_RGBA2GRAY = CV_RGBA2GRAY;
    export const COLOR_RGBA2RGB = CV_RGBA2RGB;
    export const COLOR_RGBA2YUV_I420 = CV_RGBA2YUV_I420;
    export const COLOR_RGBA2YUV_IYUV = CV_RGBA2YUV_IYUV;
    export const COLOR_RGBA2YUV_YV12 = CV_RGBA2YUV_YV12;
    export const COLOR_RGBA2mRGBA = CV_RGBA2mRGBA;

    export const COLOR_BayerBG2BGR = CV_BayerBG2BGR;
    export const COLOR_BayerBG2BGRA = CV_BayerBG2BGRA;
    export const COLOR_BayerBG2BGR_EA = CV_BayerBG2BGR_EA;
    export const COLOR_BayerBG2BGR_VNG = CV_BayerBG2BGR_VNG;
    export const COLOR_BayerBG2GRAY = CV_BayerBG2GRAY;
    export const COLOR_BayerBG2RGB = CV_BayerBG2RGB;
    export const COLOR_BayerBG2RGBA = CV_BayerBG2RGBA;
    export const COLOR_BayerBG2RGB_EA = CV_BayerBG2RGB_EA;
    export const COLOR_BayerBG2RGB_VNG = CV_BayerBG2RGB_VNG;
    export const COLOR_BayerGB2BGR = CV_BayerGB2BGR;
    export const COLOR_BayerGB2BGRA = CV_BayerGB2BGRA;
    export const COLOR_BayerGB2BGR_EA = CV_BayerGB2BGR_EA;
    export const COLOR_BayerGB2BGR_VNG = CV_BayerGB2BGR_VNG;
    export const COLOR_BayerGB2GRAY = CV_BayerGB2GRAY;
    export const COLOR_BayerGB2RGB = CV_BayerGB2RGB;
    export const COLOR_BayerGB2RGBA = CV_BayerGB2RGBA;
    export const COLOR_BayerGB2RGB_EA = CV_BayerGB2RGB_EA;
    export const COLOR_BayerGB2RGB_VNG = CV_BayerGB2RGB_VNG;
    export const COLOR_BayerGR2BGR = CV_BayerGR2BGR;
    export const COLOR_BayerGR2BGRA = CV_BayerGR2BGRA;
    export const COLOR_BayerGR2BGR_EA = CV_BayerGR2BGR_EA;
    export const COLOR_BayerGR2BGR_VNG = CV_BayerGR2BGR_VNG;
    export const COLOR_BayerGR2GRAY = CV_BayerGR2GRAY;
    export const COLOR_BayerGR2RGB = CV_BayerGR2RGB;
    export const COLOR_BayerGR2RGBA = CV_BayerGR2RGBA;
    export const COLOR_BayerGR2RGB_EA = CV_BayerGR2RGB_EA;
    export const COLOR_BayerGR2RGB_VNG = CV_BayerGR2RGB_VNG;
    export const COLOR_BayerRG2BGR = CV_BayerRG2BGR;
    export const COLOR_BayerRG2BGRA = CV_BayerRG2BGRA;
    export const COLOR_BayerRG2BGR_EA = CV_BayerRG2BGR_EA;
    export const COLOR_BayerRG2BGR_VNG = CV_BayerRG2BGR_VNG;
    export const COLOR_BayerRG2GRAY = CV_BayerRG2GRAY;
    export const COLOR_BayerRG2RGB = CV_BayerRG2RGB;
    export const COLOR_BayerRG2RGBA = CV_BayerRG2RGBA;
    export const COLOR_BayerRG2RGB_EA = CV_BayerRG2RGB_EA;
    export const COLOR_BayerRG2RGB_VNG = CV_BayerRG2RGB_VNG;
    export const COLOR_BGR2BGR555 = CV_BGR2BGR555;
    export const COLOR_BGR2BGR565 = CV_BGR2BGR565;
    export const COLOR_BGR2BGRA = CV_BGR2BGRA;
    export const COLOR_BGR2GRAY = CV_BGR2GRAY;
    export const COLOR_BGR2HLS = CV_BGR2HLS;
    export const COLOR_BGR2HLS_FULL = CV_BGR2HLS_FULL;
    export const COLOR_BGR2HSV = CV_BGR2HSV;
    export const COLOR_BGR2HSV_FULL = CV_BGR2HSV_FULL;
    export const COLOR_BGR2Lab = CV_BGR2Lab;
    export const COLOR_BGR2Luv = CV_BGR2Luv;
    export const COLOR_BGR2RGB = CV_BGR2RGB;
    export const COLOR_BGR2RGBA = CV_BGR2RGBA;
    export const COLOR_BGR2XYZ = CV_BGR2XYZ;
    export const COLOR_BGR2YCrCb = CV_BGR2YCrCb;
    export const COLOR_BGR2YUV = CV_BGR2YUV;
    export const COLOR_BGR2YUV_I420 = CV_BGR2YUV_I420;
    export const COLOR_BGR2YUV_IYUV = CV_BGR2YUV_IYUV;
    export const COLOR_BGR2YUV_YV12 = CV_BGR2YUV_YV12;
    export const COLOR_BGR5552BGR = CV_BGR5552BGR;
    export const COLOR_BGR5552BGRA = CV_BGR5552BGRA;
    export const COLOR_BGR5552GRAY = CV_BGR5552GRAY;
    export const COLOR_BGR5552RGB = CV_BGR5552RGB;
    export const COLOR_BGR5552RGBA = CV_BGR5552RGBA;
    export const COLOR_BGR5652BGR = CV_BGR5652BGR;
    export const COLOR_BGR5652BGRA = CV_BGR5652BGRA;
    export const COLOR_BGR5652GRAY = CV_BGR5652GRAY;
    export const COLOR_BGR5652RGB = CV_BGR5652RGB;
    export const COLOR_BGR5652RGBA = CV_BGR5652RGBA;
    export const COLOR_BGRA2BGR = CV_BGRA2BGR;
    export const COLOR_BGRA2BGR555 = CV_BGRA2BGR555;
    export const COLOR_BGRA2BGR565 = CV_BGRA2BGR565;
    export const COLOR_BGRA2GRAY = CV_BGRA2GRAY;
    export const COLOR_BGRA2RGB = CV_BGRA2RGB;
    export const COLOR_BGRA2RGBA = CV_BGRA2RGBA;
    export const COLOR_BGRA2YUV_I420 = CV_BGRA2YUV_I420;
    export const COLOR_BGRA2YUV_IYUV = CV_BGRA2YUV_IYUV;
    export const COLOR_BGRA2YUV_YV12 = CV_BGRA2YUV_YV12;

    export const RETR_LIST = CV_RETR_LIST;
    export const RETR_TREE = CV_RETR_TREE;
    export const RETR_FLOODFILL = CV_RETR_FLOODFILL;
    export const RETR_EXTERNAL = CV_RETR_EXTERNAL;
    export const RETR_CCOMP = CV_RETR_CCOMP;

    export const CHAIN_APPROX_SIMPLE = CV_CHAIN_APPROX_SIMPLE;

    export function cvtColor(mat1: OpenCVMat, mat2: OpenCVMat, colorType: number, dstChannels = 0) {
        return OpenCVWrapper.cvtColor(mat1, mat2, colorType, dstChannels);
    }

    export function Canny(mat1: OpenCVMat, mat2: OpenCVMat, threshold1: number, threshold2: number, apertureSize = 3, l2gradient = false) {
        return OpenCVWrapper.Canny(mat1, mat2, threshold1, threshold2, apertureSize, l2gradient);
    }
    export function GaussianBlur(mat1: OpenCVMat, mat2: OpenCVMat, x: number, y: number, sigmaX: number) {
        return OpenCVWrapper.GaussianBlur(mat1, mat2, x, y, sigmaX);
    }
    export function findContours(mat1: OpenCVMat, hierarchy: OpenCVMat, mode: number, method: number, offset: CvPoint = { x: 0, y: 0 }) {
        return OpenCVWrapper.findContours(mat1, hierarchy, mode, method, offset);
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

    export function contourArea(contours: any[], oriented = false) {
        return OpenCVWrapper.contourArea(contours, oriented);
    }
    export function drawContours(
        mat: OpenCVMat,
        contours: ContoursVector | CvPoint[][],
        contourIdx: number,
        color: string | Color,
        thickness = 1,
        lineType = 8,
        hierarchy: OpenCVMat = null,
        maxLevel: number = Number.MAX_SAFE_INTEGER,
        offset: CvPoint = { x: 0, y: 0 }
    ) {
        OpenCVWrapper.drawContours(mat, contours, contourIdx, (color instanceof Color ? color : new Color(color)).ios, thickness, lineType, hierarchy, maxLevel, offset);
    }
    export function resize(mat1: OpenCVMat, mat2: OpenCVMat, x: number, y: number) {
        return OpenCVWrapper.resize(mat1, mat2, x, y);
    }
}

export { CV_CHAIN_APPROX_SIMPLE };


// class CVMat extends OpenCVMat {
//     release() {
//         this.releaseMat();
//     }
//     // public static initWithImage(image): CVMat {
//     //     return CVMat.alloc().initWithImage(image) as CVMat;
//     // }
//     // public static initWithMat(mat): CVMat {
//     //     return CVMat.alloc().initWithMat(mat) as CVMat;
//     // }
//     public initWithRowsColsType(rows, cols, type): this {
//         console.log('test', 'initWithRowsColsType');
//         return super.initWithRowsColsType(rows, cols, type);
//         // return result as CVMat;
//     }
// }

// OpenCVMat.prototype.release = function() {
//     this.releaseMat();
// };

export function imageFromMat(mat: OpenCVMat) {
    return mat.toImage();
}
const CVMat = OpenCVMat;

export class Mat {
    _native: OpenCVMat;
    constructor(...args) {
        for (let index = 0; index < args.length; index++) {
            const element = args[index];
            // if (Array.isArray(element)) {
            //         args[index] = arrayNativeBuffer(element);
            // }
        }
        // @ts-ignore
        this._native = OpenCVMat.alloc().initWithRowsColsType(args[0], args[1], args[2]);
        return new Proxy(this, this);
    }
    // static ones(...args) {
    //     return org.opencv.core.Mat.ones.apply(org.opencv.core.Mat, args);
    // }
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
                    args[0] = args[0].ios;
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
// type CVMat = new () => OpenCVMat;
// export { CVMat as Mat };

// export function createMat(rows, cols, type) {
//     const result = OpenCVMat.alloc().initWithRowsColsType(rows, cols, type);
//     // console.log('createMat', rows, cols, type, result.size().width, result.size().height);
//     return result;
// }
export function matFromImage(value: ImageSource | UIImage) {
    try {
        if (value instanceof ImageSource) {
            value = value.ios;
        }
        return OpenCVMat.alloc().initWithImage(value as UIImage);
    } catch (err) {
        console.error('matFromImage', err);
        return null;
    }
}
// export function imread(value: any): OpenCVMat {
//     // console.log('imread', value);
//     if (value instanceof ImageSource) {
//         // console.log('imread', 'ImageSource');
//         value = value.ios;
//     }
//     if (value instanceof UIImage) {
//         // const cvMat = OpenCVWrapper.cvMatFromUIImage(value);
//         // console.log('imread', 'UIImage', value.size);
//         return OpenCVMat.alloc().initWithImage(value);
//     }
//     return null;
// }

// class CvCameraPreviewDelegateImpl extends NSObject implements CvCameraPreviewDelegate {
//     public static ObjCProtocols = [CvCameraPreviewDelegate];

//     private _owner: WeakRef<OpenCvCameraPreview>;

//     public static initWithOwner(owner: WeakRef<OpenCvCameraPreview>): CvCameraPreviewDelegateImpl {
//         const impl = CvCameraPreviewDelegateImpl.new() as CvCameraPreviewDelegateImpl;
//         impl._owner = owner;
//         return impl;
//     }
//     processOpenCVMat(mat: OpenCVMat) {
//         const owner = this._owner && this._owner.get();
//         if (owner) {
//             owner.processOpenCVMat(mat);
//         }
//     }
// }
// export class OpenCvCameraPreview extends CvCameraPreviewBase {
//     nativeViewProtected: CvCameraPreview;
//     _delegate: CvCameraPreviewDelegateImpl;
//     public createNativeView() {
//         const result = CvCameraPreview.alloc().initWithFrame(CGRectZero) as CvCameraPreview;
//         // console.log('createNativeView', result, result.delegate);
//         return result;
//     }
//     initNativeView() {
//         super.initNativeView();
//         this._delegate = CvCameraPreviewDelegateImpl.initWithOwner(new WeakRef(this));
//     }

//     disposeNativeView() {
//         this._delegate = null;
//         super.disposeNativeView();
//     }

//     public onLoaded() {
//         super.onLoaded();
//         this.nativeViewProtected.delegate = this._delegate;
//     }

//     public onUnloaded() {
//         this.nativeViewProtected.delegate = null;
//         super.onUnloaded();
//     }
//     cameraStarted() {
//         return this.nativeViewProtected.cameraStarted();
//     }
//     startCamera() {
//         this.nativeViewProtected.startCamera();
//     }
//     stopCamera() {
//         this.nativeViewProtected.stopCamera();
//     }
//     processOpenCVMat(mat: OpenCVMat) {
//         // const mat2 = new OpenCVMat();
//         this.notify({ eventName: 'processMat', object: this, mat });
//         // console.log('processOpenCVMat', mat.channels());
//     }
// }
export function init() {}
