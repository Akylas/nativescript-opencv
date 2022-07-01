import * as opencv from 'nativescript-opencv';
import Vue from 'nativescript-vue';

console.log('test2');
opencv.init();
console.log('test31');

Vue.registerElement('OpenCvCameraPreview', () => require('nativescript-opencv').OpenCvCameraPreview);
Vue.registerElement('CameraView', () => require('./cameraview').CameraView);
Vue.registerElement('CanvasView', () => require('@nativescript-community/ui-canvas').CanvasView);

import Home from '~/views/Home';
new Vue({
    render: (h) => h(Home)
}).$start();
