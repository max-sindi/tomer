import UsersApi from '../../utils/api/UsersApi';
import AgentsApi from '../../utils/api/AgentsApi';
import UserTagsApi from '../../utils/api/UserTagsApi';
import UserFlagsApi from '../../utils/api/UserFlagsApi';
import LandlordsApi from '../../utils/api/LandlordsApi';
import LandlordListingApi  from '../../utils/api/LandlordListingApi';
import PropertiesApi from '../../utils/api/PropertiesApi';
import TagOptionsApi from '../../utils/api/TagOptionsApi';
import PropertyTagsApi from '../../utils/api/PropertyTagsApi';
import ViewingTimesApi from '../../utils/api/ViewingTimesApi';
import FacetOptionsApi from '../../utils/api/FacetOptionsApi';
import PropertyRatingApi from '../../utils/api/PropertyRatingApi';
import ViewingRequestsApi from '../../utils/api/ViewingRequestsApi';
import OffersApi from '../../utils/api/OffersApi';
import DashApi from '../../utils/api/DashApi';

import SettingsApi from '../../utils/api/SettingsApi';
import SlotsParamsApi from '../../utils/api/SlotsParamsApi';

import { constants, ERROR_CREATE, ERROR_DESTROY } from '../constants';
import { resetControls } from './controls';
import converters from '../../utils/converters';
import store from '../store';

const apis = {
  users: UsersApi,
  agents: AgentsApi,
  userEvents: UserTagsApi,
  userFlags: UserFlagsApi,
  landlords: LandlordsApi,
  landlordListing: LandlordListingApi,
  properties: PropertiesApi,
  tagOptions: TagOptionsApi,
  slotsParams: SlotsParamsApi,
  propertyTags: PropertyTagsApi,
  viewingTimes: ViewingTimesApi,
  facetOptions: FacetOptionsApi,
  propertyRating: PropertyRatingApi,
  viewingRequests: ViewingRequestsApi,
  dashApi: DashApi,
  settings: SettingsApi,
  offers: OffersApi,
}

const getState = store.getState;

 export function createNewProp(field) {
  return async dispatch => {
    const values = getState().form[field].values || {};

    let data;

    if(field === 'properties' ) {
      await converters[field](values, getState() )
        .then( res => {
          data = res;
        })
    } else {
      data = converters[field](values, getState() )
    }

    return apis[field].createNewProp(data)
      .then( resolve => {
        return dispatch({type: constants[field].CREATE_NEW_SUCCESS});
      })
      .catch( error => {
        dispatch({type: ERROR_CREATE, field, error})

        return dispatch({type: constants[field].CREATE_NEW_FAIL, error});
      })
  }
}

