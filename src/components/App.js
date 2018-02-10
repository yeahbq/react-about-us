import React, { Component } from 'react';
import '../css/App.css';
import '../css/Animation.css';
import TopThree from './TopThree'
import Cards from './Cards';
import { VelocityTransitionGroup } from 'velocity-react';


const AboutUs = () =>
  <header className="header">
    <h1>About the team</h1>
  </header>

class App extends Component {
  constructor() {
  super()

this.updateChar = this.updateChar.bind(this)

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
      isSelected:        
        {
          name:"bulbasaur",
          number:"01",
          img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        },
      isLeaving:        
        {
          name:"squirtle",
          number:"07",
          img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
        },
        pos:""
    }


  }
  updateChar (selected, props) {

    const newItems = [selected].concat(this.state.topThree);
    this.setState({topThree: newItems},
      () => {
        const removeItems = this.state.topThree.slice();
        removeItems.splice(this.state.topThree.length-1, 1);
        this.setState({topThree: removeItems});
      }
    )
  }
  
  render() {
    const {topThree,character,isSelected,isLeaving } = this.state
    const props = {
      three:topThree, 
      updateChar: this.updateChar,
    }
    const allPokes = character.map( (user, idx) =>
      <Cards key={idx} char={user} 
      {...props}
      ref={(e) => { }}
      />      
    )

    return (
      <div className="App">
        <AboutUs></AboutUs>
        <VelocityTransitionGroup
            enter={ {animation:'transition.slideLeftIn', duration: 500} }
            leave={ {animation:'transition.slideRightOut', duration: 500} }
            >
          <TopThree topThree={topThree} updateChar={this.updateChar} 
          {...props}
          />
        </VelocityTransitionGroup>

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
