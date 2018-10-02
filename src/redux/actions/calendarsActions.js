export function changeEvents(events, calendar) {
  return dispatch => {
    dispatch({type: `${calendar}_CHANGE_EVENTS_LIST`, events});
  }
}
