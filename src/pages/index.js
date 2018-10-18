import React, { Component } from 'react'
import Splash from '../components/splash'
import Contact from './contact'

import Layout from '../components/layout'

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
    }
    this.handleVisibility = this.handleVisibility.bind(this)
  }

  handleVisibility() {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible,
    }))
    console.log(this.state.isVisible)
  }

  render() {
    return (
      <Layout>
        <h3 onClick={this.handleVisibility}>Click Me</h3>
        <div>{this.state.isVisible ? <Contact /> : ''}</div>
        <Splash />
      </Layout>
    )
  }
}

export default IndexPage
