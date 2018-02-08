
import { velocityHelpers } from 'velocity-react';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';

const appAnimation = {
  In: {
    animation: 'transition.slideLeftIn',
    delay: 100,
    duration: 1000,
    stagger: '150',
    display: 'flex',
  },
  Out: {
    animation: 'transition.slideRightOut', 
    duration: 1000
  }
};

export default appAnimation;