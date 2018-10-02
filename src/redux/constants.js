// login
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_OUT = 'LOGIN_OUT';

// error
export const ERROR_CREATE = 'ERROR_CREATE';
export const ERROR_DESTROY = 'ERROR_DESTROY';

// UI
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const TOGGLE_SIDEBAR_SELL = 'TOGGLE_SIDEBAR_SELL';
export const TOGGLE_PROFILE_MENU = 'TOGGLE_PROFILE_MENU';
export const CLOSE_HEADER_MENU = 'CLOSE_HEADER_MENU';

// dash
export const DASH_GET_COUNTS_START = 'DASH_GET_COUNTS_START';
export const DASH_GET_COUNTS_SUCCESS = 'DASH_GET_COUNTS_SUCCESS';

// pagination
export const CHANGE_LISTING = 'CHANGE_LISTING';
export const CHANGE_FILTER = 'CHANGE_FILTER';

// dnd
export const ACTIVATE_DND_ON_FIELD = 'ACTIVATE_DND_ON_FIELD';
export const ADD_IMAGE = 'ADD_IMAGE';

// settings
const SETTINGS = {
  bigName: 'SETTINGS',
  GET_LIST_START: 'GET_LIST_START',
  GET_LIST_SUCCESS: 'GET_LIST_SUCCESS',
}


const constantsTemplate = [
 'CREATE_NEW_SUCCESS',
 'CREATE_NEW_FAIL',
 'GET_LIST_SUCCESS',
 'GET_LIST_START',
 'GET_SINGLE_SUCCESS',
 'STOP_EDIT_SUCCESS',
 'DELETE_SUCCESS',
 'PUT_CHANGES_SUCCESS',
 'PUT_CHANGES_FAIL',
 'SORT_BY_FIELD',
 'STOP_VIEW_ALL',
 'COUNT_GET_SUCCESS'
]

const PROPERTIES = { bigName: 'PROPERTIES', smallName: 'properties' };
const AGENTS = { bigName: 'AGENTS', smallName: 'agents'  };
const LANDLORDS = { bigName: 'LANDLORDS', smallName: 'landlords'  };
const USERS = { bigName: 'USERS', smallName: 'users'  };
const USER_EVENTS = { bigName: 'USER_EVENTS', smallName: 'userEvents'  };
const USER_FLAGS = { bigName: 'USER_FLAGS', smallName: 'userFlags'  };
const TAG_OPTIONS = { bigName: 'TAG_OPTIONS', smallName: 'tagOptions'  };
const PROPERTY_TAGS = { bigName: 'PROPERTY_TAGS', smallName: 'propertyTags'  };
const PROPERTY_RATING = { bigName: 'PROPERTY_RATING', smallName: 'propertyRating'  };
const FACET_OPTIONS = { bigName: 'FACET_OPTIONS', smallName: 'facetOptions'  };
const VIEWING_TIMES = { bigName: 'VIEWING_TIMES', smallName: 'viewingTimes'  };
const VIEWING_REQUESTS = { bigName: 'VIEWING_REQUESTS', smallName: 'viewingRequests'  };
const SLOTS_PARAMS = { bigName: 'SLOTS_PARAMS', smallName: 'slotsParams'  };
const OFFERS = { bigName: 'OFFERS', smallName: 'offers'  };
const LANDLORD_LISTING = { bigName: 'LANDLORD_LISTING', smallName: 'landlordListing'  };

const constantsArray = [ PROPERTIES, AGENTS, LANDLORDS, LANDLORD_LISTING, USERS, USER_EVENTS, USER_FLAGS,
  TAG_OPTIONS, PROPERTY_TAGS, PROPERTY_RATING, FACET_OPTIONS, VIEWING_TIMES, VIEWING_REQUESTS,
  SLOTS_PARAMS, OFFERS
];

const constantsWithEvents = [PROPERTIES];
const constants = fillConstantsForExport();

fillConstants(constantsArray);
fillConstantsWithEvents(constantsWithEvents);
fillConstantsForExport(constants);

export { constants };



function fillConstantsForExport() {
  const constants = {};

  constantsArray.forEach( constant => {
    constants[constant.bigName] = constant;
    constants[constant.smallName] = constant;
  })

  return constants;
}

function fillConstantsWithEvents(arr) {
  arr.forEach( obj => {
    obj[`CHANGE_EVENTS_LIST`] = `${obj.bigName}_CHANGE_EVENTS_LIST`;
  })
}

function fillConstants(arr) {
  arr.forEach( obj => {
    constantsTemplate.forEach( constant => {
      obj[constant] = `CRUDS_${obj.bigName}__${constant}`;
    })
  })
}
