import $ from 'jquery';
import { TimelineMax, Power4 } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

// ------------------------------------------

// eslint-disable-next-line no-unused-vars
const plugins = [ScrollToPlugin];

// ----------------------------------------------

const menuBtn = document.querySelector('.menu__btn'),
  navLogo = document.querySelector('.navbar-brand'),
  navLinks = document.querySelectorAll('.nav-link');

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
  menuBtn.classList.remove('menu__btn--open');
  menuOpen = false;
});

// ------------------------------------------

const navScrollTo = href => {
  const tl = new TimelineMax();
  tl.to(window, 1.5, {
    scrollTo: href,
    ease: Power4.easeOut
  });
  return tl;
};

// ------------------------------------------

for (const link of navLinks) {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    navScrollTo(href);
  });
}

// ------------------------------------------

const navTL = () => {
  const tl = new TimelineMax();

  tl.set(navLinks, { transitionDuration: 0 })
    .to(navLogo, 1.2, {
      y: 0,
      autoAlpha: 1,
      ease: Power4.easeOut
    })
    .to(menuBtn, 0.75, { y: 0, autoAlpha: 1, ease: Power4.easeOut }, '-=1')
    .staggerTo(
      navLinks,
      0.75,
      { y: 0, autoAlpha: 1, ease: Power4.easeOut },
      0.25,
      '-=1'
    )
    .set(navLinks, { transitionDuration: 0.5 });

  return tl;
};

// ------------------------------------------

export default navTL;
