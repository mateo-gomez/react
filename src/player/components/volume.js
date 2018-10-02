import React from 'react'
import VolumeIcon from '../../icons/components/volume'
import './volume.css'
import Mute from '../../icons/components/mute'

export default function Volume (props) {
  console.log(props.toggleMute)
  return (
    <div
      className="Volume"
    >
      <button
        className="Volume-button"
        onClick={props.toggleMute}
      >
        {
          props.mute ?
            <Mute
              color="white"
              size={25}
            />
            :
            <VolumeIcon
              color="white"
              size={25}
            />
        }
      </button>
      <div className="Volume-range">
        <input
          type="range"
          min={0}
          max={1}
          step={.05}
          onChange={props.handleVolumeChange}
        />
      </div>
    </div>
  );
}
