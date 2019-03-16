import React, { Component } from 'react'
import API from '../helper/api.js'
import LoadingComponent from '../components/loading'

export default class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      floorLevel: 1,
      apiData: '',
      currentFloor: [],
      users: null,
      userActivity: {
        userId: 121325234,
        deviceId: 69879687,
        timeStamp: '16 March 2019, 10:00',
      },
      currentUser: {},
    };
  }

  componentDidMount() {
    API.getAllUsers(this.stateHandler)
  }

  stateHandler = (state) => {
    this.setState(state);
  }

  setUserActivity = (item) => {
    this.setState({
      currentUser: item
    })
  }

  createRadarBeacon = (color) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200">
        <circle r="60" cy="97" cx="497" fill={color === undefined ?'#E6E9EE' : color} />
      </svg>
    )
  }

  render() {
    if(!this.state.users) return <LoadingComponent />
    console.log(this.state.users)
    return (
      <div className="DashBoard container">
        <h5 className="floor-level">
          Floor {this.state.floorLevel}
        </h5>

        <div className="main-content">

          <div className="map-floor container">
            
            <center>
              <table>
                <tbody>
                  <tr>
                    <td>
                      {this.createRadarBeacon()}
                    </td>
                    <td>
                      {this.createRadarBeacon()}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      {this.createRadarBeacon()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </center>
            
          </div>

          <div className="row">
            <div className="user-list left-align col s5 m5 l5">
              {
                this.state.users.map((item, key) => {
                  return (
                    <button className="waves-effect waves-light btn" key={key} onClick={() => this.setUserActivity(item)} >
                      {item.userId}
                    </button>
                  )
                })
              }
            </div>

            <div className="col s7 m7 l7 left-align">
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
        </div>
      </div>
    )
  }
}