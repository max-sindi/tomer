import {
  ACTIVATE_DND_ON_FIELD,
  ADD_IMAGE
} from '../constants';

import {sendFile} from '../../utils/api/AWSApi';

import { change } from 'redux-form'

export function activateDndOnField(name) {
  return dispatch => {
    dispatch({type: ACTIVATE_DND_ON_FIELD, name})
  }
}

export function sendImage(image, form) {
  return dispatch => {
    dispatch(change(form.form, form.field, form.value))
    dispatch({type: ADD_IMAGE, url: form.url});
  }
}

export function pushFile(file, field) {
  return dispatch => {
    dispatch({type: 'PUSH_FILE', field, file })
  }
}

export function deleteFile(field, index) {
  return dispatch => {
    dispatch({type: 'DELETE_FILE', field, index })
  }
}

export function clearFiles(field) {
  return dispatch => {
    dispatch({type: 'CLEAR_FILES', field, })
  }
}

// export function sendFileAction(file) {
//   return dispatch => {
//     dispatch({type: 'SENDING_FILE_START'});
//     sendFile(file)
//   }
// }
