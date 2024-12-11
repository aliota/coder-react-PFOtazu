import "./brief.css"
import React, { useContext } from 'react';
import { CartCountContext } from '../../context/CartCountContext';

function Brief(){
    const {cart } = useContext(CartCountContext);
    const subtotal = () => {
        return cart.reduce((acumulador, elem) => (
            acumulador + elem.price * elem.qty
        ),0);      
    };    


    return(
        <div>   
            <ul className="container">                  
                {cart.map((elem)=>(
                <li key={elem.id} className="mb-3 row"> 
                    <div className="col-8">
                        <h2>{elem.name} </h2> 
                        <p className="ms-3">Precio unitario $ {elem.price}</p>
                        <p className="ms-3">Cantidad: {elem.qty}</p>
                    </div>  
                    <div className="col-4">                       
                        <img src={elem.image} width={100} alt={elem.name} className="img-fluid ms-3" />
                    </div>                  
                </li>                            
                ))}  
            </ul> 
            <h3 >Subtotal $ {subtotal()}</h3>  
        </div>             
    )
}

export default Brief