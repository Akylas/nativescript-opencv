import Vue, { registerElement } from 'nativescript-vue';
import * as opencv from 'nativescript-opencv';

registerElement('OpenCvCameraPreview', () => require('nativescript-opencv').OpenCvCameraPreview);

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
