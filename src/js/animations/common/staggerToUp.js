import { TimelineLite, Power2 } from 'gsap';

// ------------------------------------------

const staggerToUp = section => {
  const tl = new TimelineLite();

  tl.staggerFrom(
    [
      section.querySelector('.heading-secondary'),
      section.querySelector('.prime')
    ],
    1,
    {
      y: 30,
      autoAlpha: 0,
      ease: Power2.easeOut,
      clearProps: 'all'
    },
    0.4
  );

  return tl;
};

// ------------------------------------------

export default staggerToUp;
