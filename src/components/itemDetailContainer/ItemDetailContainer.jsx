import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore'; 
import { myDB } from '../../main';
import ItemDetail from '../itemDetail/ItemDetail';
import "./itemDetailContainer.css"



function ItemDetailContainer () {
  
  const [item, setItem] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { idItem } = useParams();

  useEffect(() => {
    setLoading(true);  
    const product = doc(myDB,"items",idItem);
    getDoc(product).then((snapshot)=>{                
        if(snapshot.exists()){           
            setItem({id: snapshot.id, ...snapshot.data()});               
          }  
        setLoading(false);     
    })
    .catch(()=>{
      setError(true);
    });    
   
  }, [idItem]); 
 
  

  if (loading) {    
    return (
      <div className="itemDetailContainer">               
       <p>Cargando...</p>    
    </div>   
    )
  }

  if (error) {
    return (
      <div className="itemDetailContainer">          
       <p>Error cargando producto</p>    
    </div>   
    )
  }

    return (
      <div className='itemDetailContainer'>   
           <h1>{item.name}</h1>         
           <ItemDetail  item = {item} /> 
      </div>        
    )

}

export default ItemDetailContainer