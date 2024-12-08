import { Link } from "react-router-dom"
import "./item.css"

function Item({product}) {
    const path =  "/item/"+product.id;
    return (
        <div key={product.id} className="card">           
            <Link to ={path}>
                <img src={product.image} alt={product.name} className="img-fluid" />
                <p>{product.name}</p>          
                <p>$ {product.price}</p>            
            </Link>            
        </div>
    )
} 

export default Item