import React, { Component } from 'react';
import Cards from './Cards';
import { VelocityTransitionGroup } from 'velocity-react';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';
import { velocityHelpers } from 'velocity-react';

import appSliderAnimation from './appAnimation';

class TopThree extends Component {
    constructor(props) {
      super(props)
    }  
    render() {
        const {updateChar, topThree, isSelected, isLeaving} = this.props
        const headerCards = topThree.map((user, i) => {
             return   <Cards order={`${i}`} key={i} char={user} three={topThree} updateChar={updateChar} />;

         });
      return(
        <div className="top-three-card" >
            <VelocityTransitionGroup
            style={{display: "flex"}}
            // enter={appSliderAnimation.In}
            leave={appSliderAnimation.Out}
            runOnMount={true}
            >
                {headerCards}
    </VelocityTransitionGroup>
        </div>
      )}
  }

export default TopThree;

