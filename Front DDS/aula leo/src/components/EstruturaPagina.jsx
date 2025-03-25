import React from 'react'
import './style/EstruturaPagina.css'

const EstruturaPagina = props => {
  return (
    <div className='mainPage'>
      <div className="header">
      <h1>Não quero mais estudar</h1>

      <h2>{props.titulo}</h2>
      </div>
    </div>
  )
}

export default EstruturaPagina
