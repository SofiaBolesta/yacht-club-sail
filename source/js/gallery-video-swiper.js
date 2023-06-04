import Swiper from '../js/vendor/swiper.js';
const gallerySwiper = document.querySelector('.gallery__swiper');

export const initGallerySwiper = () => {
  if (gallerySwiper) {
    (() =>
        new Swiper('.gallery__swiper', {
          direction: 'horizontal',
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          mousewheel: false,
          keyboard: true,
          allowSlideNext: true,
          allowSlidePrev: true,
        })
    )();
  }
};
