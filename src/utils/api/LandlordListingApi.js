import axios from 'axios';

const env = process.env;
axios.defaults.baseURL = env.REACT_APP_DOMAIN;

class LandlordListingApi {
  constructor() {
    this.path = env.REACT_APP_LANDLORD_LISTING_API;
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
}

export default new LandlordListingApi();
