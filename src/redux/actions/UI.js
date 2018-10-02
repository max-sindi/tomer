import {
  TOGGLE_SIDEBAR,
  TOGGLE_SIDEBAR_SELL,
  TOGGLE_PROFILE_MENU,
  CLOSE_HEADER_MENU,
  DASH_GET_COUNTS_START,
  DASH_GET_COUNTS_SUCCESS,
  ERROR_DESTROY,
} from '../constants';

import DashApi from '../../utils/api/DashApi';

export function getCounts() {
  return dispatch => {
    dispatch({type: DASH_GET_COUNTS_START});

    return DashApi.getCounts()
      .then( resolve => {
        return dispatch({type: DASH_GET_COUNTS_SUCCESS, data: resolve.data});
      })
  }
}

export function toggleSidebar() {
  return dispatch => {
    dispatch({type: TOGGLE_SIDEBAR});

    toggleStorageStatus();

    function toggleStorageStatus() {
      // debugger
      const storageItem = 'isSidebarVisible';
      const locStorage = window.localStorage;
      const isVisible = locStorage.getItem(storageItem);

      if(isVisible === 'true') {
        locStorage.setItem(storageItem, 'false');
      } else {
        locStorage.setItem(storageItem, 'true');
      }
    }

  }
}

export function toggleSidebarCell(item) {
  return dispatch => {
    dispatch({type: TOGGLE_SIDEBAR_SELL, item})
  }
}

export function toggleProfileMenu() {
  return dispatch => {
    dispatch({type: TOGGLE_PROFILE_MENU});
  }
}

export function closeHeaderMenu() {
  return dispatch => {
    dispatch({type: CLOSE_HEADER_MENU});
  }
}

export function removeError() {
  return dispatch => {
    dispatch({type: ERROR_DESTROY});
  }
}
