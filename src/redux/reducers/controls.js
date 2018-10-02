import {
  CHANGE_LISTING,
  CHANGE_FILTER,
} from '../constants';

function getListing() {
  const status = window.localStorage.getItem('listing');

  if(status === null) {
    return 10;
  } else {
    return +status;
  }

}

const initialState = {
  listing: getListing(),
  searchstring: '',
  currentPage: 1,
  prevPage: null,
  sortField: '',
  sort: 'asc',
  pagButtons: 7,
  count: 0,
  fromEnd: false,
  addControls: {
    year: {
      min: 2013,
      value: '',
      name: 'year',
    },
    month: {
      value: '',
      name: 'month',
      list: [
        {
          title: "(any)",
          value: '',
        },
      ],
    },
    flags: {
      value: '',
      name: 'flags',
      list: [
        {
          title: 'All(everything)',
          value: '',
        },
        {
          title: 'Any of 4 flags',
          value: 'any',
        },
        {
          title: 'Let agreed',
          value: 'agreed',
        },
        {
          title: 'Student',
          value: 'student',
        },
        {
          title: 'Parking',
          value: 'parking',
        },
        {
          title: 'Room to rent',
          value: 'rent',
        },
      ]
    },
    old: {
      name: 'old',
      value: '',
      list: [
        {
          title: 'All(everything)',
          value: '',
        },
        {
          title: '30+ days old',
          value: '30',
        },
        {
          title: '45+ days old',
          value: '45',
        },
        {
          title: '60+ days old',
          value: '60',
        },
      ]
    }
  },
  reqs: [],
  isGetLastRequest: false,
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

(function () {
  months.forEach( (month, index) => {
    initialState.addControls.month.list.push({
      title: month,
      value: index,
    })
  })
}())

export default (state = initialState, action) => {
  switch (action.type) {

    case 'GET_LAST_REQUEST': {
      const newState = {
        ...state,
        isGetLastRequest: true,
        currentPage: state.prevPage || initialState.currentPage,
      }
      // debugger

      return newState;
    }

    case 'STOP_GET_LAST_REQUEST': {
      return {
        ...state,
        isGetLastRequest: false,
      }
    }

    case 'SEND_REQUEST': {
      const newReqs = state.reqs.concat();
      newReqs.push(action.newParams);

      return {
        ...state,
        reqs: newReqs,
        // isGetLastRequest: false,
      }
    }

    case 'COUNT_GET_SUCCESS': {
      const { count } = action;
      return {
        ...state,
        count: count,
        pages: Math.ceil( count / state.listing ),
      }
    }

    case CHANGE_LISTING:
      return {
        ...state,
        listing: action.value,
        ids: initialState.ids,
        currentPage: initialState.currentPage,
        pages: Math.ceil( state.count / action.value ),
      }

    case CHANGE_FILTER:
      return {
        ...state,
        searchstring: action.value
      }

    case 'CHANGE_PAGE': {
      const { currentPage, pagButtons, fromEnd } = state;
      const newPage = action.page;
      let fromEndNew;

      if( !fromEnd && ((newPage - currentPage) > pagButtons) ) {
        fromEndNew = true;
      } else if(newPage === 1) {
        fromEndNew = false;
      } else {
        fromEndNew = fromEnd;
      }

      return {
        ...state,
        prevPage: currentPage,
        currentPage: newPage,
        fromEnd: fromEndNew,
      }
    }

    case 'RESET_PAGE': {

      const { searchstring, sortField, sort, currentPage } = initialState;

      // const currentPage = state.isGetLastRequest ?

      return {
        ...state,
        // isGetLastRequest: state.isGetLastRequest,
        // reqs: state.reqs,
        searchstring,
        sortField,
        sort,
        currentPage,
        prevPage: state.currentPage,
      }
        // listing: state.listing,
        // currentPage: 1,
      // }
    }

    case 'SORT_BY_FIELD': {
      const newSort = state.sort === 'asc' ? 'desc' : 'asc';

      return {
        ...state,
        sortField: action.sortField,
        sort: newSort,
      }
    }

    case 'SORT_BY_FIELD_STOP': {
      return {
        ...state,
        sortField: '',
        sort: 'asc',
        searchstring: initialState.searchstring,
      }
    }

    case `CHANGE_CONTROLS`: {
      return {
        ...state,
        addControls: {
          ...state.addControls,
          [action.name]: {
            ...state.addControls[action.name],
            value: action.value,
          }
        }
      }
    }

    case `ADD_CONTROLS_UNMOUNT`: {
      return {
        ...state,
        addControls: initialState.addControls,
      }
    }

    default:
      return state;
  }
}
