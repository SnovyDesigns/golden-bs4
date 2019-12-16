import * as ScrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax, Power4 } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import staggerToUp from '../common/staggerToUp';

// ------------------------------------------

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

// ------------------------------------------

const controller = new ScrollMagic.Controller(),
  team = document.querySelector('.team'),
  teamSwiperWrapper = team.querySelector('.swiper-wrapper'),
  teamWrapperWorkerCards = document.querySelectorAll(
    '.team__wrapper .worker-card'
  );

// ------------------------------------------

const teamTL = () => {
  const tl = new TimelineMax();

  tl.add(staggerToUp(team));
  if (teamSwiperWrapper !== null) {
    tl.from(
      teamSwiperWrapper,
      0.6,
      { y: 30, autoAlpha: 0, ease: Power4.easeInOut },
      '-=0.2'
    );
  }

  return tl;
};

const teamCardTL = (card, index) => {
  const tl = new TimelineMax();

  tl.from(
    card,
    0.6,
    { y: 30, autoAlpha: 0, ease: Power4.easeInOut },
    `${index * 0.2}`
  );

  return tl;
};

// ------------------------------------------

const cardScene = (card, index) => {
  let scene = new ScrollMagic.Scene({
    triggerElement: card,
    triggerHook: 0.65,
    reverse: false
  })
    .setTween(teamCardTL(card, index))
    .addTo(controller);

  return scene;
};

// ------------------------------------------

const teamScene = () => {
  let scene = new ScrollMagic.Scene({
    triggerElement: team,
    triggerHook: 0.45,
    reverse: false
  })
    .setTween(teamTL())
    .addTo(controller);

  if (teamWrapperWorkerCards !== null) {
    for (const [index, media] of teamWrapperWorkerCards.entries()) {
      cardScene(media, index);
    }
  }

  return scene;
};

// ------------------------------------------

export default teamScene;
