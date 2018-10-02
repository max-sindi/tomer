import { combineReducers } from 'redux';

import login from './login';
import ui from './UI';
import controls from './controls';
import dnd from './dndReducer';
import calendars from './calendarsReducer';
import error from './errorReducer';
import settings from './settingsReducer';

import crudsReducer from './crudsReducers';

import { reducer as formReducer } from 'redux-form';

const reducers = {

  ...crudsReducer,
  login,
  ui,
  controls,
  dnd,
  error,
  calendars,
  settings,
  // userFlags,
  // slotsParams,
  form: formReducer,
}

export default combineReducers(
  reducers
)
