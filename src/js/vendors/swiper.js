/* eslint-disable no-unused-vars */
import Swiper from 'swiper';

const portfolioSwiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  // spaceBetween: 25,
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  keyboard: {
    enabled: true
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  }
});

portfolioSwiper.slideToLoop();
