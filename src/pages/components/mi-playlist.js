import React from 'react'
import './mi-playlist.css'

export default function MiPlaylist(props) {
  const { title } = props

  return (
    <li className="MiPlaylist">{props.title}</li>
  )
}
