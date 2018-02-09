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
this.handleAdd = this.handleAdd.bind(this)
this.handleRemove = this.handleRemove.bind(this)

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
    }


  }
// NOTE TO SELF, INSTEAD OF MAP CURRENT TOP THREE, HAVE IT FIND ADDED AND REMOVED
  updateChar (selected, props, remove) {
    let copy = JSON.parse(JSON.stringify(props))

    this.setState({topThree:[selected], isLeaving:remove, isSelected:selected})
    // this.setState((prevState, props)=> {topThree: [prevState, ...props] })
  }

  removeChar () {
    let newArray = this.state.topThree.slice(0,1)
    this.setState({topThree:newArray})
  }

  handleAdd() {
    this.setState({ topThree: this.state.topThree.concat(this.state.isSelected)});
  }

  handleRemove() {
    this.setState({ topThree: this.state.topThree.slice(0, this.state.topThree.length - 1) });
  }

  // componentDidMount() {
  //   console.log('running on load', this.state.topThree)
  //   this.setState({topThree: [this.state.isSelected, this.state.topThree[1], this.state.isLeaving]})
  // }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({topThree: [this.nextProps.isSelected, this.nextProps.topThree[1], this.nextProps.isLeaving]})
  // }
  
  render() {
    const {topThree,character,isSelected,isLeaving } = this.state
    const allPokes = character.map( (user, idx) =>
      <Cards key={idx} char={user} 
      three={topThree} 
      updateChar={this.updateChar} 
      isSelected={isSelected}
      isLeaving={isLeaving}
      handleAdd={this.handleAdd}
      handleRemove={this.handleRemove}
      />      
    )
    return (
      <div className="App">
        <AboutUs></AboutUs>

          <TopThree topThree={topThree} updateChar={this.updateChar} 
          props={this.state.character}
          isSelected={isSelected}
          isLeaving={isLeaving}
          />
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
