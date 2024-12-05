import "./itemDetail.css"


function ItemDetail ({item}) {   

    return (

        <div key={item.id} className='itemDetail container'>            
             <img src={item.image} alt={item.name} className=" row img-fluid" width="400px" height="400px" />  
             <p className="row w-100 text-center justify-content-center">Categoría: {item.category}</p>            
             <p className="row w-100 text-center justify-content-center">Ingredientes: {item.ingredients}</p>      
             <p>$ {item.price}</p>             
        </div>
        
    )
}

export default ItemDetail