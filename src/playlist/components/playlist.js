import React from 'react'
import Media from './media.js'
import './playlist.css'

// De la siguiente manera se está haciendo con componente funcional

export default function Playlist(props) {
  return (
    <div className="Playlist">
      {
        // console.log(props)
        props.Playlist.map((item) => {
          return <Media {...item} key={item.id} />
        })
      }
    </div>
  )
}

// De la siguiente manera se está haciendo con componente puro o pure component

// export default class Playlist extends Component {
//   render() {
//     const playlist = this.props.data.categories[0].playlist
//     console.log(this.props.data);
//     return (
//       <div className="Playlist">
//         {
//           playlist.map((item) => {
//             return <Media {...item} key={item.id} />
//           })
//         }
//       </div>
//     )
//   }
// }
