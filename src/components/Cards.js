import React, { Component } from 'react';
import { VelocityTransitionGroup, VelocityComponent } from 'velocity-react';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';
// import appAnimation from './appAnimation';

class Cards extends Component {
    constructor(props) {
      super(props)
    }
    handleClick = () => {
      this.props.updateChar(this.props.char, this.props.three, this.props.three[1])
    }
  
    render(){

 

      return(
        
        <div className="card"
          onClick={(e)=>this.handleClick(e)} 
          style={{order:`${this.props.order}`}} 
        >
            <img className="poke-img" src={this.props.char.img} alt={"poke-img"}/>
            <div className="poke-name">{this.props.char.name}</div>
            <div className="poke-num">#{this.props.char.number}</div>

        </div>
      )
    }
  }

export default Cards;
