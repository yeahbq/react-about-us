import React, { Component } from 'react';

class Cards extends Component {
    constructor(props) {
      super(props)

    }

    //  setCard = (props) => {
    //   var arrCopy = this.props.three;
    //   arrCopy.unshift(this.props.char);
    //   arrCopy.pop();
    //   console.log(arrCopy)
    //   props.updateChar;
    // }

    // handleClick = () => {
    //     console.log('this is:', this);
    //   }
   
  
    render(){
      return(
        <div className="card"
          onClick={()=> this.props.updateChar(this.props.char) } 
        >
          <img src={this.props.char.img}></img>
          <div>{this.props.char.name}</div>
          <div>{this.props.char.number}</div>
        </div>
      )
    }
  }

export default Cards;
