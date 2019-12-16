import * as ScrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax, Power4 } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import staggerToUp from '../common/staggerToUp';

// ------------------------------------------

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

// ------------------------------------------

const controller = new ScrollMagic.Controller(),
  about = document.querySelector('.about'),
  aboutMediaBoxes = about.querySelectorAll('.media');

// ------------------------------------------

const aboutTL = () => {
  const tl = new TimelineMax();

  tl.add(staggerToUp(about));

  return tl;
};

// ------------------------------------------

const mediaTL = (mediaImg, mediaDate, mediaTitle, mediaParagraph, type) => {
  const tl = new TimelineMax();

  if (type === 'even') {
    tl.from(mediaImg, 1.2, {
      x: -60,
      autoAlpha: 0,
      ease: Power4.easeOut
    }).staggerFrom(
      [mediaDate, mediaTitle, mediaParagraph],
      0.6,
      { x: 60, autoAlpha: 0, ease: Power4.easeOut },
      0.25,
      0.4
    );
  } else {
    tl.from(mediaImg, 1.2, {
      x: 60,
      autoAlpha: 0,
      ease: Power4.easeOut
    }).staggerFrom(
      [mediaDate, mediaTitle, mediaParagraph],
      0.6,
      { x: -60, autoAlpha: 0, ease: Power4.easeOut },
      0.25,
      0.4
    );
  }

  tl;

  return tl;
};

// ------------------------------------------

const mediaScene = (media, index) => {
  let mediaImg = media.querySelector('.media__img'),
    mediaDate = media.querySelector('.media__date'),
    mediaTitle = media.querySelector('.media__title'),
    mediaParagraph = media.getElementsByTagName('p');

  let scene = new ScrollMagic.Scene({
    triggerElement: media,
    triggerHook: 0.65,
    reverse: false
  });

  if (index % 2 === 0) {
    scene.setTween(
      mediaTL(mediaImg, mediaDate, mediaTitle, mediaParagraph, 'odd')
    );
  } else {
    scene.setTween(
      mediaTL(mediaImg, mediaDate, mediaTitle, mediaParagraph, 'even')
    );
  }

  scene.addTo(controller);

  return scene;
};

// ------------------------------------------

const aboutScene = () => {
  let scene = new ScrollMagic.Scene({
    triggerElement: about,
    triggerHook: 0.45,
    reverse: false
  })
    .setTween(aboutTL())
    .addTo(controller);

  for (const [index, media] of aboutMediaBoxes.entries()) {
    mediaScene(media, index);
  }

  return scene;
};

// ------------------------------------------

export default aboutScene;
