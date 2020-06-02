/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react'
import './Pokecard.css'
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

//function to pad numbers to use higher quality images from our img api
let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num)

class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`
        return(
            <div className="Pokecard"> 
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name}/>
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">EXP: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard