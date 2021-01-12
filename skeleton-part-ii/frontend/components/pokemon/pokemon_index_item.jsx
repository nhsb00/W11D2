import React from 'react';
import { Link } from "react-router-dom";

function PokemonIndexItem(props) {
    return (
        <ul>
            {/* single pokemon*/}
            <li className="pokemon-index-item">
                <Link to={`/pokemon/${props.pokemon.id}`}>
                    <span>{props.pokemon.id}</span>
                    <img src={props.pokemon.imageUrl} />
                    <span>{props.pokemon.name}</span>
                </Link>
            </li>
        </ul>
    )
}

export default PokemonIndexItem;

// // export a functional PokemonIndexItem component
// class PokemonIndexItem extends React.Componenet{
//     constructor(props){
//         super(props)
        
//     }
//     render(){
//         return (
//             <ul>
//                 {/* return pokemon's name and image_url */}
               
//             </ul>
//         )
//     }
// }

