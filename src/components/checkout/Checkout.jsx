import "./checkout.css"
import Brief from '../brief/Brief';
import Comprador from "../comprador/Comprador";

function Checkout(){
    
    return(
        <div>
            <h1>Checkout</h1>   
            <Brief/>
            <Comprador/>
        </div>             
    )
}

export default Checkout