export function getProps(paramsObj) {
  return dispatch => {
    const { controls } = getState();

    const {
      reqs,
      isGetLastRequest,
    } = controls;

    const {
      field,
      reqParams,
      addedPath,
      // if this param exist, we get preveous reqParams from store in state.controls.reqs
      isPreveousRequest,
      // if this params exist, we get preveous reqParams from store in state.controls.reqs
      // and add to it new params from paramsObj. This may be desired when we want add some
      // filter field
      completePrevPath,
    } = paramsObj;
// debugger
    let newParams;
    let paramString = '';

    if( completePrevPath ) {
      newParams = completeParamsObj(paramsObj);
    } else if( isPreveousRequest ) {
      newParams = clonePrevRequst();
    } else if(isGetLastRequest) {
      newParams = reqs[ reqs.length - 1];
      dispatch({type: 'STOP_GET_LAST_REQUEST'})
    } else {
      newParams = Object.assign({}, paramsObj);

      if( !newParams.reqParams ) {
        newParams.reqParams = {};
      }

      const newReqParams = newParams.reqParams;

      fillControlsReqs();

      function fillControlsReqs() {
        const {
          sortField,
          listing,
          pagButtons,
          searchstring,
          currentPage,
          sort,
          addControls,
        } = controls;

        newReqParams.limit = listing;

        if(searchstring) {
          console.warn(searchstring);
          newParams.addedPath = 'textSearch';
          newReqParams.searchString = searchstring;
          return;
        }

        if( !newReqParams.skip ) {
          newReqParams.skip = (currentPage - 1) * listing;
        }

        if( !newReqParams.sortBy ) {
          newReqParams.sortBy = sortField;
        }

        newReqParams.sort = sort;
        fillAddedControls();

        function fillAddedControls() {
          const filterFields = [];
          const filterValues = [];

          for(let key in addControls) {
            const controlItem = addControls[key];

            if( !controlItem.value ) {
              continue;
            }

            filterFields.push(controlItem.name);
            filterValues.push(controlItem.value);
          }

          if( !newReqParams.filterBy ) {
            newReqParams.filterBy = filterFields;
          } else if( Array.isArray(newReqParams.filterBy) ) {
            newReqParams.filterBy = newReqParams.filterBy.concat(filterFields);
          }

          if( !newReqParams.filter ) {
            newReqParams.filter = filterValues;
          } else if( Array.isArray(newReqParams.filter) ) {
            newReqParams.filter = newReqParams.filter.concat(filterValues);
          }
        }

      }

    }

    paramString = createReqString(newParams.reqParams);

    if(newParams.addedPath) {
      paramString = `/${newParams.addedPath}${paramString}`;
    }


    dispatch({type: constants[field].GET_LIST_START});
    dispatch({type: 'SEND_REQUEST', newParams});

    return apis[field].getProps(paramString)
      .then( resolve => {
        let { data } = resolve;
        const { listing } = controls;

        // debugger
        if( !Array.isArray(data) ) {
          data = data.items;
        }
        // dispatch({type: 'GET_LIST_SUCCESS', data});

        return dispatch({
          type: constants[field].GET_LIST_SUCCESS,
          data,
          // isReverse: newParams.isReverse
        });
      })


    function createReqString(paramObj) {
      let reqString = '';
      for(let key in paramObj) {
        const value = paramObj[key];

        if( value ) {
          addParamToString(value, key)
        }
      }

      return reqString;

      function addParamToString(value, param) {
        const type = typeof value;

        if( !Array.isArray(value) ) {
          createParamsCouple(param, value);
        } else if( value.length > 0 ){
          const valuesList = value.join(',');
          createParamsCouple(param, valuesList);
        }

        function createParamsCouple(param, value) {
          let coupleString;

          if(reqString.length === 0) {
            coupleString = `?${param}=${value}`
          } else {
            coupleString = `&${param}=${value}`
          }

          reqString = reqString.concat(coupleString);
        }
      }
    }

    function clonePrevRequst() {
      const lastReq = reqs[reqs.length - 1];

      return lastReq;
    }

    function completeParamsObj(addParamsObj) {
      const lastReq = reqs[reqs.length - 1];
      const addReqParams = addParamsObj.reqParams;

      if(!lastReq) {
        return;
      }

      const newReqClone = Object.assign({}, lastReq);
      const newReqParams = newReqClone.reqParams;

      for(let key in addReqParams) {
        const value = addReqParams[key];
        const valueType = typeof value;

        if( valueType === 'string' ) {
          newReqParams[key] = addReqParams[key];
        } else if( Array.isArray(value) ) {
          const paramField = newReqParams[key];

          if( !newReqParams[key] ) {
            newReqParams[key] = [];
          }

          newReqParams[key].push(addReqParams[key]);
        }
      }

      return newReqClone;
    }
  }
}

export function deleteProp(id, field) {
  return dispatch => {
    return apis[field].deleteProp(id)
      .then( resolve => {
        return dispatch({type: constants[field].DELETE_SUCCESS});
      })
  }
}

export function getSingleProp(id, field) {
  return dispatch => {
    return apis[field].getSingleProp(id)
      .then( resolve => {
        return dispatch({type: constants[field].GET_SINGLE_SUCCESS, prop: resolve.data});
      })
  }
}

export function stopEditingProp(field) {
  return dispatch => {
    dispatch({type: constants[field].STOP_EDIT_SUCCESS});
  }
}

export function putPropChanges(field) {
  return async dispatch => {
    const values = getState().form[field].values || {};
    const currentEditedProp = getState()[field].currentProp;

    if(field === 'slotsParams' || field === 'userFlags' ) return;

    const id = currentEditedProp.id || currentEditedProp.old_id || currentEditedProp._id;

    // const data = converters[field](values, getState(), currentEditedProp);
    let data;

    if(field === 'properties' ) {
      await converters[field](values, getState() )
      .then( res => {
        data = res;
      })
    } else {
      data = converters[field](values, getState() )
    }

    return apis[field].putPropChanges(id, data)
      .then( resolve => {
        return dispatch({type: constants[field].PUT_CHANGES_SUCCESS, prop: resolve.data});
      })
      .catch( error => {
        return dispatch({type: constants[field].PUT_CHANGES_FAIL, error})
      })
  }
}

export function getCount(fieldCount, fieldReducer) {
  return dispatch => {
    return apis.dashApi.getCount(fieldCount)
      .then( resolve => {
        dispatch({type: 'COUNT_GET_SUCCESS', count: resolve.data});
        return dispatch({type: constants[fieldReducer].COUNT_GET_SUCCESS, count: resolve.data})
      })
  }

}

export function getSettings() {
  return dispatch => {
    return SettingsApi.getProps()
      .then( resolve => {
        return dispatch({type: 'SETTINGS_GET_SUCCESS', props: resolve.data})
      })
  }
}

export function getLastRequest() {
  return dispatch => {
    dispatch({type: 'GET_LAST_REQUEST'})
  }
}

export function stopViewAll(field) {
  return dispatch => {
    dispatch({type: constants[field].STOP_VIEW_ALL})
    // dispatch( resetControls() );
  }
}
