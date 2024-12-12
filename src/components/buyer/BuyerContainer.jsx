import ContactForm from "../contactform/ContactForm";
import "./buyer.css"

function BuyerContainer() {
    return (
      <div className="buyer ">
        <h1>Proceso de Compra</h1>
        <h2 className="mb-2">Completa los datos de contacto</h2>
        <ContactForm/>
      </div>
    )
  }
  
  export default BuyerContainer