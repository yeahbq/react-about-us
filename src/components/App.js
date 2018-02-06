import React, { Component } from 'react';
import '../css/App.css';


class Card extends Component {
  constructor(props) {
    super(props)
  }
   setCard = () => {
    var arrCopy = this.props.three;
    arrCopy.unshift(this.props.char);
    arrCopy.pop();
    console.log(arrCopy)
    this.setState( (previousState) =>  
      ({topThree: arrCopy})
    )
  }

  render(){
    return(
      <div className="card"
        onClick={this.setCard} 
      >
        <img src={this.props.char.img}></img>
        <div>{this.props.char.name}</div>
        <div>{this.props.char.number}</div>
      </div>
    )
  }
}

const AboutUs = () =>
  <header className="header">
    <h1>About Us</h1>
  </header>

class App extends Component {
  constructor() {
  super()
  this.state = {
    imgUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
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
      },
      {
        name:"pikachu",
        number:"25",
        img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
      },
      {
        name:"snorlax",
        number:"143",
        img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
      },
      {
        name:"meowth",
        number:"52",
        img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png"
      }
    ],
    topThree:
     [
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
        <AboutUs></AboutUs>
        <header>
          {this.state.topThree.map(user => 
            <Card key={user.name} char={user}></Card>
          )}
        </header>
        <div className="card-stack">
          <Card char={this.state.character[0]} three={this.state.topThree}></Card>
          <Card char={this.state.character[1]} three={this.state.topThree}></Card>
          <Card char={this.state.character[2]} three={this.state.topThree}></Card>
          <Card char={this.state.character[3]} three={this.state.topThree}></Card>
          <Card char={this.state.character[4]} three={this.state.topThree}></Card>
          <Card char={this.state.character[5]} three={this.state.topThree}></Card>
        </div>
      </div>
    );
  }
}

export default App;
