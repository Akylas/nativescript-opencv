/// <reference path="./typings/opencv.android.d.ts" />
import { Color } from '@nativescript/core/color';

declare namespace org {
    namespace opencv {
        namespace core {
            interface Mat {
                setTo(color: Color): this;
            }
        }
    }
}
export declare class Mat extends org.opencv.core.Mat {}
export declare class Scalar extends org.opencv.core.Scalar {}
export declare class Size extends org.opencv.core.Size {}
export declare class Point extends org.opencv.core.Point {}
export declare class Imgcodecs extends org.opencv.imgcodecs.Imgcodecs {}
// @ts-ignore
export declare class Imgproc extends org.opencv.imgproc.Imgproc {
    public static findContours(param0: Mat, param1: any, param2: Mat, param3: number, param4: number, param5: Point): any;
}
export declare class Core extends org.opencv.core.Core {}
export declare class MatOfPoint extends org.opencv.core.MatOfPoint {}
export declare class MatOfByte extends org.opencv.core.MatOfByte {}
export declare class CvType extends org.opencv.core.CvType {}

export declare function imageFromMat(mat: Mat): any;
export declare function matFromImage(mat: any): Mat;
// export declare function createMat(rows: any, cols: any, type: any): Mat;
// export declare function imread(value: any): Mat;

export function init();
