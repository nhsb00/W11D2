import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './../components/pokemon/pokemon_index_container';
import { HashRouter } from "react-router-dom";
import App from './app';
// HashRouter determines which component to render based on which Route's path matches the url.
const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
        {/* <PokemonIndexContainer /> */}
    </HashRouter>
  </Provider >
);

export default Root;