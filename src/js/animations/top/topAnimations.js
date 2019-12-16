import { TimelineLite, Power2, Power4 } from 'gsap';
import navTL from '../nav/navAnimations';

const top = document.querySelector('.top'),
  topBigText = top.querySelector('.bigtext'),
  topHeading = top.querySelector('.heading-primary'),
  topBtn = top.querySelector('.btn');

const topTL = () => {
  const tl = new TimelineLite();

  tl.add('start')
    .to(topBigText, 0.8, { autoAlpha: 1, y: 0, ease: Power4.easeOut })
    .to(
      topHeading,
      1.2,
      { autoAlpha: 1, y: 0, ease: Power2.easeOut },
      'start+=0.6'
    )
    .to(topBtn, 0.8, { autoAlpha: 1, y: 0, ease: Power4.easeOut }, 'start+=0.6')
    .add(navTL(), 'start');
};

export default topTL;
