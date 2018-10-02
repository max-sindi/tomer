const general = [
  {
    both: 'displayedaddress',
  },
  {
    inRedux: 'isActive',
    inServer: 'active',
  },
  // {
  //   inRedux: 'salePrice',
  //   inServer: 'sale.price',
  // },
  // {
  //   inRedux: 'salePriceType',
  //   inServer: 'sale.priceType',
  // },
  // {
  //   inRedux: 'weeklyPrice',
  //   inServer: 'rent.weeklyPrice',
  // },
  // {
  //   inRedux: 'monthlyPrice',
  //   inServer: 'rent.monthlyPrice',
  // },
  // {
  //   inRedux: 'furnished',
  //   inServer: 'furnished',
  // },
  // {
  //   inRedux: 'sourceType',
  //   inServer: 'source.type',
  // },
  // {
  //   inRedux: 'sourceUrl',
  //   inServer: 'source.url',
  // },
  // {
  //   inRedux: 'sourceId',
  //   inServer: 'source.id',
  // },
  // {
  //   inRedux: 'vacancyDate',
  //   inServer: 'rent.vacancyDate',
  //   isDate: true,
  // },
]

const address = [
  {
    both: 'street',
  },
  {
    both: 'country',
  },
  {
    both: 'state',
  },
  {
    both: 'state',
  },
  {
    both: 'city',
  },
  {
    both: 'postcode',
  },
];

const location = [
  {
    both: 'latitude',
  },
  {
    both: 'longitude',
  },
];

const building = [
  {
    both: 'numFloors',
  }, {
    both: 'numBedrooms',
  }, {
    both: 'numBathrooms',
  }, {
    both: 'propertyType',
  }
];

const listing = [
  {
    both: 'listingType',
  }, {
    both: 'description',
  }, {
    both: 'shortDescription',
  }, {
    inRedux: 'listingDate',
    inServer: 'date',
    isDate: true,
  },
]

const rent = [
  {
    both: 'weeklyPrice',
  }, {
    both: 'monthlyPrice',
  }
];

const source = [
  {
    inRedux: 'sourceId',
    inServer: 'id',
  },
  {
    inRedux: 'sourceType',
    inServer: 'type',
  },
  {
    inRedux: 'sourceUrl',
    inServer: 'url',
  },
]

const fields = {
  general,
  building,
  location,
  address,
  listing,
  rent,
  source,
}

export default fields;
