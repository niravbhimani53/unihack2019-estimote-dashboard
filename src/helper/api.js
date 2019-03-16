// 52.42.152.246:4000
import CONSTANTS from './urlConstants'
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
}

const instance = new API();
export default instance;