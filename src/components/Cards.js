import React, { Component } from 'react';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';

class Cards extends Component {
    constructor(props) {
      super(props)
    }

    handleClick = () => {
      this.props.updateChar(this.props.char, this.props.three)
    }
  
    render(){
      
      return(
        
        <div className="card"
          onClick={this.handleClick} 
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
