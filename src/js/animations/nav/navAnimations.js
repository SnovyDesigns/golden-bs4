import $ from 'jquery';

const menuBtn = document.querySelector('.menu__btn');
let menuOpen = false;

// ----------------------------------------------

// Menu icon toogle clas for the animation
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('menu__btn--open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('menu__btn--open');
    menuOpen = false;
  }
});

// ----------------------------------------------

// Close menu after click on link
$('.navbar-nav>li>a').on('click', function() {
  $('.navbar-collapse').collapse('hide');
});
