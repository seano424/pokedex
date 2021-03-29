import React, { Component} from "react";
import "./Pokecard.css"

export default class Pokecard extends Component {
  
  render() {
    const { pokemon } = this.props;
    return (
      <div className="Pokecard">
        <h1>I am {pokemon.name}</h1>
      </div>
    );
  }
}
