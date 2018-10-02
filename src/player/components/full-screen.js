import React from 'react'
import FullScreenIcon from '../../icons/components/full-screen'
import './full-screen.css'

export default function FullScreen (props) {
  return (
    <div
      className="FullScreen"
      onClick={props.handleFullScreenClick}
    >
      <FullScreenIcon
        color="white"
        size={25}
      />
    </div>
  );
}
