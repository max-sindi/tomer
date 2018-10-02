import axios from 'axios';
import uuid from 'uuid/v4';

const env = process.env;
axios.defaults.baseURL = env.REACT_APP_DOMAIN;

class SlotsParamsApi {

  getProps = (params = '') => {
    return new Promise((res, rej) => {
      res({
        data: [
          {
            id: uuid(),
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false,
            created: new Date().toTimeString(),
          },
          {
            id: uuid(),
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false,
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

export default new SlotsParamsApi();
