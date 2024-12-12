import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import "./contactForm.css"
import { collection, addDoc } from 'firebase/firestore'; 
import { myDB } from '../../main';
import { useContext } from 'react';
import { CartCountContext } from '../../context/CartCountContext';
import Swal from 'sweetalert2';

function ContactForm () {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');   
    const [repito, setRepito] = useState('');    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {cart } = useContext(CartCountContext);
    const mostrarOrden = (docRef) => { 
      Swal.fire({ 
        title: '¡Gracias por tu compra!', 
        text: 'Tu número de orden es: '+docRef.id,         
        confirmButtonText: 'Ok' 
      }); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();        
        if (email != repito) {
          alert("no hay coincidencia en el mail");
        }else {         
          setLoading(true);   
          addDoc(collection(myDB , 'orders'), {
              date: new Date(),
              products: [...cart],
              status: "generada"
            }).then((docRef) => {
                  mostrarOrden(docRef);
                  setLoading(false); 
            })
            .catch(()=>{
              setLoading(false); 
              setError(true);
            });   
        }         
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

  return (
    <Container>      
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>
       
        <Form.Group controlId="formApellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formTel">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su teléfono"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEmailRespaldo">
          <Form.Label>Repita su Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Repita su email"
            value={repito}
            onChange={(e) => setRepito(e.target.value)}
          />
        </Form.Group>       

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
