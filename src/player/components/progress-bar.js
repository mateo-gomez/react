import React from 'react'
import './progress-bar.css'

export default function ProgressBar (props) {
  return (
    <div>
      <input
        type="range"
        min={0}
        max={500}
      />
    </div>
  );
}
