import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from '../itemList/ItemList';
import { collection, getDocs } from 'firebase/firestore'; 
import { myDB } from '../../main';
import "./itemListContainer.css"


function ItemListContainer({title}) {
  
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { idCategory } = useParams();  

  useEffect(() => {
    setLoading(true);  
    getDocs(collection( myDB, 'items',)).then(querySnapshot=>{      
      const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); 
      if(idCategory){
        const newItems = items.filter((producto)=> producto.category === idCategory );  
        setItems(newItems); 
      }else{       
        setItems(items); 
      }        
      setLoading(false);     
    })
    .catch(()=>{
      setLoading(false); 
      setError(true);
    });    
   
  }, [idCategory]);



  if (loading) {    
    return (
      <div className="itemListContainer">
       <h1>{title}</h1>          
       <p>Cargando...</p>    
    </div>   
    )
  }

  if (error) {
    return (
      <div className="itemListContainer">
       <h1>Error cargando productos: {error}</h1>                
      </div>   
    )
  }

  return (
    <div className="itemListContainer">
       <h1>{title}</h1>      
       <ItemList items = {items} /> 
    </div>   
  )
}

export default ItemListContainer