import React, { Component } from 'react';
import '../css/App.css';
import '../css/Animation.css';
import TopThree from './TopThree'
import Cards from './Cards';
import { CSSTransitionGroup } from 'react-transition-group'

const AboutUs = () =>
  <header className="header">
    <h1>About the team</h1>
  </header>

class App extends Component {
  constructor() {
  super()

this.updateChar = this.updateChar.bind(this)
this.removeChar = this.removeChar.bind(this)

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
        number:"04",
        img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
      },
      {
        name:"squirtle",
        number:"07",
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
          number:"04",
          img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
        },
        {
          name:"squirtle",
          number:"07",
          img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
        }
      ],
      isSelected:"",
      isLeaving:"",
    }


  }

  updateChar (selected, props, remove) {
    this.setState({topThree:props})
    this.setState({isLeaving:remove})
  }

  removeChar () {
    let newArray = this.state.topThree.slice(0,2)
    this.setState({topThree:newArray})
  }
  
  render() {
    const {topThree,character } = this.state
    const allPokes = character.map( (user, idx) =>
      <Cards key={idx} char={user} three={topThree} updateChar={this.updateChar} 
      removeChar={this.removeChar}
      ></Cards>
      
    )
    return (
      <div className="App">
        <AboutUs></AboutUs>

          <TopThree topThree={topThree} updateChar={this.updateChar} props={this.state.character}></TopThree>
        <div className="card-stack">
          {allPokes}
          {allPokes}
          {allPokes}          
          {allPokes}       
          {allPokes}
        </div>
      </div>
    );
  }
}

export default App;
