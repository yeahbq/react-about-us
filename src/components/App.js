import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';

class App extends Component {
  constructor() {
  super()
  this.state = {
    character:[
      {
        name:"bulbasaur",
        number:"01",
        img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
      },
      {
        name:"charmander",
        number:"02",
        img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
      },
      {
        name:"squirtle",
        number:"03",
        img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
      }
    ]
  }
  }
  render() {
    return (
      <div className="App">
        <header>
          <Card char={this.state.character[0]}></Card>
          <Card char={this.state.character[1]}></Card>
          <Card char={this.state.character[2]}></Card>
        </header>
      </div>
    );
  }
}

const Card = (props) =>
  <div onClick={()=> console.log(props.char)}>
    <img src={props.char.img}></img>
    <div>{props.char.name}</div>
    <div>{props.char.number}</div>
  </div>

export default App;
