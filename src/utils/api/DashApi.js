import axios from 'axios';

const env = process.env;
axios.defaults.baseURL = env.REACT_APP_DOMAIN;

class DashApi {
  constructor() {
    this.path = env.REACT_APP_COUNT_API;
  }

  getCounts = () => {
    return axios.get(`${this.path}`);
  }

  getCount = (field) => {
    return axios.get(`${this.path}/${field}`)
  }
}

export default new DashApi();
