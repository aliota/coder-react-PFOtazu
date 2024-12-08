import {FaShoppingCart} from "react-icons/fa";
import './cartWidget.css'

function CartWidget() {
  return (
    <div className="aside w-100">
      <div className="carrito">
        <FaShoppingCart size="30px"/>
        <span className="badge">8</span>
      </div>
    </div>
    
  )
}

export default CartWidget