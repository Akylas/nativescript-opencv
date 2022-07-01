import * as cv from 'nativescript-opencv';
cv.init();

const hierarchyMat = new cv.Mat(0, 0, cv.CvType.CV_8UC1);
let resizedImage: cv.Mat;
// let grayImageFiltered;
let grayImage: cv.Mat;
let edgesImage: cv.Mat;
let grayImageFiltered: cv.Mat;
export function findAndDrawContours(mat) {
    // const start = Date.now();
    const size = mat.size();
    // const ratio = size.height / 500;
    const ratio = 3;
    const height = Math.round(size.height / ratio);
    const width = Math.round(size.width / ratio);
    if (!resizedImage) {
        resizedImage = new cv.Mat(height, width, cv.CvType.CV_8UC1);
    }
    // if (!grayImage) {
    //     grayImage = new cv.Mat(height, width, cv.CvType.CV_8UC1);
    // }
    if (!grayImageFiltered) {
        grayImageFiltered = new cv.Mat(height, width, cv.CvType.CV_8UC1);
    }
    if (!edgesImage) {
        edgesImage = new cv.Mat(height, width, cv.CvType.CV_8UC1);
    }
    // if (!edgesImageFiltered) {
    //     edgesImageFiltered = new cv.Mat(height, width, cv.CvType.CV_8UC4);
    // }
    cv.Imgproc.resize(mat, resizedImage, new cv.Size(width, height));
    // cv.Imgproc.cvtColor(resizedImage, grayImage, cv.Imgproc.COLOR_RGBA2GRAY);
    // cv.Imgproc.GaussianBlur(grayImage, grayImage, 5, 5, 0);
    cv.Imgproc.bilateralFilter(resizedImage, grayImageFiltered, 7, 50, 50);
    cv.Imgproc.Canny(grayImageFiltered, edgesImage, 60, 120);
    // cv.Imgproc.Canny(grayImageFiltered, edgesImageFiltered, 60, 120);

    //@ts-ignore
    const contours = cv.Imgproc.findContours(edgesImage, hierarchyMat, cv.Imgproc.RETR_LIST, cv.Imgproc.CHAIN_APPROX_SIMPLE);


    //@ts-ignore
    java.util.Collections.sort(contours, new java.util.Comparator({
        compare( lhs,  rhs): number {
            const one = cv.Imgproc.contourArea(rhs);
            const tow = cv.Imgproc.contourArea(lhs);
            if (one === tow) {
                return 0;
            } else if (one < tow) {
                return -1;
            } else {
                return 1;
            }
        },
        equals(value) {
            return false;
        }
    }));

    // console.log('findAndDrawContours', height, width, ratio, contours.size());
    // console.log('findAndDrawContours', (Date.now() - start), size.width, size.height, width, height, contours.size());

    return { contours, width, height, scale: ratio, resizedImage, grayImageFiltered, edgesImage };
}

// function getQuadrilateral(contours, srcSize) {
//     const ratio = srcSize.height / 500;
//     const height = Math.round(srcSize.height / ratio);
//     const width = Math.round(srcSize.width / ratio);
//     const size = new cv.Size(width,height);
// for (let index = 0; index < contours.size(); index++) {
//     const c = contours.get(index);

// }
//             const c2f = new MatOfPoint2f(c.toArray());
//             const peri = cv.Imgproc.arcLength(c2f, true);
//             const approx = new MatOfPoint2f();
//             cv.Imgproc.approxPolyDP(c2f, approx, 0.02 * peri, true);

//             const points = approx.toArray();

//             // select biggest 4 angles polygon
//             if (points.length == 4) {
//                 Point[] foundPoints = sortPoints(points);

//                 if (insideArea(foundPoints, size)) {
//                     return new Quadrilateral( c , foundPoints );
//                 }
//             }
//         }
// }
