// console.log('hola mierda');
import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/home'
// import Playlist from './src/playlist/componentes/playlist'
import data from '../api.json'

const app = document.getElementById('app')

const holaMundo = <h1>hola mierda</h1>
// ReactDOM.render(que voy a renderizar, donde lo haré)
render(<Home data={data} />, app)
