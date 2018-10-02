import { constants } from '../constants';
import { crudsReducer } from './crudReducersUtils';
import convertersDataToRedux from '../../utils/convertersDataToRedux';
import { entitiesList, initialStates, crudsInitialStateBasic } from '../crudsConfig';

const reducers = {};

entitiesList.forEach(item => {
  let entity = item;

  const initialState = {
    ...crudsInitialStateBasic,
    ...initialStates[entity],
  }

  // generating reducer for every entity
  reducers[entity] = function(state = initialState, action) {
    const { type } = action;

    // detect is action cares about crud
    if(type.indexOf('CRUDS_') === 0 ) {
      const reducerEntity = entity;
      const actionClear = type.slice(6);
      // detect which entity action cares of
      const entityName = actionClear.split('__')[0];
      const entityConstants = constants[entityName];

      // call only that reducer, which matching the action
      if(entityConstants && entityConstants.smallName === reducerEntity ) {
        const newState = crudsReducer({
          state,
          action,
          initialState: initialState,
          constants: entityConstants,
          propToTable: convertersDataToRedux[entity].table,
          propToForm: convertersDataToRedux[entity].form,
        });

        return newState;
      } else {
        return state;
      }
    } else {
      return state;
    }
  }
})

export default reducers;
