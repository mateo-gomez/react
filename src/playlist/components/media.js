import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './media.css'

// Con pure component se puede validar automaticamente el estado del componente en shouldComponentUpdate si recibe nuevas propiedades que sean las mismas que ya tenia

export default class Media extends PureComponent {
  // El estado se puede cambiar con constructor como dice la documentación de react o se puede generar solo haciendo lo siguiente
  state = {
    author: 'Mateo Gómez'
  }

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     author: props.author
  //   }
  // //   this.handleClick = this.handleClick.bind(this)
  // }
  handleClick = (event) => {
    // console.log(this.props.title);
    this.setState({
      author: 'Lujiño el pegadiño'
    })
  }

  render() {
    const { title, author, cover } = this.props

    return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img
            className=""
            src={cover}
            width={260}
            height={160}
          />
        </div>
        <h3 className="Media-title ">{title}</h3>
        <p className="Media-author">{this.props.author}</p>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
}
