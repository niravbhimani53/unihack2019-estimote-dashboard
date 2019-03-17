import React, { Component } from 'react'
import API from '../helper/api.js'
import LoadingComponent from '../components/loading'
import 'material-icons'
import moment from 'moment'

export default class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      floorLevel: 1,
      currentFloor: [],
      users: null,      // list of users
      globalActivity: null,   // api will give all users activity
      userActivity: null, // will get specific user activity
      currentUser: {},
      activeDeviceId: null,
      selected: null,
      roomDevices: null,
      timeOutside: 0,
    };
  }

  componentDidMount() {
    API.getAllUsers(this.stateHandler)
    API.getAllDevices(this.stateHandler)
  }

  stateHandler = (state) => {
    this.setState(state);
  }

  setUserActivity = (item) => {
    this.setState({
      currentUser: item
    }, () => {
      API.getSelectedUserActivity(this.stateHandler, item.userId, this.mapTimerData)
    })
  }
  
  calculateDistanceAway = () => {
    let homeRoom = 0
    let userActivity = this.state.userActivity.slice()
    let selectedKey = this.state.key
    let time = 0
    if (selectedKey === 0) {
      time = 0
    }
    else {
      while (userActivity[selectedKey].deviceId !== userActivity[homeRoom].deviceId) {
        time = time + (Date.parse(userActivity[selectedKey + 1].timestamp) - Date.parse(userActivity[selectedKey].timestamp))
        selectedKey = selectedKey + 1
        console.log(time)
      }
    }
    
    this.setState({
      timeOutside: time
    })
  }

  render() {
    if (!this.state.users) return <LoadingComponent />
    if (!this.state.roomDevices) return <LoadingComponent />
    return (
      <div className="DashBoard container">
        <h5 className="floor-level">
          Floor {this.state.floorLevel}
        </h5>

        <div className="main-content">

          <div className="row">
            <div className="user-list left-align col s5 m5 l5 sub-title">
              <p>
                Users Registered
              </p>
              {
                this.state.users.map((item, key) => {
                  return (
                    <div key={key}>
                      <button className="waves-effect waves-light btn" key={key} onClick={() => this.setUserActivity(item)} >
                        {item.userId}
                      </button>
                      <br />
                      <br />
                    </div>
                  )
                })
              }
            </div>

            <div className="col s1 m1 l1">
              &nbsp;
            </div>

            <div className="col s6 m6 l6 left-align sub-title">
              <p>
                User Details:
              </p>
              <p>
                User ID: {this.state.currentUser.userId}
              </p>
              <p>
                Name: {this.state.currentUser.firstName}
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col s6 m6 l6">
              <div className="map-floor container">
                <center>
                  <table className="responsive-table">
                    <tbody>
                      {
                        this.state.roomDevices.map((item, key) => {
                          return (
                            <tr key={key}>
                              <td>
                                {this.state.activeDeviceId === item.deviceId ? (<i className="material-icons active center">panorama_fish_eye</i>) : <i className="material-icons">panorama_fish_eye</i>}
                                <br />
                                {
                                  this.state.selected !== null && this.state.selected.deviceId === item.deviceId ? "Time away from : " + this.state.timeOutside + " millseconds" : null
                                }
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </center>
              </div>
            </div>

            <div className="col s6 m6 l6">
              <div className="table">
                <table>
                  <thead>
                    <tr>
                      <th>Room ID</th>
                      <th>Time Stamp</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      this.state.userActivity !== null ? (
                        this.state.userActivity.map((object, key) => {
                          return (
                            <tr key={key}>
                              <td>
                                <a href="#!" onClick={() => this.setState({ selected: object, activeDeviceId: object.deviceId, key: key }, () => this.calculateDistanceAway())}>{object.deviceId}</a>
                              </td>
                              <td>{object.timestamp}</td>
                            </tr>
                          )
                        })
                      ) : null
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}