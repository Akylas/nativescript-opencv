/// <reference path="./opencv.ios.d.ts" />

declare class CvCameraPreview extends UIImageView {

	delegate: CvCameraPreviewDelegate;
	cameraStarted(): boolean;
	startCamera(): void;

	stopCamera(): void;
}

interface CvCameraPreviewDelegate extends NSObjectProtocol {

	processOpenCVMat(image: OpenCVMat): void;
}
declare var CvCameraPreviewDelegate: {

	prototype: CvCameraPreviewDelegate;
};

declare class OpenCVMat extends NSObject {

	static alloc(): OpenCVMat; // inherited from NSObject

	static new(): OpenCVMat; // inherited from NSObject

	constructor();

	channels(): number;
	releaseMat();
	size(): {width:number, height: number};
	toImage(): UIImage;
	initWithMat(mat: any): this;
	initWithImage(image: UIImage): this;
	initWithRowsColsType(rows: number, cols: number, type: number): this;
	setTo(color: UIColor)
	clone(): OpenCVMat;
}

declare class OpenCVWrapper extends NSObject {
	static UIImageFromCVMat(cvMat: any): UIImage;
	static cvMatFromUIImage(image: UIImage): any;
	static cvMatGrayFromUIImage(image: UIImage): any;

	static Canny(mat1: OpenCVMat, mat2: OpenCVMat, threshold1: number, threshold2: number, apertureSize:number, l2gradient: boolean): void;
	static GaussianBlur(mat1: OpenCVMat, mat2: OpenCVMat, x: number, y: number, sigmaX: number): void;
	static cvtColor(mat1: OpenCVMat, mat2: OpenCVMat, colorType: number, dstChannels: number): void;
	static findContours(mat1: OpenCVMat, contours: NSMutableArray<any>, hierarchy: OpenCVMat, mode: number, method: number, offset: CGPoint): void;
	static resize(mat1: OpenCVMat, mat2: OpenCVMat, x: number, y: number): void;
	static contourArea(contour: NSArray<any> | any[], oriented: boolean): number;
	static drawContours(mat: OpenCVMat, contours: NSArray<any> | any[], contourIdx: number, color: UIColor, thickness: number, lineType: number, hierarchy: OpenCVMat, maxLevel: number, offset: CGPoint): void;

}
