import * as ScrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax, Power4 } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import staggerToUp from '../common/staggerToUp';

// ------------------------------------------

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

// ------------------------------------------

const controller = new ScrollMagic.Controller(),
  portfolio = document.querySelector('.portfolio'),
  portfolioCaption = portfolio.querySelector('.caption'),
  portfolioSwiper = document.querySelector('.portfolio__swiper');

// ------------------------------------------

const portfolioTL = () => {
  const tl = new TimelineMax();

  tl.add(staggerToUp(portfolio)).staggerFrom(
    [portfolioSwiper, portfolioCaption],
    0.6,
    { y: 30, autoAlpha: 0, ease: Power4.easeInOut },
    0.25,
    '-=0.2'
  );

  return tl;
};

// ------------------------------------------

const portfolioScene = () => {
  let scene = new ScrollMagic.Scene({
    triggerElement: portfolio,
    triggerHook: 0.45,
    reverse: false
  })
    .setTween(portfolioTL())
    .addTo(controller);

  return scene;
};

// ------------------------------------------

export default portfolioScene;
