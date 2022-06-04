import React from 'react';
import '../Card/Cards.css'

function Card({ pokemon }) {
    return (
        
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="card">
                    <img src={pokemon.sprites.front_default} alt="" />
                    <div class="card-body">
                        <h5 class="card-title"> {pokemon.name}</h5>
                    </div>
                
            </div>
           
        </div>
    );
}

export default Card;
