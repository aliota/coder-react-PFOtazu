import React from 'react'
import { Link } from "react-router-dom"
import tuGourmetLogo from '../../assets/logo/tuGourmetLogo.svg'
import './logo.css'

function Logo() {
  return (   
    <>
      <Link to ={"/"}><img src={tuGourmetLogo} alt="Tu Gourmet logo" className='logo img-fluid'/></Link>       
    </>  
    
  )
}

export default Logo