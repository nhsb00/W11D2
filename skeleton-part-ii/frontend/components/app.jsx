import React from 'react'
import { Route } from "react-router-dom";
import PokemonIndexContainer from './../components/pokemon/pokemon_index_container';


//  seting up a root Route that will render the component when path="/"
const App = () => (
    <Route path="/" component={PokemonIndexContainer} />
) 

export default App;