import { useEffect, useState } from "react";
import "./itemDetail.css"




function ItemDetail ({item}) {   
    const [count, setCount] = useState(0);

    return (

        <div key={item.id} className='itemDetail container'>            
            <img src={item.image} alt={item.name} className=" row img-fluid" width="400px" height="400px" />  
            <p className="row w-100 text-center justify-content-center">Categoría: {item.category}</p>            
            <p className="row w-100 text-center justify-content-center">Ingredientes: {item.description}</p>      
            <p>$ {item.price}</p>   

            <div className="row w-100 text-center justify-content-center" aria-label="Agregar o quitar items al carrito">
                <div className="col-1 btn-group" role="group" aria-label="First group">
                    <button type="button" className="btn btn-outline-danger" onClick={() => setCount((count) => (count-1)<0?0:count-1)}>-</button>    
                </div>
                <div className="col-2" role="group" aria-label="Second group">
                    <span className="cantidad">{count}</span>                
                </div>
                <div className="col-1 btn-group" role="group" aria-label="Third group">
                    <button type="button" className="btn btn-outline-success"  onClick={() => setCount((count) => count + 1)}>+</button>
                </div>
                <div className="col-6 btn-group" role="group" aria-label="Fourth group">
                    <button type="button" className=" ms-5 btn btn-primary">Agregar Carrito</button>
                </div>
            </div>

        </div>
        
    )
}

export default ItemDetail