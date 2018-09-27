import React from 'react'
import './pl-amigos.css'

export default function PlAmigos(props) {
  return (
    <div className="PlAmigos">
      <img
        src={props.cover}
        className="img"
      />
      <p>{props.author}</p>
    </div>
  )
}
