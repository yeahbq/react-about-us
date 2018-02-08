import React, { Component } from 'react';
// import { VelocityTransitionGroup } from 'velocity-react';
// import 'velocity-animate';
// import 'velocity-animate/velocity.ui';
// // import appAnimation from './appAnimation';

class Cards extends Component {
    constructor(props) {
      super(props)

    }
  
    render(){
      const handleClick = () => {
        this.props.updateChar(this.props.char)
        // this.props.removeChar(this.props.char)
      }

      return(
        <div className="card"
          onClick={handleClick} 
        >
            <img className="poke-img" src={this.props.char.img}></img>
            <div className="poke-name">{this.props.char.name}</div>
            <div className="poke-num">#{this.props.char.number}</div>
        </div>
      )
    }
  }

export default Cards;
