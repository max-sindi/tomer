import {
  // LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_OUT,
} from '../constants';

const initialState = {
  isLogged: checkIsLogged(),
  message: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: checkIsLogged(),
        message: initialState.message,
      }

    case LOGIN_OUT:
      return {
        ...state,
        isLogged: checkIsLogged(),
      }

    case LOGIN_FAIL:
      return {
        ...state,
        message: action.msg
      }

    default:
      return state;
  }
}

function checkIsLogged() {
  return !!localStorage.getItem('isLogged');
}
