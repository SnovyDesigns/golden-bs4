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

// Enable team swiper below desktop view

let teamToggle = document.querySelector('.team__toggle');

if (window.innerWidth >= 1200) {
  teamToggle.classList.add('team__wrapper');
} else {
  teamToggle.classList.add('swiper-wrapper');
}

const teamSwiper = new Swiper('.team__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true
});
