import Comprador from "../comprador/Comprador";
import ContactForm from "../contactform/ContactForm";
import "./buyer.css"

function BuyerContainer() {
    return (
      <div className="buyer">
        <h1>Proceso de Compra</h1>
        <h2>Completar los datos de contacto</h2>
        <ContactForm/>
      </div>
    )
  }
  
  export default BuyerContainer