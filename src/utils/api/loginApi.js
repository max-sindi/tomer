import axios from 'axios';

const env = process.env;
axios.defaults.baseURL = env.REACT_APP_DOMAIN;

class LoginApi {
  constructor() {
    this.path = env.REACT_APP_LOGIN_API;
  }

  sendLoginRequest = data => {
    return axios.post(this.path, data);
  }
}

export default new LoginApi();
