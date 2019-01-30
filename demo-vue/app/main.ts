import Vue, { registerElement } from 'nativescript-vue';
import * as opencv from 'nativescript-opencv';

registerElement('OpenCvCameraPreview', () => require('nativescript-opencv').OpenCvCameraPreview);

import { getExamples } from './examples';
import * as views from './views';

for (const comp of getExamples()) {
    Vue.component(comp.name, comp);
}

Vue.component(views.Home.name, views.Home);
declare  const OPENCV_8UC4;

console.log('opencv version', opencv.getOpenCVVersion(), opencv.CV_8UC1, OPENCV_8UC4);

// Vue.config.silent = false;

new Vue({
    template: `
      <Frame>
        <Home />
      </Frame>
    `
}).$start();
