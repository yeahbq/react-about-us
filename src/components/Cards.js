import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'


class Cards extends Component {
    constructor(props) {
      super(props)

    }
  
    render(){
      return(
        <CSSTransitionGroup className="card"
        component="div"
        transitionName="order"
        transitionEnterTimeout={500}
        transitionLeaveTimout={500}
        transitionAppear={true}
          onClick={()=> this.props.updateChar(this.props.char) } 
        >
          <img className="poke-img" src={this.props.char.img}></img>
          <div className="poke-name">{this.props.char.name}</div>
          <div className="poke-num">#{this.props.char.number}</div>
        </CSSTransitionGroup>
      )
    }
  }

export default Cards;
