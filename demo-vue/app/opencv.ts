import * as cv from 'nativescript-opencv';


export function findAndDrawContours(mat) {
    // let start = Date.now();
    // const realstart = start;
    const size = mat.size();

    const ratio = size.height / 500;
    // const ratio = 1;
    const height = Math.round(size.height / ratio);
    const width = Math.round(size.width / ratio);

    // console.log('resizing', size.width, size.height, ratio, width, height);
    const resizedImage = cv.createMat(height, width, cv.Core.CV_8UC4);
    const grayImage = cv.createMat(height, width, cv.Core.CV_8UC4);
    const cannedImage = cv.createMat(height, width, cv.Core.CV_8UC1);
    // console.log('mats init', (Date.now() - start) / 1000);
    // start = Date.now();
    cv.Imgproc.resize(mat, resizedImage, width, height);
    // console.log('resize duration', (Date.now() - start) / 1000);
    // start = Date.now();
    cv.Imgproc.cvtColor(resizedImage, grayImage, cv.Imgproc.COLOR_RGBA2GRAY);
    // console.log('cvtColor duration', (Date.now() - start) / 1000);
    // start = Date.now();
    cv.Imgproc.GaussianBlur(grayImage, grayImage, 5, 5, 0);
    // console.log('GaussianBlur duration', (Date.now() - start) / 1000);
    // start = Date.now();
    cv.Imgproc.Canny(grayImage, cannedImage, 75, 200);
    // console.log('Canny duration', (Date.now() - start) / 1000);
    // start = Date.now();
    const hierarchy = new cv.Mat();
    const contours = cv.Imgproc.findContours(cannedImage, hierarchy, cv.Imgproc.RETR_LIST, cv.Imgproc.CHAIN_APPROX_SIMPLE);
    // console.log('findContours duration', contours.size());
    // console.log('findContours duration', contours.size, (Date.now() - start) / 1000);

    // console.log('findAndDrawContours', (Date.now() - realstart) / 1000);

    return { contours, width, height };
}
