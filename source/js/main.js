import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import './vendor/iphone-inline-video';
import './vendor/swiper';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
  });
});
