export const crudsInitialStateBasic = {
  allProps: null,
  currentProp: null,
  formTemplateValues: {},
  filter: {
    field: null,
    incrementing: false,
    filtered: null,
  },
  pagination: {
    count: null,
  },
  fields: [
    {
      name: 'id',
      title: 'Id',
      filterField: 'id',
    },
    {
      name: 'name',
      title: 'Name',
      filterField: 'name',
    },
    {
      name: 'phone',
      title: 'Phone',
      filterField: 'phone',
    },
    {
      name: 'email',
      title: 'Email',
      filterField: 'email',
    },
  ],
};

export const entitiesList = [
  'agents',
  'landlords',
  'landlordListing',
  'viewingRequests',
  'offers',
  'viewingTimes',
  'facetOptions',
  'tagOptions',
  'propertyTags',
  'userEvents',
  'properties',
  'propertyRating',
  'users',
  'userFlags',
  'slotsParams'
]

export const initialStates = {
  // agentsStates
  agents: {
    fields: [
      {
        name: 'id',
        title: 'Id',
        filterField: 'id',
      },
      {
        name: 'name',
        title: 'Name',
        filterField: 'name',
      },
      {
        name: 'phone',
        title: 'Phone',
        filterField: 'phone',
      },
      {
        name: 'email',
        title: 'Email',
        filterField: 'email',
      },
    ],
  },
  // landlordsStates
  landlords: {
    fields: [
      {
        name: 'id',
        title: 'Id',
        filterField: 'id',
      },
      {
        name: 'name',
        title: 'Name',
        filterField: 'name',
      },
      {
        name: 'phone',
        title: 'Phone',
        filterField: 'phone',
      },
      {
        name: 'email',
        title: 'Email',
        filterField: 'email',
      },
    ],
  },
  // landlordsListingStates
  landlordListing: {
    fields: [
      {
        name: 'id',
        title: 'Id',
        filterField: 'id',
      },
      {
        name: 'name',
        title: 'Name',
        filterField: 'name',
      },
      {
        name: 'phone',
        title: 'Phone',
        filterField: 'phone',
      },
      {
        name: 'email',
        title: 'Email',
        filterField: 'email',
      },
    ],
  },
  // viewingRequestStates
  viewingRequests: {
    fields: [
      {
        name: 'id',
        title: 'Id',
        filterField: 'id',
      },
      {
        name: 'agentid',
        title: 'AgentId',
        filterField: 'agentid',
      },
      {
        name: 'acknowledgecount',
        title: 'AcknowledgeCount',
        filterField: 'acknowledgecount',
      },
      {
        name: 'startdate',
        title: 'StartDate',
        filterField: 'startdate',
      },
      {
        name: 'enddate',
        title: 'EndDate',
        filterField: 'enddate',
      },
      {
        name: 'propertyid',
        title: 'PropertyId',
        filterField: 'propertyid',
      },
      {
        name: 'status',
        title: 'Status',
        filterField: 'status',
      },
      {
        name: 'userid',
        title: 'UserId',
        filterField: 'userid',
      },
      // {
      //   name: 'viewingtimeid',
      //   title: 'Viewingtimeid',
      //   filterField: 'viewingtimeid',
      // },
      // {
      //   name: 'acknowledgeCount',
      //   title: 'AcknowledgeCount',
      //   filterField: 'acknowledgeCount',
      // },
    ],
  },
  // offersStates
  offers: {
    fields: [
      {
        name: 'id',
        title: 'Id',
        filterField: 'id',
      },
      {
        name: 'name',
        title: 'Name',
        filterField: 'name',
      },
      {
        name: 'phone',
        title: 'Phone',
        filterField: 'phone',
      },
      {
        name: 'email',
        title: 'Email',
        filterField: 'email',
      },
    ],
  },
  // viewingTimesStates
  viewingTimes: {
    fields: [
      {
        name: 'id',
        title: 'Id',
        filterField: 'id'
      },
      {
        name: 'propertyId',
        title: 'Property Id',
        filterField: 'propertyid',
      },
      {
        name: 'startHours',
        title: 'Start Hours',
        filterField: 'starttime.hours',
      },
      {
        name: 'startMins',
        title: 'Start Minutes',
        filterField: 'starttime.mins',
      },
      {
        name: 'dayOfWeek',
        title: 'Day of Week',
        filterField: 'dayofweek',
      },
    ],
  },
  // facetOptoinsStates
  facetOptions: {
    fields: [
      {
        name: 'id',
        title: 'Id',
        filterField: 'id',
      },
      {
        name: 'name',
        title: 'Name',
        filterField: 'name',
      },
      {
        name: 'type',
        title: 'Type',
        filterField: 'type',
      },
      {
        name: 'value',
        title: 'Value',
        filterField: 'value',
      },
    ],
  },
  // tagOptionsStates
  tagOptions: {
    fields: [
      {
        name: 'id',
        title: 'Id',
        filterField: 'id',
      },
      {
        name: 'name',
        title: 'Name',
        filterField: 'name',
      },
      {
        name: 'value',
        title: 'Value',
        filterField: 'value',
      },
    ],
  },
  // propertyTagsStates
  propertyTags: {
    fields: [
      {
        name: 'id',
        title: 'Id',
        filterField: 'id',
      },
      {
        name: 'tagid',
        title: 'Tag ID',
        filterField: 'tagid',
      },
      {
        name: 'propertyid',
        title: 'Property ID',
        filterField: 'propertyid',
      },
      {
        name: 'score',
        title: 'Score',
        filterField: 'score',
      },
    ],
  },
  // userEventsStates
  userEvents: {
    fields: [
      {
        name: 'id',
        title: 'Id',
        filterField: 'id',
      },
      {
        name: 'eventid',
        title: 'Event Id',
        filterField: 'eventid',
      },
      {
        name: 'userid',
        title: 'User Id',
        filterField: 'userid',
      },
      {
        name: 'happenedatlast',
        title: 'Happedned at last',
        filterField: 'happenedatlast',
      },
      {
        name: 'receivedatlast',
        title: 'Received at last',
        filterField: 'receivedatlast',
      },
      {
        name: 'propertyid',
        title: 'Property id',
        filterField: 'propertyid',
      },
    ],
  },
  // propertiesStates
  properties: {
    fields: [
      {
        name: 'id',
        title: 'Id',
        filterField: 'id',
      },
      {
        name: 'street',
        title: 'Street',
        filterField: 'address.street',
      },
      {
        name: 'city',
        title: 'City',
        filterField: 'address.city',
      },
      {
        name: 'postcode',
        title: 'Postcode',
        filterField: 'address.postcode',
      },
      {
        name: 'agentId',
        title: 'Agent Id',
        filterField: 'listing.agentids',
      },
      {
        name: 'weeklyPrice',
        title: '£/week',
        filterField: 'listing.rent.weeklyprice',
      },
      {
        name: 'numBedrooms',
        title: '# Beds',
        filterField: 'building.numbedrooms',
      },
      {
        name: 'numBathrooms',
        title: '# Baths',
        filterField: 'building.numbathrooms',
      },
    ],
    listingTypeDefault: {
      values: [ 'sale', 'rent' ],
      defaultValues: 'rent'
    },
    formTemplateValues: {
      propertyType: 'flat',
    },
    furnishedDefault: {
      values: ['furnished', 'unfurnished', 'partially-furnished'],
      defaultValues: 'furnished',
    },
    sourceTypeDefault: {
      values: ['zoopla'],
      defaultValues: 'zoopla',
    },
    salePrice: 0,
    salePriceType: ' ',
    monthlyPrice: 0,
    weeklyPrice: 0,
  },
  // propertyRatingStates
  propertyRating: {
    fields: [
      {
        name: 'id',
        title: 'Id',
        filterField: 'id',
      },
      {
        name: 'propertyid',
        title: 'Property ID',
        filterField: 'propertyid',
      },
      {
        name: 'userid',
        title: 'User ID',
        filterField: 'userid',
      },
      {
        name: 'rating',
        title: 'Rating',
        filterField: 'rating',
      },
    ],
  },
  // usersStates
  users: {
    fields: [
      {
        name: 'id',
        title: 'Id',
        filterField: 'id',
      },
      {
        name: 'username',
        title: 'Name',
        filterField: 'username',
      },
      {
        name: 'emails',
        title: 'Email',
        filterField: 'emails',
      },
      {
        name: 'phones',
        title: 'Phones',
        filterField: 'phones',
      },
      {
        name: 'roles',
        title: 'Roles',
        filterField: 'roles',
      },
      {
        name: 'createdat',
        title: 'Joined',
        filterField: 'createdat',
      },
    ],
  },
  // suerFlagsStates
  userFlags: {
    fields: [
      {
        name: 'id',
        title: 'Id',
      },
      {
        name: 'agreed',
        title: 'Let Agreed',
      },
      {
        name: 'student',
        title: 'Student Friendly',
      },
      {
        name: 'parking',
        title: 'Parking/Garage',
      },
      {
        name: 'room',
        title: 'Room for rent',
      },
      {
        name: 'days',
        title: 'Properties age',
      },
      {
        name: 'created',
        title: 'Created',
      },
    ],
  },
  // slotsParamsStates
  slotsParams: {
    fields: [
      {
        name: 'id',
        title: 'Id',
      },
      {
        name: 'monday',
        title: 'Monday',
      },
      {
        name: 'tuesday',
        title: 'Tuesday',
      },
      {
        name: 'wednesday',
        title: 'Wednesday',
      },
      {
        name: 'thursday',
        title: 'Thursday',
      },
      {
        name: 'friday',
        title: 'Friday',
      },
      {
        name: 'saturday',
        title: 'Saturday',
      },
      {
        name: 'sunday',
        title: 'Sunday',
      },
      {
        name: 'created',
        title: 'Created',
      },
    ]
  },
}
