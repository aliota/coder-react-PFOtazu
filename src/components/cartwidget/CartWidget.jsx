import {FaShoppingCart} from "react-icons/fa";
import './cartWidget.css'
import React, { useContext } from 'react';
import { CartCountContext } from '../../context/CartCountContext';

function CartWidget() {
  const { cartCount, setCartCount } = useContext(CartCountContext);
  return (
    <div className="aside w-100">
      <div className="carrito">
        <FaShoppingCart size="30px"/>
        <span className="badge">{cartCount}</span>
      </div>
    </div>
    
  )
}

export default CartWidget