/* eslint-disable no-unused-vars */
import Swiper from 'swiper';

const portfolioSwiper = new Swiper('.portfolio__swiper', {
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

const swiperToggle = document.querySelector('.swiper-toggle');

if (window.innerWidth < 768) {
  swiperToggle.classList.add('swiper-wrapper');
  var swiper = new Swiper('.team__swiper', {
    slidesPerView: 1,
    spaceBetween: 30
  });
} else {
  swiperToggle.classList.add('team__wrapper');
}
