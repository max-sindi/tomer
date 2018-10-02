import {
  CHANGE_LISTING,
  CHANGE_FILTER,
} from '../constants';

import { getProps } from './crudsActions';

import { detectArea } from '../../utils/assists';

export function changeListing(value) {
  return dispatch => {
    dispatch({type: CHANGE_LISTING, value});
    window.localStorage.setItem('listing', value);
  }
}

export function changeFilter(value) {
  return dispatch => {
    dispatch({type: CHANGE_FILTER, value});
  }
}

export function sortByField(sortField, propField) {
  return dispatch => {
    // dispatch({type: `${ detectArea(area) }_SORT_BY_FIELD`, fieldName: field});
    dispatch({type: `SORT_BY_FIELD`, sortField});
    dispatch( getProps({field: propField}) );
  }
}

export function stopSortingByField() {
  return dispatch => {
    dispatch({type: `SORT_BY_FIELD_STOP`});
  }
}

export function changePage(area, pageNumber) {
  return dispatch => {
    dispatch({type: `CHANGE_PAGE`, page: pageNumber});
  }
}

export function resetControls() {
  return dispatch => {
    dispatch({type: `RESET_PAGE`});
  }
}

export function changeControls(name, value, propField) {
  return dispatch => {
    dispatch({type: `CHANGE_CONTROLS`, name, value});

    if(propField) {
      dispatch( getProps({field: propField }) );
    }
  }
}

export function addControlsUnmount() {
  return dispatch => {
    dispatch({type: `ADD_CONTROLS_UNMOUNT`});
  }
}
