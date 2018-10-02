export function crudsReducer(params) {
  const {
    state,
    action,
    initialState,
    constants,
    propToTable,
    propToForm,
  } = params;

  switch(action.type) {
    case constants.GET_LIST_START: {
      return {
        ...state,
        allProps: null,
      }
    }

    case constants.GET_LIST_SUCCESS: {
      const res = action.data.map( item => {
        const row = propToTable(item);

        return row;
      })

      return {
        ...state,
        allProps: res,
      }
    }

    case constants.GET_SINGLE_SUCCESS: {
      const res = propToForm(action.prop);

      return {
        ...state,
        currentProp: action.prop,
        initialValues: res,
      }
    }

    case constants.STOP_EDIT_SUCCESS: {
      const { currentProp, initialValues } = initialState;

      return {
        ...state,
        currentProp,
        initialValues,
      }
    }

    case constants.COUNT_GET_SUCCESS: {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          count: action.count,
        }
      }
    }

    case constants.STOP_VIEW_ALL: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}
