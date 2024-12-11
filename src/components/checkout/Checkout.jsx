import "./checkout.css"
import Brief from '../brief/Brief';
import Comprador from "../comprador/Comprador";
import React, { useContext } from 'react';
import { CartCountContext } from '../../context/CartCountContext';

function Checkout(){
    const {cartCount} = useContext(CartCountContext);
    return(
        <div className="checkout">
            <h1>Resumen de la compra</h1>   
            {cartCount? <Brief/>: "Carrito vacío"}
            {/* <Comprador/> */}
        </div>             
    )
}

export default Checkout