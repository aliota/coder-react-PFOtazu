import "./comprador.css"
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore'; 
import { myDB } from '../../main';
import { useContext } from 'react';
import { CartCountContext } from '../../context/CartCountContext';


function Comprador(){
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');       
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {cart } = useContext(CartCountContext);

    const handleSubmit = (e) => {
        e.preventDefault();        
        setLoading(true);          
        addDoc(collection(myDB , 'orders'), {
            date: new Date(),
            products: [...cart],
            status: "generada"
          }).then((docRef) => {
                alert(docRef.id);
                setLoading(false); 
          })
          .catch(()=>{
            setLoading(false); 
            setError(true);
          });    
    };
         

    if (loading) {    
        return (
        <div>              
        <p>Generando orden de compra...</p>    
        </div>   
        )
    }

    if (error) {
        return (
        <div>
        <h1>Error gestionando orden de compra {error}</h1>                
        </div>   
        )
    }
    
    const respaldo = null;
    
    return(
        <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="tel">Teléfono:</label>
        <input
          type="text"
          id="tel"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="respaldo">Repetir Email:</label>
        <input
          type="email"
          id="respaldo"
          value={respaldo}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
     
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Comprador  