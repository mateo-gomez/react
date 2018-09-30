// console.log('hola mierda');
import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/home'
// import Playlist from './src/playlist/componentes/playlist'
import data from '../api.json'

const homeContainer = document.getElementById('home-container')

const holaMundo = <h1>hola mierda</h1>
// ReactDOM.render(que voy a renderizar, donde lo haré)
render(<Home data={data} />, homeContainer)
