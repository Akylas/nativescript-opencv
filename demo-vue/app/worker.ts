require('globals');
import * as cv from 'nativescript-opencv';
import { Color, isIOS } from 'tns-core-modules/ui/page/page';

function pointerTo(type, value) {
    const outerPtr = interop.alloc(interop.sizeof(interop.Pointer));
    const outerRef = new interop.Reference(type, outerPtr);
    outerRef.value = value;
    return outerPtr;
}

function valueFromPointerNumber(type, value) {
    const ptr = new interop.Pointer(value);
    const ptrToPtr = pointerTo(interop.Pointer, ptr);
    const ref = new interop.Reference(type, ptrToPtr);

    return ref.value;
}

function findAndDrawContours(mat) {
    const size = mat.size();
    console.log('findAndDrawContours', size.width, size.height);

    const ratio = size.height / 500;
    // const ratio = 1;
    const height = Math.round(size.height / ratio);
    const width = Math.round(size.width / ratio);

    console.log('resizing', size.width, size.height, ratio, width, height);
    const resizedImage = cv.createMat(height, width, cv.CV_8UC4);
    const grayImage = cv.createMat(height, width, cv.CV_8UC4);
    const cannedImage = cv.createMat(height, width, cv.CV_8UC1);
    // console.log('testImage4', cannedImage.size());

    cv.resize(mat, resizedImage, width, height);
    cv.cvtColor(resizedImage, grayImage, cv.COLOR_RGBA2GRAY);
    cv.GaussianBlur(grayImage, grayImage, 5, 5, 0);
    cv.Canny(grayImage, cannedImage, 75, 200);
    // console.log('testImage5', cannedImage.size());
    const contours = [];
    const hierarchy = new cv.Mat();
    cv.findContours(cannedImage, contours, hierarchy, cv.RETR_LIST, cv.CHAIN_APPROX_SIMPLE);
    console.log('found contours', contours.length);

    const resultImg = cv.createMat(height, width, cv.CV_8UC4);
    resultImg.setTo(new Color('transparent').ios);
    for (let index = 0; index < contours.length; index++) {
        // console.log('test contour', contours[index].map(v => `${v.x}, ${v.y}`));
        cv.drawContours(resultImg, contours, index, 'red', 2, 8, hierarchy);
    }

    // if (isIOS) {
    //     const nativeDict = NSDictionary.dictionaryWithObjectForKey(resultImg.toImage(), 'image');
    //     console.log('sending native dict', nativeDict);
    //     const message = {
    //         value: { dictionaryPtr: interop.handleof(nativeDict).toNumber() }
    //     };
    //     // increase reference count to account for `dictionaryPtr`
    //     (nativeDict as any).retain();
    //     (global as any).postMessage(message);
    // }

    // const camView = (this.$refs.contoursView as any).nativeView as Image;
    // const imgSource = new ImageSource();
    // imgSource.setNativeSource(resultImg.toImage());
    // camView.imageSource = imgSource;
    cannedImage.releaseMat();
    // resultImg.releaseMat();
    resizedImage.releaseMat();
    grayImage.releaseMat();
    hierarchy.releaseMat();
    mat.releaseMat();
}
(global as any).onmessage = function(msg) {
    if (isIOS) {
        console.log('worker onmessage');
        const dict = valueFromPointerNumber(NSDictionary, msg.data.value.dictionaryPtr) as NSDictionary<string, any>;
        findAndDrawContours(dict.objectForKey('mat'));
        // decrease reference count
        (dict as any).release();
    }
};
