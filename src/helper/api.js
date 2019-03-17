// 52.42.152.246:4000
import axios from 'axios'
export const BASE_URL = 'http://52.42.15.246:4000/api/v1'

class API {
  getAllUsers = (stateHandler) => {
    axios.get(BASE_URL + '/user')
      .then(response => {
        stateHandler({
          users: response.data.data
        })
      })
      .catch(error => console.log(error))
  }
  
  getUsersActivity = (stateHandler) => {
    axios.get(BASE_URL + '/useractivity')
      .then(response => {
        stateHandler({
          globalActivity: response.data.data
        })
      })
      .catch(error => console.log(error))
  }

  getSelectedUserActivity = (stateHandler, userId) => {
    axios.get(BASE_URL + '/useractivity/' + userId)
      .then(response => {
        stateHandler({
          userActivity: response.data.data,
          currentPositionData: { data: response.data.data[0], position: 0 },
          globalCounter: (Date.parse(response.data.data[response.data.data.length -1].timestamp) - Date.parse(response.data.data[0].timestamp)),
          activeDeviceId: response.data.data[0].deviceId
        })
      })
      .catch(error => console.log(error))
  }

  getAllDevices = (stateHandler, userId) => {
    axios.get(BASE_URL + '/devices')
      .then(response => {
        stateHandler({
          roomDevices: response.data.data
        })
      })
      .catch(error => console.log(error))
  }
}

const instance = new API();
export default instance;