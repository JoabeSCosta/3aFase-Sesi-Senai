import React from 'react'
import './Header.css'
import { IoPlanetSharp } from "react-icons/io5";


function Header() {
  return (
    <div className='container-header'>
      <h1>Autenticamente Falando</h1>
      <IoPlanetSharp className='icon-planet' />
    </div>
  )
}

export default Header
