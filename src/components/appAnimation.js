
// import { velocityHelpers } from 'velocity-react';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';

const appAnimation = {
  In: {
    animation: 'transition.bounceLeftIn',
    // delay: 100,
    duration: 500,
    // stagger: '150',
    display: 'flex',
  },
  Out: {
    animation: 'transition.perspectiveRightOut', 
    duration: 500
  }
};

export default appAnimation;