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
    const {cart,setCartCount ,setCart } = useContext(CartCountContext);
    
    const mostrarOrden = (docRef) => { 
      Swal.fire({ 
        title: '¡Gracias por tu compra!', 
        text: 'Tu número de orden es: '+docRef.id,         
        confirmButtonText: 'Ok' 
      }); 
    };

    const alertaEmailDistinto = () => { 
      Swal.fire({ 
        title: 'No coincide el email!', 
        text: 'Por favor vuelve a ingresarlo ',         
        confirmButtonText: 'Ok' 
      }); 
    };

    const vaciarCarrito = () => { 
      setCart([]); 
      setCartCount(0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();        
        if (email != repito) {
          alertaEmailDistinto();
        }else {         
          setLoading(true);   
          addDoc(collection(myDB , 'orders'), {
              date: new Date(),
              products: [...cart],
              status: "generada"
            }).then((docRef) => {
                  mostrarOrden(docRef);                  
                  setLoading(false);
                  vaciarCarrito(); 
                  handleReset();
            })
            .catch(()=>{
              setLoading(false); 
              setError(true);
            });   
        }         
    };

    const handleReset = () => { 
      setNombre(''); 
      setApellido(''); 
      setTel(''); 
      setEmail('');
      setRepito('');
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
          <Form.Label className='mb-1'>Nombre*</Form.Label>
          <Form.Control
            className='ps-2'
            type="text"            
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </Form.Group>
       
        <Form.Group controlId="formApellido">
          <Form.Label className='mb-1 mt-2'>Apellido*</Form.Label>
          <Form.Control
            className='ps-2'
            type="text"            
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formTel">
          <Form.Label className='mb-1 mt-2'>Teléfono*</Form.Label>
          <Form.Control
            className='ps-2'
            type="text"            
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label className='mb-1 mt-2'>Email*</Form.Label>
          <Form.Control
            className='ps-2'
            type="email"
            placeholder="Ingrese su email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmailRespaldo">
          <Form.Label className='mb-1 mt-2'>Repita su Email*</Form.Label>
          <Form.Control
            className='ps-2'
            type="email"
            placeholder="Repita su email"
            value={repito}
            onChange={(e) => setRepito(e.target.value)}
          />
        </Form.Group>       

        <Button variant="primary" type="submit" className='mt-3 px-3'>
          Enviar
        </Button>
        <Button variant="primary" type="button" onClick={handleReset} className='mt-3 ms-3 px-3'>
          Vaciar formulario
        </Button>

      </Form>
    </Container>
  );
};

export default ContactForm;
