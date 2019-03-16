import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.scss'
import DashBoard from './views/dashboard'
import Login from './views/login'
import 'materialize-css/dist/css/materialize.min.css'
import Header from './components/header'
import { CONSTANTS } from './helper/urlConstants'
import 'material-icons'

class App extends Component {
  componentDidMount() {
    document.title = "Estimote Dashboard"
  }

  loginStatus = (status) => {
    this.setState({
      loginStatus: status
    })
  }

  render() {
    return (
      <div className="App">
        {
          window.location.pathname !== '/' ? (
            <header>
              <Header />
            </header>
          ) : null
        }

        <main>
          <Switch>
            <Route exact path={CONSTANTS.URL.DASHBOARD} component={DashBoard} />
            <Route path={CONSTANTS.URL.HOME} component={Login} loginStatus={this.loginStatus} history={this.props.history} />
          </Switch>
        </main>

        <footer>

        </footer>
      </div>
    )
  }
}

export default App
