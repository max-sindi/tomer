import axios from 'axios';
import uuid from 'uuid/v4';

const env = process.env;
axios.defaults.baseURL = env.REACT_APP_DOMAIN;

class UserFlagsApi {

  getProps = (params = '') => {
    return new Promise((res, rej) => {
      res({
        data: [
          {
            id: uuid(),
            agreed: true,
            student: true,
            parking: true,
            room: false,
            days: 62,
            created: new Date().toTimeString(),
          },
          {
            id: uuid(),
            agreed: true,
            student: false,
            parking: false,
            room: true,
            days: 42,
            created: new Date().toTimeString(),
          },
        ]
      })
    });
  }

  putPropChanges = (data) => {
    console.warn('Emulation sending data to server, data:');
    console.warn(data);
    return new Promise( (res, rej) => {
      res({});
    })
  }
}

export default new UserFlagsApi();
