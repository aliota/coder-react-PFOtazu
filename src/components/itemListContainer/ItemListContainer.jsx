import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from '../itemList/ItemList';
import { collection, doc, getDocs } from 'firebase/firestore'; 
import { myDB } from '../../main';
import "./itemListContainer.css"


function ItemListContainer({title}) {

  const [data, setData] = useState([]); 
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { idCategory } = useParams();  

  useEffect(() => { 
    const fetchData = async () => { 
      try { const querySnapshot = await getDocs(collection( myDB, 'items',)); 
            const dataList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); 
            setData(dataList); 
            setItems(dataList);
          } 
      catch (error) { 
            setError(error.message); 
      } 
      finally { 
        setLoading(false); 
      } 
    }; 
    fetchData(); 
  }, []); 
 
  useEffect(() => {           
    if(idCategory && data!=[]){
      const newItems = data.filter((producto)=> producto.category === idCategory );  
      setItems(newItems); 
    }else{       
      setItems(data); 
    }          
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
       <h1>{title}</h1>     
       <p>Error cargando productos: {error}</p>    
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