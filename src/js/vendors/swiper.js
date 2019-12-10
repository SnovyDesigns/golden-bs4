import Swiper from 'swiper';

const mySwiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  // spaceBetween: 25,
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  }
});

mySwiper.slideToLoop();
