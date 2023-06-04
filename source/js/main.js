import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import './vendor/iphone-inline-video';
import './vendor/swiper';
import {initPromoSwiper} from './swiper-promo';
import {initGallerySwiper} from './gallery-video-swiper';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  initPromoSwiper();
  initGallerySwiper();
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
  });
});
