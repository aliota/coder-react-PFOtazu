import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Checkout from './components/checkout/Checkout';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartCountProvider } from './context/CartCountContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
 
  return (
    <CartCountProvider>                
      <BrowserRouter>        
        <Navbar/>            
          <Routes>
            <Route exact  path='/' element={<ItemListContainer title = "Nuestros Productos" />}/>            
            <Route exact path="/category/:idCategory" element={<ItemListContainer title = "Nuestros Productos: " />}/>     
            <Route path="*" element={<ItemListContainer title = "Página no encontrada" />}/>   
            <Route exact path="/item/:idItem" element={<ItemDetailContainer/>}/>  
            <Route exact path="/cart" element={<Checkout/>}/>         
          </Routes> 
      </BrowserRouter>   
    </CartCountProvider>
  )
}

export default App
