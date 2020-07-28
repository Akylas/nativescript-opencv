import * as opencv from 'nativescript-opencv';

console.log('test1')
console.log('test2')
opencv.init();
console.log('test31')

import Vue from 'nativescript-vue';
Vue.registerElement('OpenCvCameraPreview', () => require('nativescript-opencv').OpenCvCameraPreview);
Vue.registerElement('CameraView', () => require('./cameraview').CameraView);
Vue.registerElement('CanvasView', () => require('nativescript-canvas').CanvasView);

import { getExamples } from './examples';
import * as views from './views';

for (const comp of getExamples()) {
    Vue.component(comp.name, comp);
}

Vue.component(views.Home.name, views.Home);
// Vue.config.silent = false;

// function range(start, end, inclusive?) {
//     let mapper = (_, k) => start + k;
//     if (end < start) {
//         mapper = (_, k) => start - k;
//     }

//     return Array.from({ length: Math.abs(start - end) + (inclusive ? 1 : 0) }, mapper);
// }
// const expected = range(0, 256);
// const actual = [];

// const array = (NSArray.arrayWithArray(expected) as any) as any[];

// // array.forEach(x => {
// //     actual.push(x);
// // });

// console.log('test', (array as any).count, expected.length, actual);

// for (const x of array) {
//     actual.push(x);
// }
// console.log('test2', expected.length, actual);

new Vue({
    template: `
      <Frame>
        <Home />
      </Frame>
    `
}).$start();
