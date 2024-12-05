import Logo from "../logo/Logo"
import Menu from "../menu/Menu"
import CartWidget from "../cartwidget/CartWidget"
import "./navbar.css"

function Navbar() {
  return (
    <nav className="navbar container-fluid">
        <div className="row vw-100 h-100 justify-content-around">
            <div className="col-2 contenedor-logo" >
                <Logo/>
            </div>           
            <div className="col-7 contenedor-menu">
                <Menu/>
            </div>
            <div className="col-2 contenedor-carrito">
                <CartWidget/> 
            </div>            
        </div>        
    </nav>
  )
}

export default Navbar