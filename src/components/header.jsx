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
                <ul className="right">
                  <li className="modal-trigger" data-target="modal1">
                    <i className="material-icons" id="add">
                      add
                    </i>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </nav>
        <Modal />
      </div>
    )
  }
}