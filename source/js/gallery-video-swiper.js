import Swiper from '../js/vendor/swiper.js';

const gallerySwiper = document.querySelector('.gallery__swiper');

export const initGallerySwiper = () => {
  if (gallerySwiper) {
    (() =>
      new Swiper('.gallery__swiper', {
        direction: 'horizontal',
        loop: true,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: 270,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        },
        spaceBetween: 10,
        mousewheel: false,
        keyboard: true,
        allowSlideNext: true,
        allowSlidePrev: true,
      })
    )();
  }
};
