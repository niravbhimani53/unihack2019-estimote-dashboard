import React, { Component } from 'react'
import Modal from './modal'
import M from 'materialize-css'

export default class Header extends Component {
  componentDidMount() {
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
  }

  render() {
    return (
      <div className="Header">
        <nav>
          <div className="navbar-fixed">
            <nav>
              <div className="nav-wrapper">
                <a href="#!" className="brand-logo center">Dashboard</a>
              </div>
            </nav>
          </div>
        </nav>
        <Modal />
      </div>
    )
  }
}