import React from 'react'
import './Demo2.css'
import { useState } from 'react'
import Usuario from './Usuario'

function Demo2() {
    const [valor, setValor] = useState(0)
    const [usuario, setUsuario] = useState('')

  return (
    <div className='container-demo2'>
      
    {valor}
    <div className='botoes-demo2'>

    <button className='button-demo2' onClick={() => setValor(valor + 1)}>+</button>
    <button className='button-demo2' onClick={() => setValor(0)}>reset</button>
    <button className='button-demo2' onClick={() => setValor(valor - 1)}>-</button>
    </div>
    <button className='button-demo2' onClick={() => setUsuario(prompt('Username:'))} >Fazer Login</button>
    {usuario ? <p>Olá {usuario}!</p> : <p>Faça login</p>}

    {usuario && <Usuario username={usuario} />}

    </div>
  )
}

export default Demo2
