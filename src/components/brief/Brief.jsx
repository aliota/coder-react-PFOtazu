import "./brief.css"
import React, { useContext } from 'react';
import { CartCountContext } from '../../context/CartCountContext';

function Brief(){
    const {cart } = useContext(CartCountContext);
    return(
        <div>              
            <p>{JSON.stringify(cart)}</p>
        </div>             
    )
}

export default Brief