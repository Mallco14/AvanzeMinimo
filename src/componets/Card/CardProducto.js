import React from 'react';
import UseFetch  from '../UseFetch';
import './Cards.css'

const CardProducto = () => {

    const estado = UseFetch(url)
    const {cargando,data}=estado
    
    return (
        <div>
            {
                cargando
                ?
                <h1>Cargando</h1>
                :
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div className='card' style={{width:'14rem'}}>
                    <div className='card-header'>
                        <h5 className='card-title'>{data.id}</h5>

                    </div>
                    <div className='card-body'>
                        <img src={data.sprites.front_default} alt='pokemon'></img>

                    </div>
                    
                </div>
                </div>

                

            }
        </div>
    );
}

export default CardProducto;
