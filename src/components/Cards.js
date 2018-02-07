import React, { Component } from 'react';

class Cards extends Component {
    constructor(props) {
      super(props)

    }
  
    render(){
      return(
        <div className="card"
          onClick={()=> this.props.updateChar(this.props.char) } 
        >
          <img className="poke-img" src={this.props.char.img}></img>
          <div className="poke-name">{this.props.char.name}</div>
          <div className="poke-num">#{this.props.char.number}</div>
        </div>
      )
    }
  }

export default Cards;
