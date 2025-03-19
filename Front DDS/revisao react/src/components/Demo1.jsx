import React from 'react'
import './Demo1.css'

function Demo1() {

  function responderClique() {
    alert('Você clicou no botão')
  }

  return (
    <div className='container-demo1'>
      <button className='button-demo1' onClick={responderClique}>Clique Aqui</button>

      <button className='button-demo1' onClick={() => {alert('Eu nasci de uma arrow function')}}>👌</button>
      <img className='peixe' src="./imagens/Innovation.gif" alt="peixe" />
    </div>
  )
}

export default Demo1
