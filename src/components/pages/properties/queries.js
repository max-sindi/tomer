export default {
  propsLiveDate: {
    reqParams: {
      filterBy: 'listing.live',
      filter: 'true',
      sortBy: 'listing.date',
      sort: 'asc',
    },
  },
  propsNotLiveDate: {
    reqParams: {
      filterBy: 'listing.live',
      filter: 'false',
      sortBy: 'listing.date',
      sort: 'asc',
    },
  },
  propsLiveImages: {
    addedPath: 'imageCount',
    reqParams: {
      filterBy: 'listing.live',
      filter: 'true',
    }
  },
  propsNotLiveImages: {
    addedPath: 'imageCount',
    reqParams: {
      filterBy: 'listing.live',
      filter: 'false',
    }
  },
  propsNotLiveLast3Days: {
    addedPath: 'dateRange',
    reqParams: {
      filterBy: 'listing.date',
      start: createLimitDateString(3),
      end: createCurrentDateString(),
    }
  },
  propsErrorDate: {
    reqParams: {
      filterBy: 'listing.liveCheckError',
      filter: 'null',
      filterInvert: 'true',
    },
  },
  // propsLiveDate: '&filterBy=listing.live&filter=true&sortBy=listing.date&sort=asc',
  // propsLiveImages: '&filterBy=listing.live&filter=true&countLimit=2&countField=listing.images',
  // propsNotLiveDate: '&filterBy=listing.live&filter=false&sortBy=listing.date&sort=asc',
  // propsNotLiveImages: '&filterBy=listing.live&filter=false&countLimit=2&countField=listing.images',
  // '&filterBy=listing.live&filter=true&sortBy=listing.date&sort=asc',
  // propsNotLiveLast3Days: '&filterBy=listing.live&filter=true&sortBy=listing.date&sort=asc',
  // propsErrorDate: '&filterBy=listing.liveCheckError&filter=null&filterInvert=true',
}

function createCurrentDateString() {
  const date = new Date().toISOString();

  return date;
}

function createLimitDateString(limit) {
  let date = new Date();
  let newDateString;

  const monthDay = date.getDate();
  const newMonthDay = monthDay - limit;

  date.setDate(newMonthDay);

  newDateString = date.toISOString();

  return newDateString;
}
