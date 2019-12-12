import { TweenLite, TweenMax, Linear } from 'gsap';
import Draggable from 'gsap/Draggable';

var lastX = 0;
var direction;
var animDirection;
Draggable.create(document.createElement('div'), {
  trigger: '#container',
  type: 'x',
  minimumMovement: 10,
  onDragStart: function() {
    if (inAnimation && inAnimation.isActive()) {
      // inAnimation.timeScale(10);
      // outAnimation.timeScale(10);
      TweenMax.to([inAnimation, outAnimation], 0.3, { timeScale: 10 });

      if (this.getDirection() === 'left') {
        nextSlide = slides[currentSlide.index - 1] || slides[slides.length - 1];
      } else {
        nextSlide = slides[currentSlide.index + 1] || slides[0];
      }
    } else if (this.getDirection() === 'left') {
      setSlide(slides[currentSlide.index - 1] || slides[slides.length - 1]);
    } else {
      setSlide(slides[currentSlide.index + 1] || slides[0]);
    }
  }
});

var inAnimation = null;
var outAnimation = null;
var nextSlide = null;
var $container = document.getElementById('container');
var $containerWidth = $container.offsetWidth;
TweenMax.set('#container', { perspective: $containerWidth * 1.5 });
TweenMax.set('.slide', {
  backfaceVisibility: 'hidden',
  transformOrigin: '50% 50% -' + $containerWidth / 2
});

window.addEventListener('resize', function() {
  var $containerWidth = $container.offsetWidth;

  TweenMax.set('#container', { perspective: $containerWidth * 1.5 });
  TweenMax.set('.slide', {
    transformOrigin: '50% 50% -' + $containerWidth / 2
  });
});

document.getElementById('prev').addEventListener('click', function() {
  nextSlide = slides[currentSlide.index - 1] || slides[slides.length - 1];
  if (inAnimation && inAnimation.isActive()) {
    TweenMax.to([inAnimation, outAnimation], 0.3, { timeScale: 10 });
  } else {
    setSlide(nextSlide);
  }
});

document.getElementById('next').addEventListener('click', function() {
  nextSlide = slides[currentSlide.index + 1] || slides[0];
  if (inAnimation && inAnimation.isActive()) {
    TweenMax.to([inAnimation, outAnimation], 0.3, { timeScale: 10 });
  } else {
    setSlide(nextSlide);
  }
});

TweenLite.defaultEase = Linear.easeNone;

var slideDelay = 1.5;
var slideDuration = 1;

var slideElements = document.querySelectorAll('.slide');
var slides = Array.prototype.map.call(slideElements, createSlide);

slides.forEach(function(slide, i) {
  slide.next = slides[i + 1] || slides[0];
  slide.duration = slideDuration;
});

var currentSlide = slides[0];

//var autoPlay = TweenLite.delayedCall(slideDelay, setSlide);

function setSlide(slide) {
  //autoPlay.restart(true);

  if (slide === currentSlide) {
    return;
  }

  if (currentSlide.index === 0 && slide.index === slides.length - 1) {
    currentSlide.setPrevInactive();
    currentSlide = slide;
    currentSlide.setPrevActive();
  } else if (currentSlide.index === slides.length - 1 && slide.index === 0) {
    currentSlide.setInactive();
    currentSlide = slide;
    currentSlide.setActive();
  } else if (slide.index < currentSlide.index) {
    currentSlide.setPrevInactive();
    currentSlide = slide;
    currentSlide.setPrevActive();
  } else {
    currentSlide.setInactive();
    currentSlide = slide;
    currentSlide.setActive();
  }
}

function createSlide(element, index) {
  var slide = {
    next: null,
    duration: 0,
    index: index,
    element: element,
    isActive: false,
    setActive: setActive,
    setInactive: setInactive,
    setPrevActive: setPrevActive,
    setPrevInactive: setPrevInactive
  };

  if (index === 0) {
    TweenMax.set(element, { autoAlpha: 1 });
  } else {
    TweenMax.set(element, { autoAlpha: 0 });
  }

  function setActive() {
    animDirection = 1;
    slide.isActive = true;
    inAnimation = TweenLite.fromTo(
      element,
      slide.duration,
      { rotationY: -90, autoAlpha: 1 },
      { rotationY: 0, onComplete: callNext }
    );
  }

  function setPrevActive() {
    animDirection = -1;
    slide.isActive = true;
    inAnimation = TweenLite.fromTo(
      element,
      slide.duration,
      { rotationY: 90, autoAlpha: 1 },
      { rotationY: 0, onComplete: callNext }
    );
  }

  function setInactive() {
    slide.isActive = false;
    outAnimation = TweenLite.to(element, slide.duration, {
      rotationY: 90,
      onComplete: setAlpha
    });
  }

  function setPrevInactive() {
    slide.isActive = false;
    outAnimation = TweenLite.to(element, slide.duration, {
      rotationY: -90,
      onComplete: setAlpha
    });
  }

  function setAlpha() {
    var $this = this.target;
    TweenMax.set($this, { autoAlpha: 0 });
  }

  function callNext() {
    if (nextSlide) {
      setSlide(nextSlide);
      nextSlide = null;
    }
  }

  return slide;
}
