import {
  ERROR_CREATE,
  ERROR_DESTROY,
} from '../constants';

const initialState = {
  message: '',
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ERROR_CREATE: {
      let error = '';
      let stackError;
      let uuidError;

      try {
        stackError = action.error.response.data.stack;
      } catch(e) {
        console.warn(e);
      }

      if(stackError) {
        const isUuidError = detectError(stackError, 'invalid input syntax for type uuid');

        if(isUuidError) {
          error = 'Not valid ID field';
        }
      } else {
        switch(action.field) {
          case 'users': {
            error = detectUserError(action.error);
          }
        }
      }

      return {
        ...state,
        message: error,
      }
    }

    case ERROR_DESTROY: {
      if(state.message !== '') {
        return {
          ...state,
          message: '',
        }
      } else {
         return state;
       }
    }

    default: {
      return state;
    }
  }
}

function detectUserError(error) {
  const incomingMsg = error.response.data.stack.split('\n')[0];
  let errorToRedux = '';

  if( detectError(incomingMsg, 'E11000') ) {
    errorToRedux = 'User with such name is already exist';
  }

  return errorToRedux;

}

function detectError(msg, search) {
  const matching = msg.indexOf(search);

  if(matching > -1) {
    return true;
  } else {
    return false;
  }

}
