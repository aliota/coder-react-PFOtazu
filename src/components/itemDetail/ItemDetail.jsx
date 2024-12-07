import { useEffect, useState } from "react";
import "./itemDetail.css"




function ItemDetail ({item}) {   
    const [count, setCount] = useState(0);

    return (

        <div key={item.id} className='itemDetail container'>   
            <div className="row">
                <img src={item.image} alt={item.name} className=" col-4 img-fluid" />                 
                <div className="col-8 align-content-center">
                    <p className="row w-100 mb-1 text-center justify-content-center">Categoría: {item.category}</p>            
                    <p className="row w-100 mb-1 text-center justify-content-center">Ingredientes: {item.description}</p>      
                    <p className="row w-100 mb-5 text-center justify-content-center">Precio: $ {item.price}</p>   

                    <div className="row w-100 text-center justify-content-center" aria-label="Agregar o quitar items al carrito">
                        <div className="col-1 btn-group" role="group" aria-label="First group">
                            <button type="button" className="btn btn-outline-danger" onClick={() => setCount((count) => (count-1)<0?0:count-1)}>-</button>    
                        </div>
                        <div className="col-1" role="group" aria-label="Second group">
                            <span className="cantidad">{count}</span>                
                        </div>
                        <div className="col-1 btn-group" role="group" aria-label="Third group">
                            <button type="button" className="btn btn-outline-success"  onClick={() => setCount((count) => count + 1)}>+</button>
                        </div>
                        <div className="col-4 btn-group" role="group" aria-label="Fourth group">
                            <button type="button" className=" ms-5 btn btn-secondary">Agregar Carrito</button>
                        </div>
                        <div className="col-4 btn-group" role="group" aria-label="Fifth group">
                            <button type="button" className=" ms-5 btn btn-primary">Ir al Carrito</button>
                        </div>
                    </div>
                </div>                
            </div>  
        </div>      
    )
}

export default ItemDetail