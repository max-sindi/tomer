import axios from 'axios';

const env = process.env;
axios.defaults.baseURL = env.REACT_APP_DOMAIN;

class PropertiesApi {
  constructor() {
    this.path = env.REACT_APP_PROPERTIES_API;
  }

  getSingleProp = id => {
    return axios.get(`${this.path}/${id}`)
  }

  createNewProp = data => {
    return axios.post(this.path, data);
  }

  getProps = (params = '') => {
    return axios.get(`${this.path}${params}`);
  }

  putPropChanges = (id, data) => {
    return axios.put(`${this.path}/${id}`, data)
  }

  deleteProp = (id) => {
    return axios.delete(`${this.path}/${id}`);
  }

  getTimes = () => {
    return new Promise( (res, rej) => {
      res({
        working: [
          {
            startTime: 'Fri, 12 Jun 2018 08:00:00 GMT',
            endTime: 'Fri, 12 Jun 2018 16:00:00 GMT',
          },
        ],
        excluded: [
          {
            startTime: 'Fri, 12 Jun 2018 12:00:00 GMT',
            endTime: 'Fri, 12 Jun 2018 13:00:00 GMT',
          },
        ],
        holidays: [
          {
            startTime: 'Fri, 15 Jun 2018 21:01:00 GMT',
            endTime: 'Fri, 16 Jun 2018 21:00:00 GMT',
          },
        ],
      });
    })
  }
}

export default new PropertiesApi();
