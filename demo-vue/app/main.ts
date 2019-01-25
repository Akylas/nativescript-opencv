import Vue from 'nativescript-vue';
import * as opencv from 'nativescript-opencv';


import { getExamples } from './examples';
import * as views from './views';

for (let comp of getExamples()) {
    Vue.component(comp.name, comp);
}

Vue.component(views.Home.name, views.Home);

console.log('opencv version', opencv.getOpenCVVersion());

// Vue.config.silent = false;

new Vue({
    template: `
      <Frame>
        <Home />
      </Frame>
    `
}).$start();
