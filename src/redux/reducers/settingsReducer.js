import {

} from '../constants';

const initialState = {
  props: null,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case 'SETTINGS_GET_SUCCESS': {
      
      return {
        ...state,
        props: action.props
      }
    }

    default:
      return state;
  }
}
