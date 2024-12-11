import Comprador from "../comprador/Comprador";
import "./buyer.css"

function Buyer() {
    return (
      <div className="buyer">
        <h1>Proceso de Compra</h1>
        <h2>Paso 1 Completar los datos de contacto</h2>
        <Comprador/>
      </div>
    )
  }
  
  export default Buyer