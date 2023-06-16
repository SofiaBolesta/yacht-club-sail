import Swiper from '../js/vendor/swiper.js';

const promoSwiper = document.querySelector('.promo__swiper');

export const initPromoSwiper = () => {
  if (promoSwiper) {
    (() =>
      new Swiper('.promo__swiper', {
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
