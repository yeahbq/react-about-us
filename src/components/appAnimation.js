
import { velocityHelpers } from 'velocity-react';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';

const appAnimationIn = velocityHelpers.registerEffect({
  defaultDuration: 400,
  calls: [
    [
      {
        opacity: [1, 0],
        translateX: [100, 0]
      },
      1,
      {
        display: 'flex',
        easing: 'spring'
      }
    ]
  ]
});

const appAnimation = {
  In: {
    animation: appAnimationIn,
    delay: 200,
    duration: 1000,
    display: 'flex'
  },
  Out: {
    animation: 'transition.slideRightOut',
    stagger: 100,
    drag: true
  }
};

export default appAnimation;