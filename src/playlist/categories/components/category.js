import React from 'react'
import Playlist from '../../components/playlist'
import './category.css'

export default function Category(props) {
  return (
    <div className="Category">
      <p className="Category-description">{props.description}</p>
      <h2 className="Category-title">{props.title}</h2>
      <Playlist
        Playlist={props.playlist}
      />
    </div>
  )
}
