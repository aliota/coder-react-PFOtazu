import React from 'react'
import { Link } from "react-router-dom"
import "./menu.css"

function Menu() {
  return (
    <nav className="menu w-100">   
        <ul className="w-100">
            <li >               
                <Link to ={"/category/tartas"}>Tartas</Link>
            </li>
            <li>                
                <Link to ={"/category/postres"}>Postres</Link>
            </li>
            <li>                
                <Link to ={"/category/pre-hecho"}>Pre-hecho</Link>
            </li>  
        </ul>        
    </nav>
  )
}

export default Menu