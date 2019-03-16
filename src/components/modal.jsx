import React, { Component } from "react";
import M from "materialize-css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      firstName: null,
      lastName: null,
    };
  }

  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options)
  }

  handleUserIDClick = (userId) => {
    this.setState({
      userId: userId
    })
  }

  handleFirstNameClick = (firstName) => {
    this.setState({
      firstName: firstName
    })
  }

  handleLastNameClick = (lastName) => {
    this.setState({
      lastName: lastName
    })
  }

  render() {
    return (
      <div ref={Modal => { this.Modal = Modal; }} id="modal1" className="modal">
        <div className="modal-content black-text">
          <h4>Add User</h4>

          <form onSubmit={(e) => e.preventDefault()} className="col s12">
            <div className="row">
              <div className="input-field col s12 ">
                <input id="user_id" type="number" className="validate" onChange={(e) => this.handleUserIDClick(e.target.value)} />
                <label htmlFor="user_id">User ID</label>
              </div>
              <div className="input-field col s6 m6 l6">
                <input id="firstName" type="text" className="validate" onChange={(e) => this.handleFirstNameClick(e.target.value)} />
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="input-field col s6 m6 l6">
                <input id="lastName" type="text" className="validate" onChange={(e) => this.handleLastNameClick(e.target.value)} />
                <label htmlFor="lastName">Last Name</label>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button className="modal-close waves-effect waves-green btn" id="submit" onClick={() => this.handleSubmit()}>
            Submit
          </button>
          <button className="modal-close waves-effect waves-red btn-flat" id="cancel" >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
