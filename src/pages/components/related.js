import React from 'react'
import logo from '../../../images/logo.png'
import MiPlaylist from './mi-playlist'
import PlAmigos from './pl-amigos'
import './related.css'


export default function Related(props) {
  return (

    <div className="Related">
      <img src={logo} width={250} />
      <h2 className="Titulo">Mi Playlist</h2>
      <div>
        <ol>
          {
            props.categories[0].playlist.map((item) => {
              return <MiPlaylist {...item} />
            })
          }
        </ol>
      </div>
      <div>
        <h2>playlist de amigos</h2>
        {
          props.categories[1].playlist.map((item) => {
            return <PlAmigos {...item} />
          })
        }
      </div>
    </div>


  )
}
