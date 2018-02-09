import React, { Component } from 'react';
import Cards from './Cards';
import { VelocityTransitionGroup, VelocityComponent } from 'velocity-react';
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
        const middleCard = topThree[1]
        const selected = isSelected;
        const leaving = isLeaving;
        const fillCard = (card) => {
            console.log('card', card)
            return <Cards char={card} three={topThree} updateChar={updateChar}  />;
        }
        const headerCards = topThree.map((user, i) => {
            return <Cards style={{order:"-1"}} key={i} char={user} three={topThree} updateChar={updateChar} />;
         });
      return(
        <div className="top-three-card" >
            <VelocityTransitionGroup
            style={{display: "flex"}}
            enter={appSliderAnimation.In}
            leave={appSliderAnimation.Out}
            runOnMount={true}
            >
                {/* {fillCard(selected)} */}
                {headerCards}
                {/* {leaving ? fillCard(leaving) : undefined} */}
                {/* {fillCard(leaving)} */}
    </VelocityTransitionGroup>
        </div>
      )}
  }

export default TopThree;

