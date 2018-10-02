import {
  TOGGLE_SIDEBAR,
  TOGGLE_SIDEBAR_SELL,
  TOGGLE_PROFILE_MENU,
  CLOSE_HEADER_MENU,
  DASH_GET_COUNTS_START,
  DASH_GET_COUNTS_SUCCESS,
} from '../constants';

function getSidebarVisibility() {
  const status = window.localStorage.getItem('isSidebarVisible');

  if(status === null || status === 'true') {
    return true;
  }

  return false;
}

const initialState = {
  sidebar: {
    isVisible: getSidebarVisibility(),
    visibleCell: '',
  },
  header: {
    isMenuVisible: false,
  },
  dashes: {
    property: {
      id: 'properties',
      title: 'properties',
      countName: 'properties',
      dash: {
        additional: 'London, e14',
        path: 'properties',
        // count: 2,
      },
      side: {
        dropLinks: [
          {
            title: 'New',
            path: 'new',
          },
          {
            title: 'View All',
            path: '',
          },
          {
            title: 'Live: by year/month',
            path: 'liveByDate',
          },
          {
            title: 'Live: has 1 or 0 images',
            path: 'liveImages',
          },
          // {
          //   title: 'Not live: by year/month',
          //   path: 'notLiveDate',
          // },
          {
            title: 'Not live: has 1 or 0 images',
            path: 'notLiveImages',
          },
          // {
          //   title: 'Not live: added in last 3 days',
          //   path: 'notLiveLast3Days',
          // },
          {
            title: 'Live check error: by year/month',
            path: 'errorDate',
          },
        ],
        icon: 'plus',
      }
    },
    agent: {
      id: 'agents',
      title: 'agents',
      countName: 'agents',
      dash: {
        path: 'agents',
        // count: 9,
      },
      side: {
        dropLinks: [
          {
            title: 'New',
            path: 'new',
          },
          {
            title: 'View All',
            path: '',
          },
        ],
        icon: 'plus',
      }
    },
    landlord: {
      id: 'landlords',
      title: 'landlords',
      countName: 'land_lords',
      dash: {
        path: 'landlords',
        // count: 9,
      },
      side: {
        dropLinks: [
          {
            title: 'New',
            path: 'new',
          },
          {
            title: 'View All',
            path: '',
          },
        ],
        icon: 'plus',
      },
    },
    // landlordListing: {
    //   id: 'landlordListing',
    //   title: 'landlordListing',
    //   dash: {
    //     path: 'landlordListing',
    //   },
    //   side: {
    //     dropLinks: [
    //       {
    //         title: 'New',
    //         path: 'new',
    //       },
    //       {
    //         title: 'View All',
    //         path: '',
    //       },
    //     ],
    //     icon: 'plus',
    //   },
    // },
    viewingRequest: {
      id: 'viewingRequests',
      title: 'viewingRequests',
      countName: 'viewing_requests',
      dash: {
        path: 'viewingRequests',
        // count: 1,
      },
      side: {
        dropLinks: [
          {
            title: 'New',
            path: 'new',
          },
          {
            title: 'View All',
            path: '',
          },
        ],
        icon: 'plus',
      }
    },
    // offers: {
    //   id: 'offers',
    //   title: 'Offers',
    //   dash: {
    //     path: 'offers'
    //   },
    //   side: {
    //     dropLinks: [
    //       {
    //         title: 'New',
    //         path: 'new',
    //       },
    //       {
    //         title: 'View All',
    //         path: '',
    //       },
    //     ],
    //     icon: 'plus',
    //   },
    // },
    // viewingTime: {
    //   id: 'viewingTimes',
    //   title: 'viewingTimes',
    //   dash: {
    //     path: 'viewingTimes',
    //     // count: 161,
    //   },
    //   side: {
    //     dropLinks: [
    //       {
    //         title: 'New',
    //         path: 'new',
    //       },
    //       {
    //         title: 'View All',
    //         path: '',
    //       },
    //     ],
    //     icon: 'plus',
    //   }
    // },
    facetOption: {
      id: 'facetOptions',
      title: 'facetOptions',
      countName: 'facet_options',
      dash: {
        path: 'facetOptions',
        // count: 1,
      },
      side: {
        dropLinks: [
          {
            title: 'New',
            path: 'new',
          },
          {
            title: 'View All',
            path: '',
          },
          // {
          //   title: 'Import',
          //   path: 'import',
          // },
        ],
        icon: 'plus',
      }
    },
    tagOption: {
      id: 'tagOptions',
      title: 'tagOptions',
      countName: 'tag_options',
      dash: {
        path: 'tagOptions',
        // count: 1,
      },
      side: {
        dropLinks: [
          {
            title: 'New',
            path: 'new',
          },
          {
            title: 'View All',
            path: '',
          },
          // {
          //   title: 'Import',
          //   path: 'import',
          // },
        ],
        icon: 'plus',
      }
    },
    propertyTag: {
      id: 'propertyTags',
      title: 'propertyTags',
      countName: 'property_tags',
      dash: {
        path: 'propertyTags',
        // count: 1,
      },
      side: {
        dropLinks: [
          {
            title: 'New',
            path: 'new',
          },
          {
            title: 'View All',
            path: '',
          },
        ],
        icon: 'plus',
      }
    },
    userTag: {
      id: 'userEvents',
      title: 'userEvents',
      countName: 'user_tags',
      dash: {
        path: 'userEvents',
        // count: 1,
      },
      side: {
        dropLinks: [
          {
            title: 'New',
            path: 'new',
          },
          {
            title: 'View All',
            path: '',
          },
        ],
        icon: 'plus',
      }
    },
    propertyRating: {
      id: 'propertyRating',
      title: 'propertyRating',
      countName: 'property_ratings',
      dash: {
        path: 'propertyRating',
        // count: 1,
      },
      side: {
        dropLinks: [
          {
            title: 'New',
            path: 'new',
          },
          {
            title: 'View All',
            path: '',
          },
        ],
        icon: 'plus',
      }
    },
    user: {
      id: 'users',
      title: 'users',
      countName: 'users',
      dash: {
        path: 'users',
        // count: 1,
      },
      side: {
        dropLinks: [
          {
            title: 'New',
            path: 'new',
          },
          {
            title: 'View All',
            path: '',
          },
        ],
        icon: 'user',
      }
    },
  },
  itemsArray: [],
  counts: null,
}

fillItemsArray();

function fillItemsArray() {
  for(let key in initialState.dashes) {
    initialState.itemsArray.push(key)
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DASH_GET_COUNTS_SUCCESS: {
      const {data} = action;
      let counts = {};

      data.forEach( item => {
        const field = Object.keys(item)[0];
        counts[field] = item[field];
      })

      return {
        ...state,
        counts: counts,
      }

    }

    case TOGGLE_PROFILE_MENU:
      return {
        ...state,
        header: {
          ...state.header,
          isMenuVisible: !state.header.isMenuVisible,
        }
      }

    case CLOSE_HEADER_MENU: {
      return {
        ...state,
        header: {
          ...state.header,
          isMenuVisible: false,
        }
      }
    }

    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          isVisible: !state.sidebar.isVisible
        }
      }

    case TOGGLE_SIDEBAR_SELL:
      const visibleCell = action.item === state.sidebar.visibleCell ? '' : action.item;
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          visibleCell
        }
      }

    default:
      return state;

  }
}
