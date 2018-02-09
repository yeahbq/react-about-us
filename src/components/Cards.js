import React, { Component } from 'react';
// import { VelocityTransitionGroup, VelocityComponent } from 'velocity-react';
// import 'velocity-animate';
// import 'velocity-animate/velocity.ui';
// // import appAnimation from './appAnimation';

class Cards extends Component {
    constructor(props) {
      super(props)
    }
    handleClick = () => {
      // console.log('this is', this)
      // let popped = this.props.three.pop()
      // let copy = JSON.parse(JSON.stringify(this.props.three))
      // let newArr = [this.props.char]
      // let concat = newArr.concat(copy);


      this.props.updateChar(this.props.char, this.props.three, this.props.three[2])
      // this.props.handleAdd();
      // this.props.handleRemove();
      console.log('last line from cards .js handle click')
    }
  
    render(){

 

      return(
        <div className="card"
          onClick={(e)=>this.handleClick(e)} 
          style={{order:"1"}} 
        >
            <img className="poke-img" src={this.props.char.img} alt={"poke-img"}/>
            <div className="poke-name">{this.props.char.name}</div>
            <div className="poke-num">#{this.props.char.number}</div>

        </div>
      )
    }
  }

export default Cards;
