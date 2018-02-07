import React, { Component } from 'react';
import Cards from './Cards'

const TopThree = (props) => 
    <div className="top-three">
        {props.topThree.map(user => 
            <Cards key={user.name} char={user} three={this.state.topThree} updateChar={this.updateChar}></Cards>
        )}
    </div>

export default TopThree;

