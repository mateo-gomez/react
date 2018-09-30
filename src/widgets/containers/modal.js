import React, { Component } from 'react'
import { createPortal } from 'react-dom'

export default class ModalContainer extends Component {
  render() {
    // return createPortal(que voy a renderizar, y donde)
    return createPortal(
      this.props.children,
      document.getElementById('modal-container')
    )
  }
}
