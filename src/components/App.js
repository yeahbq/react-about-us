import React, { Component } from 'react';
import '../css/App.css';
// import TopThree from './TopThree'
import Cards from './Cards';

const AboutUs = () =>
  <header className="header">
    <h1>About Us</h1>
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
      ],
      selected:"",
    }


  }

  updateChar (arrCopy) {
    var prevState = this.state.topThree;
    prevState.unshift(arrCopy)
    prevState.pop()
    this.setState({
      topThree: prevState
    }) 
  }

  componentDidMount() {
    this.setState({topThree:this.state.topThree})
  }
  
  render() {
    return (
      <div className="App">
        <AboutUs></AboutUs>

          <TopThree topThree={this.state.topThree} update={this.updateChar} selected={this.state.selected}></TopThree>

        <div className="card-stack">
          <Cards char={this.state.character[0]} three={this.state.topThree} updateChar={this.updateChar} selected={this.state.selected}></Cards>
          <Cards char={this.state.character[1]} three={this.state.topThree} updateChar={this.updateChar} selected={this.state.selected}></Cards>
          <Cards char={this.state.character[2]} three={this.state.topThree} updateChar={this.updateChar} selected={this.state.selected}></Cards>
          <Cards char={this.state.character[3]} three={this.state.topThree} updateChar={this.updateChar} selected={this.state.selected}></Cards>
          <Cards char={this.state.character[4]} three={this.state.topThree} updateChar={this.updateChar} selected={this.state.selected}></Cards>
          <Cards char={this.state.character[5]} three={this.state.topThree} updateChar={this.updateChar} selected={this.state.selected}></Cards>
        </div>
      </div>
    );
  }
}

class TopThree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newArr: [1,2,3]
    }

    this.setCard = this.setCard.bind(this)

  }  

  handleClick = () => {
    console.log('this is:', this);
  }

  setCard = (e) => {
    var arrCopy = this.props.topThree;
    arrCopy.unshift(this.props.char);
    arrCopy.pop();
    console.log('this', this)
    console.log(arrCopy)
    this.props.updateChar;
  }

  componentDidMount() {
    console.log("setting state", this.state)
    this.setState({newArr: this.props.topThree })
  }

  render() {
    const firstOne = this.state.newArr.map(user => 
        <Cards char={user} three={this.props.topThree} updateChar={this.updateChar}>            {user.name}</Cards>

    )
    return(
  
    <div className="top-three">
        {/* {this.state.newArr.map(user => 
          <div onClick={this.setCard}>
            <Cards key={user.name} char={user} three={this.props.topThree} updateChar={this.updateChar}>            {user.name}</Cards>
          </div>
        )} */}
        {firstOne}
             {/* <button onClick={()=>console.log(this.props.topThree)}>CLICK</button> */}
    </div>
    )}
}

export default App;
