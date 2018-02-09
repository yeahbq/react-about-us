import React, { Component } from 'react';
import Cards from './Cards';
import { VelocityTransitionGroup } from 'velocity-react';

class TopThree extends Component {
    constructor(props) {
      super(props)
    }  
    render() {
        const {updateChar, topThree, isSelected} = this.props
        const headerCards = topThree.map((user, i) => {
             return   <Cards order={i} key={i} char={user} three={topThree} updateChar={updateChar} />;
         });
      return(
        <div className="top-three-card" >
            <VelocityTransitionGroup
            style={{display: "flex"}}
            leave={ {animation:'transition.slideRightOut', duration: 500} }
            >
                {headerCards}
            </VelocityTransitionGroup>
        </div>
      )}
  }

export default TopThree;

