import React, { Component } from 'react';
import Cards from './Cards';
import { VelocityTransitionGroup } from 'velocity-react';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';
import appSliderAnimation from './appAnimation';

class TopThree extends Component {
    constructor(props) {
      super(props)
    }  
    render() {
        const {updateChar, topThree} = this.props
        const headerCards = topThree.map((user, i) => {
            return <Cards key={i} char={user} three={topThree} updateChar={updateChar} />;
         });
      return(
        <div className="top-three-card" >
            <VelocityTransitionGroup
            enter={appSliderAnimation.In}
            leave={appSliderAnimation.Out}
            runOnMount={true}
            >
                {headerCards}   
            </VelocityTransitionGroup>
        </div>
      )}
  }

export default TopThree;

