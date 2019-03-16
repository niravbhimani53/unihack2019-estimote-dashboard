import React, { Component } from 'react'
import M from 'materialize-css'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      error_message: '',
    };
  }

  componentDidMount() {
    M.updateTextFields()
  }

  handleusernameChange = (username) => {
    this.setState({
      username: username
    })
  }

  handlePasswordChange = (password) => {
    this.setState({
      password: password
    })
  }

  validationCheck = () => {
    if (this.state.username === 'admin' && this.state.password === 'admin') {
      this.props.history.push('/dashboard')
    }
    else {
      this.setState({
        error_message: 'Invalid-credentials'
      })
    }
  }

  render() {
    return (
      <div className="Login container">

        <div className="center-align">
          Login
        </div>

        <div className="login-container">
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <input id="username" type="text" className="validate" onChange={(e) => this.handleusernameChange(e.target.value)} />
                  <label htmlFor="username">Username</label>
                </div>
                <div className="input-field col s6">
                  <input id="password" type="password" className="validate" onChange={(e) => this.handlePasswordChange(e.target.value)} />
                  <label htmlFor="password">Password</label>
                </div>
              </div>

              <div className="error-message">
                {this.state.error_message}
              </div>

              <button className="waves-effect waves-light btn" onClick={() => this.validationCheck()}>
                Login
            </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}