import {FaShoppingCart} from "react-icons/fa";
import './cartWidget.css'
import React, { useContext } from 'react';
import { CartCountContext } from '../../context/CartCountContext';
import { Link } from "react-router-dom"

function CartWidget() {
  const { cartCount, setCartCount } = useContext(CartCountContext);
  return (
    <div className="aside w-100">
      <div className="carrito">
        <Link to ={"/cart"}><FaShoppingCart size="30px"/></Link>        
        <span className="badge">{cartCount}</span>
      </div>
    </div>
    
  )
}

export default CartWidget