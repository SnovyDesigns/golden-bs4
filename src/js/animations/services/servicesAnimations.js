import * as ScrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax, Power4 } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import staggerToUp from '../common/staggerToUp';

// ------------------------------------------

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

// ------------------------------------------

const controller = new ScrollMagic.Controller(),
  services = document.querySelector('.services'),
  servicesBoxes = services.querySelectorAll('.box');

// ------------------------------------------

const servicesTL = () => {
  const tl = new TimelineMax();

  tl.add(staggerToUp(services)).staggerFrom(
    servicesBoxes,
    0.6,
    { y: 30, autoAlpha: 0, ease: Power4.easeInOut },
    0.25,
    '-=0.2'
  );

  return tl;
};

// ------------------------------------------

const servicesScene = () => {
  let scene = new ScrollMagic.Scene({
    triggerElement: services,
    triggerHook: 0.45,
    reverse: false
  })
    .setTween(servicesTL())
    .addTo(controller);
  return scene;
};

// ------------------------------------------

export default servicesScene;
