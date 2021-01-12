import React from 'react';
function PokemonIndexItem(props) {
    return (
        <ul>
            {this.props.pokemon.map((poke) => (
                <li className="pokemon-index-item">
                    <span>{poke.id}</span>
                    <img src={poke.imageUrl} />
                    <span>{poke.name}</span>
                </li>
            ))}
        </ul>
    )
}

export default PokemonIndexItem;

// // export a functional PokemonIndexItem componen
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

