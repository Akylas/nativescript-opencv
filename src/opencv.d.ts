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
export declare class Rect extends org.opencv.core.Rect {}
export declare class Scalar extends org.opencv.core.Scalar {}
export declare class Size extends org.opencv.core.Size {}
export declare class Point extends org.opencv.core.Point {}
export declare class Imgcodecs extends org.opencv.imgcodecs.Imgcodecs {}
export declare class Converters extends org.opencv.utils.Converters {}
// @ts-ignore
export declare class Imgproc extends org.opencv.imgproc.Imgproc {
    public static findContours(param0: Mat, param1: any, param2: Mat, param3: number, param4: number, param5?: Point): any;
}
export declare class Core extends org.opencv.core.Core {}
export declare class Dnn extends org.opencv.dnn.Dnn {}
export declare class Net extends org.opencv.dnn.Net {}
export declare class MatOfPoint extends org.opencv.core.MatOfPoint {}
export declare class MatOfRect extends org.opencv.core.MatOfRect {}
export declare class MatOfInt extends org.opencv.core.MatOfInt {}
export declare class MatOfFloat extends org.opencv.core.MatOfFloat {}
export declare class MatOfPoint2f extends org.opencv.core.MatOfPoint2f {}
export declare class MatOfByte extends org.opencv.core.MatOfByte {}
export declare class CvType extends org.opencv.core.CvType {}

export declare function imageFromMat(mat: Mat): any;
export declare function matFromImage(mat: any): Mat;
// export declare function createMat(rows: any, cols: any, type: any): Mat;
// export declare function imread(value: any): Mat;

export function init();
