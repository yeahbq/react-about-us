import React, { Component } from 'react';
import Cards from './Cards'



class TopThree extends Component {
    constructor(props) {
      super(props)
    }  
  
    render() {
      const { topThree, updateChar} = this.props
      const firstOne = this.props.topThree.map((user,idx) => 
        <div className="top-three-card">
          <Cards key={idx} char={user} three={topThree} updateChar={updateChar}
          >
  
          </Cards>
  
        </div>
  
      )
      return(
    
      <div className="top-three">
          {firstOne}
      </div>
      )}
  }

export default TopThree;

