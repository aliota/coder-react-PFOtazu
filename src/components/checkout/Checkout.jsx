import "./checkout.css"
import Brief from '../brief/Brief';
import Comprador from "../comprador/Comprador";
import React, { useContext } from 'react';
import { CartCountContext } from '../../context/CartCountContext';

function Checkout(){
    const {cartCount, setCartCount ,setCart} = useContext(CartCountContext);
    return(
        <div className="checkout">
            <h1>Resumen de la compra</h1>   
            {cartCount? <Brief/>: "Carrito vacío"}
            <div>
                <button className=" mt-5 px-5 btn btn-secondary"  >Comprar</button>
                <button className=" mt-5 ms-5 px-5 btn btn-secondary"  onClick={(() => {setCart([]); setCartCount(0)})}>Vaciar</button>
            </div>              
        </div>             
    )
}

export default Checkout