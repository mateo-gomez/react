import React from 'react'
import './modal.css'

export default function Modal(props) {
  return (
    <div className="Modal">
      <h1>esto es un modal</h1>
      {props.children}
      <button onClick={props.handleClick}>cerrar</button>
    </div>
  )
}
