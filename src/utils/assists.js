export function fillTimesToServer(heap, schSource) {
  heap.schedule = [];

  ['working', 'excluded'].forEach( value => {

    const src = schSource[value];

    if(src) {
      convertTimes(schSource[value]);
    }

    function convertTimes(src) {
      src.forEach( timeObj => {
        const time = timeObj[0];
        const startTime = time.startTime.split(':');
        const endTime = time.endTime.split(':');

        const newTime = {
          entryType: value,
          day: time.day,
          startTime: {
            hours: startTime[0],
            mins: startTime[1],
          },
          endTime: {
            hours: endTime[0],
            mins: endTime[1],
          }

        };
        heap.schedule.push(newTime);

      });

    }
  })

}

export function fillTimesToRedux(heap, sch) {
  sch.forEach( timeSch => {
    const time = timeSch[0];
    const { startTime, endTime, day, entryType } = time;

    const newTimeObj = {
      startTime: [startTime.hours, startTime.mins].join(':'),
      endTime: [endTime.hours, endTime.mins].join(':'),
      day,
    }

    if( !heap[entryType] ) {
      heap[entryType] = [];
    }

    heap[entryType].push([newTimeObj]);
  })
}

export function filterByField(arr, field, isIncrease) {
  const newArr = arr.slice(0);

  return newArr.sort((a, b) => {
    const first = a[field];
    const second = b[field];

    if(first === undefined) {
      console.warn('It seem that you passed incorrect field name');
    }

    if(isIncrease) {
      return boolToNumber(first < second);
    } else {
      return boolToNumber(first > second);
    }

    function boolToNumber(bool) {
      if (bool === false) {
        return -1;
      } else if(bool === true) {
        return 1;
      }
    }
  })
}

export function detectArea(value) {
  switch(value) {
    case 'users':
      return 'USERS';

    case 'propertyRating':
      return 'PROPERTY_RATING';

    case 'userTags':
      return 'USER_TAGS';

    case 'propertyTags':
      return 'PROPERTY_TAGS';

    case 'tagOptions':
      return 'TAG_OPTIONS';

    case 'facetOptions':
      return 'FACET_OPTIONS';

    case 'viewingTimes':
      return 'VIEWING_TIMES';

    case 'viewingRequests':
      return 'VIEWING_REQUESTS';

    case 'agents':
      return 'AGENTS';

    case 'landlords':
      return 'LANDLORDS';

    case 'properties':
      return 'PROPERTIES';

    case 'userFlags':
      return 'USER_FLAGS';

    case 'slotsParams':
      return 'SLOTS_PARAMS';

    default:
      console.warn(`Hasn't matches`);
    }
}

export function fillNestedFieldsToRedux(fields, propFields, listing, objectInArray) {
  const properties = listing[fields];
  const res = [];

  if(!properties) {
    return res;
  }

  properties.forEach( propObj => {
    const obj = {};

    propFields.forEach( field => {
      if(objectInArray) {
        obj[field] = propObj[0][field];
      } else {
        obj[field] = propObj[field];
      }
    });

    res.push(obj);
  })

  return res;
}

export function fillNestedFieldsToReduxNew(fields, propFields, listing, objectInArray) {
  const properties = listing[fields];
  const res = [];

  if(!properties) {
    return res;
  }

  properties.forEach( propObj => {
    const obj = {};

    propFields.forEach( field => {
      if(objectInArray) {
        obj[field.name] = propObj[0][field];
      } else {
        obj[field.name] = propObj[field.name];
      }
    });

    res.push(obj);
  })

  return res;
}

export function fillNestedFieldsToServer(field, fields, values) {
  // array of values from form or smth else
  const properties = values[field];
  const res = [];

  if(!properties) {
    console.warn(fields + ': such fields are not exist');
    return res;
  }

  properties.forEach( fieldsObject => {
    const obj = {};
    // check if there is sense push it object, because if it will be void, it hasn't sense
    let objHasAnyValue = false;

    fields.forEach(field => {
      const value = fieldsObject[field];

      if( !value ) {
        return;
      }

      if( value.trim() ) {
        obj[field] = fieldsObject[field];
        objHasAnyValue = true;
      }
    })

    if(objHasAnyValue) {
      res.push(obj);
    }

  })
  return res;
}

export function fillNestedFieldsToServerNew(field, fields, values) {
  const properties = values[field];
  const res = [];

  if(!properties) {
    console.warn(fields + ': such fields are not exist');
    return res;
  }

  properties.forEach( fieldsObject => {
    const obj = {};
    // check if there is sense push it object, because if it will be void, it hasn't sense
    let objHasAnyValue = false;

    fields.forEach(field => {
      const value = fieldsObject[field.name] || '';
      const type = field.type;

      if(type === 'text') {
        if( value.trim() ) {
          obj[field.name] = fieldsObject[field.name];
          objHasAnyValue = true;
        }
      } else if(type === 'checkbox') {
          obj[field.name] = fieldsObject[field.name];
      }
    })

    if(objHasAnyValue) {
      res.push(obj);
    }

  })

  return res;
}

// @param {array} couplesArray - array of object, each consisting:
  //inForm - where search the value and toServer - where to push value if it exist,
// @param {object} values - where values will be searching
// @param {object} resObj - where values will push, and it will send to server
// @param {object} way
export function addPositionsIfExist(couplesArray, values, resObj, way) {
  couplesArray.forEach( fields => {
    let fromField, toField;

    if(fields.both) {
      fromField = toField = fields.both;
    } else {
      fromField = fields[way.from];
      toField = fields[way.to];
    }

    let complicatedPath;
    let value;
    let complicLenth;

    complicatedPath = fromField.split('.');
      // if name is like 'name.subname', find this deep value
      if(complicatedPath.length > 1) {
        complicLenth = complicatedPath.length;

        value = values;

        for(let i = 0; i < complicLenth; i++) {

          if( !value[complicatedPath[i]] ) {
            value = null;
            break;
          }

          value = value[complicatedPath[i]];
        }
      } else {
        value = values[fromField];
      }

    if( checkValue(value) ) {

      if( fields.isDate ) {
        value = converDate(value);
      }

      resObj[toField] = value;
    }

    function converDate(date) {
      return new Date(date).toISOString().split('T')[0];
    }

    function checkValue(val) {
      const type = typeof val;

      if(type === 'boolean') {
        return true;
      }

      if(type === 'string') {
        return !!val.trim();
      }

      if(type === 'number') {
        return true;
      }

      return val;
    }
  })
}

export function filteringSorting(arr, filterSearch, sortParams) {
  let res = arr;

  // if filtered query, filter data
  if( filterSearch.trim() ) {
    res = res.filter( item => {
      for(let key in item) {
        // if any matching, immediately return true
        if( ('' + item[key]).indexOf(filterSearch) > -1 ) {
          return true;
        }
      }

      return false;
    })
  }

  if(sortParams.filtered) {
    const { field, incrementing } = sortParams;
    res = filterByField(res, field, incrementing);
  }

  return res;
}

export function filtering(arr, sortParams, newField) {
  const { incrementing, filtered, field } = sortParams;
  let newIncrementing;

  if(filtered && newField === field ) {
    newIncrementing = !incrementing;
  } else {
    newIncrementing = true;
  }

  let newArr = arr;

  newArr = filterByField(newArr, newField, newIncrementing);

  return {
    props: newArr,
    incr: newIncrementing
  }
}

export function convertDate(date) {
  return new Date(date).toISOString().split('T')[0];
}
