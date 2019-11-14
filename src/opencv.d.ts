import { CvCameraPreviewBase } from './opencv.common';
import { Color } from 'tns-core-modules/color';
export declare namespace Core {
    const CV_8U: number;
    const CV_8S: number;
    const CV_16U: number;
    const CV_16S: number;
    const CV_32S: number;
    const CV_32F: number;
    const CV_64F: number;
    const CV_USRTYPE1: number;
    const CV_8UC1: number;
    const CV_8UC2: number;
    const CV_8UC3: number;
    const CV_8UC4: number;
    const CV_8SC1: number;
    const CV_8SC2: number;
    const CV_8SC3: number;
    const CV_8SC4: number;
    const CV_16UC1: number;
    const CV_16UC2: number;
    const CV_16UC3: number;
    const CV_16UC4: number;
    const CV_16SC1: number;
    const CV_16SC2: number;
    const CV_16SC3: number;
    const CV_16SC4: number;
    const CV_32SC1: number;
    const CV_32SC2: number;
    const CV_32SC3: number;
    const CV_32SC4: number;
    const CV_32FC1: number;
    const CV_32FC2: number;
    const CV_32FC3: number;
    const CV_32FC4: number;
    const CV_64FC1: number;
    const CV_64FC2: number;
    const CV_64FC3: number;
}
export declare namespace Imgproc {
    const COLOR_RGB2BGR: number;
    const COLOR_RGB2BGR555: number;
    const COLOR_RGB2BGR565: number;
    const COLOR_RGB2BGRA: number;
    const COLOR_RGB2GRAY: number;
    const COLOR_RGB2HLS: number;
    const COLOR_RGB2HLS_FULL: number;
    const COLOR_RGB2HSV: number;
    const COLOR_RGB2HSV_FULL: number;
    const COLOR_RGB2Lab: number;
    const COLOR_RGB2Luv: number;
    const COLOR_RGB2RGBA: number;
    const COLOR_RGB2XYZ: number;
    const COLOR_RGB2YCrCb: number;
    const COLOR_RGB2YUV: number;
    const COLOR_RGB2YUV_I420: number;
    const COLOR_RGB2YUV_IYUV: number;
    const COLOR_RGB2YUV_YV12: number;
    const COLOR_RGBA2BGR: number;
    const COLOR_RGBA2BGR555: number;
    const COLOR_RGBA2BGR565: number;
    const COLOR_RGBA2BGRA: number;
    const COLOR_RGBA2GRAY: number;
    const COLOR_RGBA2RGB: number;
    const COLOR_RGBA2YUV_I420: number;
    const COLOR_RGBA2YUV_IYUV: number;
    const COLOR_RGBA2YUV_YV12: number;
    const COLOR_RGBA2mRGBA: number;
    const COLOR_BayerBG2BGR: number;
    const COLOR_BayerBG2BGRA: number;
    const COLOR_BayerBG2BGR_EA: number;
    const COLOR_BayerBG2BGR_VNG: number;
    const COLOR_BayerBG2GRAY: number;
    const COLOR_BayerBG2RGB: number;
    const COLOR_BayerBG2RGBA: number;
    const COLOR_BayerBG2RGB_EA: number;
    const COLOR_BayerBG2RGB_VNG: number;
    const COLOR_BayerGB2BGR: number;
    const COLOR_BayerGB2BGRA: number;
    const COLOR_BayerGB2BGR_EA: number;
    const COLOR_BayerGB2BGR_VNG: number;
    const COLOR_BayerGB2GRAY: number;
    const COLOR_BayerGB2RGB: number;
    const COLOR_BayerGB2RGBA: number;
    const COLOR_BayerGB2RGB_EA: number;
    const COLOR_BayerGB2RGB_VNG: number;
    const COLOR_BayerGR2BGR: number;
    const COLOR_BayerGR2BGRA: number;
    const COLOR_BayerGR2BGR_EA: number;
    const COLOR_BayerGR2BGR_VNG: number;
    const COLOR_BayerGR2GRAY: number;
    const COLOR_BayerGR2RGB: number;
    const COLOR_BayerGR2RGBA: number;
    const COLOR_BayerGR2RGB_EA: number;
    const COLOR_BayerGR2RGB_VNG: number;
    const COLOR_BayerRG2BGR: number;
    const COLOR_BayerRG2BGRA: number;
    const COLOR_BayerRG2BGR_EA: number;
    const COLOR_BayerRG2BGR_VNG: number;
    const COLOR_BayerRG2GRAY: number;
    const COLOR_BayerRG2RGB: number;
    const COLOR_BayerRG2RGBA: number;
    const COLOR_BayerRG2RGB_EA: number;
    const COLOR_BayerRG2RGB_VNG: number;
    const COLOR_BGR2BGR555: number;
    const COLOR_BGR2BGR565: number;
    const COLOR_BGR2BGRA: number;
    const COLOR_BGR2GRAY: number;
    const COLOR_BGR2HLS: number;
    const COLOR_BGR2HLS_FULL: number;
    const COLOR_BGR2HSV: number;
    const COLOR_BGR2HSV_FULL: number;
    const COLOR_BGR2Lab: number;
    const COLOR_BGR2Luv: number;
    const COLOR_BGR2RGB: number;
    const COLOR_BGR2RGBA: number;
    const COLOR_BGR2XYZ: number;
    const COLOR_BGR2YCrCb: number;
    const COLOR_BGR2YUV: number;
    const COLOR_BGR2YUV_I420: number;
    const COLOR_BGR2YUV_IYUV: number;
    const COLOR_BGR2YUV_YV12: number;
    const COLOR_BGR5552BGR: number;
    const COLOR_BGR5552BGRA: number;
    const COLOR_BGR5552GRAY: number;
    const COLOR_BGR5552RGB: number;
    const COLOR_BGR5552RGBA: number;
    const COLOR_BGR5652BGR: number;
    const COLOR_BGR5652BGRA: number;
    const COLOR_BGR5652GRAY: number;
    const COLOR_BGR5652RGB: number;
    const COLOR_BGR5652RGBA: number;
    const COLOR_BGRA2BGR: number;
    const COLOR_BGRA2BGR555: number;
    const COLOR_BGRA2BGR565: number;
    const COLOR_BGRA2GRAY: number;
    const COLOR_BGRA2RGB: number;
    const COLOR_BGRA2RGBA: number;
    const COLOR_BGRA2YUV_I420: number;
    const COLOR_BGRA2YUV_IYUV: number;
    const COLOR_BGRA2YUV_YV12: number;
    const RETR_LIST: number;
    const RETR_TREE: number;
    const RETR_FLOODFILL: number;
    const RETR_EXTERNAL: number;
    const RETR_CCOMP: number;
    const CHAIN_APPROX_SIMPLE: any;
    function cvtColor(mat1: Mat, mat2: Mat, colorType: number, dstChannels?: number): void;
    function Canny(mat1: Mat, mat2: Mat, threshold1: number, threshold2: number, apertureSize?: number, l2gradient?: boolean): void;
    function GaussianBlur(mat1: Mat, mat2: Mat, x: number, y: number, sigmaX: number): void;
    function findContours(mat1: Mat, hierarchy: Mat, mode: number, method: number, offset?: CvPoint): ContoursVector;
    function contourArea(contours: any[], oriented?: boolean): number;
    function drawContours(
        mat: Mat,
        contours: ContoursVector | CvPoint[][],
        contourIdx: number,
        color: string | Color,
        thickness?: number,
        lineType?: number,
        hierarchy?: Mat,
        maxLevel?: number,
        offset?: CvPoint
    ): void;
    function resize(mat1: Mat, mat2: Mat, x: number, y: number): void;
}
declare class Mat extends NSObject {
    constructor();

    channels(): number;
    releaseMat();
    // release();
    size(): { width: number; height: number };
    toImage(): any;
    initWithMat(mat: Mat): this;
    initWithImage(image: any): this;
    initWithRowsColsType(rows: number, cols: number, type: number): this;
    clone(): Mat;
    setTo(color: Color): this;
}

export declare function imageFromMat(mat: Mat): any;
export declare function createMat(rows: any, cols: any, type: any): Mat;
export declare function imread(value: any): Mat;
export declare class OpenCvCameraPreview extends CvCameraPreviewBase {
    nativeViewProtected: any;
    cameraStarted(): boolean;
    startCamera(): void;
    stopCamera(): void;
}
