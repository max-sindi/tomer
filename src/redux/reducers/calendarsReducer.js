const initialState = {
  properties: {
    shedules: {
      working: [
        {
          startTime: 'Fri, 12 Jun 2018 08:00:00 GMT',
          endTime: 'Fri, 12 Jun 2018 16:00:00 GMT',
        },
      ],
      excluded: [
        {
          startTime: 'Fri, 12 Jun 2018 12:00:00 GMT',
          endTime: 'Fri, 12 Jun 2018 13:00:00 GMT',
        },
      ],
      holidays: [
        {
          startTime: 'Fri, 15 Jun 2018 21:01:00 GMT',
          endTime: 'Fri, 16 Jun 2018 21:00:00 GMT',
        },
      ],
    }
  },
  workingStartValues: {
    day: '1',
    startTime: '9:00',
    endTime: '18:00',
  },
  excludedStartValues: {
    day: '1',
    startTime: '12:00',
    endTime: '13:00',
  },
  holidaysStartValues: {
    date: '',
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ('GET_TIMES'):
      const { field, data } = action;
      const { working, excluded, holidays } = data;

      return {
        ...state,
        [field]: {
          ...state[field],
          shedules: {
            ...data,
          }
        }
      }

    default:
      return state;
  }
}
