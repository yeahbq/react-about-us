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
            // enter={ {animation:'transition.expandIn', duration: 500, display:'flex'} }
            leave={ {animation:'transition.perspectiveRightOut', duration: 500} }
            runOnMount={true}
            >
                {headerCards}
            </VelocityTransitionGroup>
        </div>
      )}
  }

export default TopThree;

