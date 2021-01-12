import React from "react";
import PokemonIndexItem from './pokemon_index_item';
import PokemonIndex from './pokemon_index';

// PokemonDetail to display a Pokemon's information as well as its Items

class PokemonDetail extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.requestSinglePokemon()
    }


    render() {

        return(

        )

    }
}

export default PokemonDetail