import * as ScrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax, Power4 } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import staggerToUp from '../common/staggerToUp';

// ------------------------------------------

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

// ------------------------------------------

const controller = new ScrollMagic.Controller(),
  contact = document.querySelector('.contact'),
  contactForm = contact.getElementsByTagName('form'),
  contactBtn = contact.querySelector('.btn');

// ------------------------------------------

const contactTL = () => {
  const tl = new TimelineMax();

  tl.add(staggerToUp(contact)).staggerFrom(
    [contactForm, contactBtn],
    0.6,
    { y: 30, autoAlpha: 0, ease: Power4.easeInOut },
    0.25,
    '-=0.2'
  );

  return tl;
};

// ------------------------------------------

const contactScene = () => {
  let scene = new ScrollMagic.Scene({
    triggerElement: contact,
    triggerHook: 0.45,
    reverse: false
  })
    .setTween(contactTL())
    .addTo(controller);

  return scene;
};

// ------------------------------------------

export default contactScene;
