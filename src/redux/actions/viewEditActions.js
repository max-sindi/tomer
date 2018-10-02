import { detectArea } from '../../utils/assists';

export function stopViewAll(area) {
  return dispatch => {
    dispatch({type: `${ detectArea(area) }_STOP_VIEW_ALL`})
    // dispatch({type: `SORT_BY_FIELD_STOP`});
    // dispatch({type: `ADD_CONTROLS_UNMOUNT`});
    dispatch({type: `RESET_PAGE`})
  }
}
//
