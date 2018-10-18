import React from 'react'

import Layout from '../components/layout'
import contactStyle from './contact.module.css'

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      emailValue: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value.toUpperCase(),
    })
  }

  handleEmail(event) {
    this.setState({
      emailValue: event.target.value,
    })
  }

  handleSubmit(event) {
    alert(
      'A name was submitted: ' +
        this.state.value +
        'An Email was Submitted: ' +
        this.state.emailValue
    )
    event.preventDefault()
  }

  render() {
    return (
      <div className={contactStyle.formAbs}>
      <Layout>
        <h1>Contact</h1>
        <form className={contactStyle.form} onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              value={this.state.emailValue}
              onChange={this.handleEmail}
            />
          </label>
          <textarea name="" id="" cols="30" rows="10" />
          <input type="submit" value="Submit" />
        </form>
      </Layout>
      </div>
    )
  }
}

export default Contact
