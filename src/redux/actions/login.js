import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_OUT,
} from '../constants';

import store from '../store';
import LoginApi from '../../utils/api/loginApi';

export function tryLogin() {
  return async dispatch => {
    dispatch({type: LOGIN_START});

    const values = store.getState().form.login.values;
    const data = { username: values.login, password: values.password };

    return LoginApi.sendLoginRequest(data)
      .then( resolve => {
        localStorage.setItem('isLogged', resolve.data.token);

        return dispatch({type: LOGIN_SUCCESS});
      })
      .catch( error => {
        const {response} = error;
        let msg = '';

        if(response === undefined) {
          msg = 'Something wrong with connection';
        } else if(response.status === 401) {
          msg = 'Wrong authorization';
        }

        return dispatch({type: LOGIN_FAIL, msg});
      })
  }
}

export function logOutRequest() {
  return dispatch => {
    localStorage.removeItem('isLogged');

    return dispatch({type: LOGIN_OUT});
  }
}
