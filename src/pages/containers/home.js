import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../playlist/categories/components/categories'
import Related from '../components/related'

export default class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <Related categories={this.props.data.categories}/>
        <Categories categories={this.props.data.categories} />
      </HomeLayout>
    )
  }
}
