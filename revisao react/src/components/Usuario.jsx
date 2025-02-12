import React from 'react'

function Usuario(props) {
  return (
    <div className='container-Usuario'>
      Nome de usuário: {props.username}
    </div>
  )
}

export default Usuario
