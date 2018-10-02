import {
  fillNestedFieldsToRedux,
  fillTimesToRedux,
  addPositionsIfExist,
  fillNestedFieldsToReduxNew,
  convertDate,
} from './assists';

import propsFields from '../components/partials/Properties/fieldsCouples';
import userFields from '../components/partials/Users/fields';

import viewReqFields from '../components/partials/ViewingRequests/fields';
import userEventsFields from '../components/partials/UserTags/fields';

// END IMPORTS
// START FUNCTIONS

function offersToTable(item) {
  console.warn('offersPropToTable');
}

function offersToForm(item) {
  console.warn('offersPropToTable');
}

function agentsToTable(item) {
  const row = {
    id: item.id,
    name: item.name,
    phone: item.phone || '',
    email: item.email,
  }

  return row;
}

function agentsToForm(item) {
  const agent = item;
  const address = agent.address || {};
  const image = agent.image || {};

  const officeHours = agent.officehours || {};

  const officeHoursStart = officeHours.startTime || {};
  const officeHoursEnd = officeHours.endTime || {};

  const res = {
    name: agent.name,
    phone: agent.phone || '',
    street: address.street || '',
    country: address.country || '',
    state: address.state || '',
    city: address.city || '',
    postcode: address.postcode || '',
    email: agent.email || '',
    imageUrl: image.url || '',
    imageCaption: image.caption,
    startHours: officeHoursStart.hours || '',
    startMins: officeHoursStart.mins || '',
    endHours: officeHoursEnd.hours || '',
    endMins: officeHoursEnd.mins || '',
    textablenumbers: fillNestedFieldsToRedux('textablenumbers', ['name', 'number'], agent, false)
  };

  // fillTimesToRedux(res, agent.schedule);

  return res;
}

function facetOptionsBoth(item) {
  const res = {
    id: item.id,
    name: item.name,
    type: item.type,
    value: item.value,
    iconUrl: item.iconUrl,
  }

  return res;
}

function landlordsToTable(item) {
  return {
    id: item.id,
    name: item.name,
    phone: item.phone,
    email: item.email,
  }
}

function landlordsToForm(item) {
  const agent = item;
  const address = agent.address || {};
  const image = agent.image || {};

  const officeHours = agent.officehours || {};

  const officeHoursStart = officeHours.startTime || {};
  const officeHoursEnd = officeHours.endTime || {};

  const res = {
    name: agent.name,
    phone: agent.phone || '',
    street: address.street || '',
    country: address.country || '',
    state: address.state || '',
    city: address.city || '',
    postcode: address.postcode || '',
    email: agent.email || '',
    imageUrl: image.url || '',
    imageCaption: image.caption,
    startHours: officeHoursStart.hours || '',
    startMins: officeHoursStart.mins || '',
    endHours: officeHoursEnd.hours || '',
    endMins: officeHoursEnd.mins || '',
    textablenumbers: fillNestedFieldsToRedux('textablenumbers', ['name', 'number'], agent, false)
  };

  // fillTimesToRedux(res, data.schedule);

  return res;
}

function propertiesToTable(item) {
  const address = item.address || {};
  const rent = item.listing.rent || {};
  // const { building={} } = item;
  const building = item.building || {};

  const obj = {
    id: item.id || item.old_id,
    street: address.street || '',
    city: address.city || '',
    country: address.country || '',
    postcode: address.postcode || '',
    agentId: item.listing.agentIds || '',
    weeklyPrice: rent.weeklyPrice || '',
    numBedrooms: building.numBedrooms || '',
    numBathrooms: building.numBathrooms || '',
  }

  return obj;
}

function propertiesToForm(item) {
  const res = {};
  const prop = item;
  const address = prop.address || {},
        location = prop.location || {},
        building = prop.building || {},
        listing = prop.listing || {},
        source = prop.source || {},
        rent = listing.rent || {}
  ;

  addPositionsIfExist(propsFields.general, prop, res, {from: 'inServer', to: 'inRedux'});
  addPositionsIfExist(propsFields.address, address, res, {from: 'inServer', to: 'inRedux'});
  addPositionsIfExist(propsFields.location, location, res, {from: 'inServer', to: 'inRedux'});
  addPositionsIfExist(propsFields.building, building, res, {from: 'inServer', to: 'inRedux'});
  addPositionsIfExist(propsFields.listing, listing, res, {from: 'inServer', to: 'inRedux'});
  addPositionsIfExist(propsFields.rent, rent, res, {from: 'inServer', to: 'inRedux'});
  addPositionsIfExist(propsFields.source, source, res, {from: 'inServer', to: 'inRedux'});

  // res.listingImages = fillNestedFieldsToRedux('images', ['url'], listing);
  // res.floorPlan = fillNestedFieldsToRedux('floorPlan', ['url', 'caption'], listing);
  res.agentIds = fillAgentIds();
  // fillTimesToRedux(res, prop.schedule);

  return res;

  function fillAgentIds() {
    const agents = listing.agentIds;
    const res = [];

    if(!agents) {
      return res;
    }

    agents.forEach( agent => res.push(agent));

    return res;
  }
}

function propertyRatingBoth(item) {
  return {
    id: item.id,
    propertyid: item.propertyid || '',
    userid: item.userid || '',
    rating: item.rating || 0,
  }
}

function propertyTagsBoth(item) {
  return {
    id: item.id,
    tagid: item.tagid || '',
    propertyid: item.propertyid || '',
    score: item.score || 0,
  }
}

function tagOptionsBoth(item) {
  return {
    id: item.id,
    name: item.name || '',
    value: item.value || 1,
  }
}

function usersToTable(data) {
  const res = {
    id: data.id,
  };

  const profile = data.profile;
  const emails = data.emails;
  const phones = data.phones;

  addPositionsIfExist(userFields.general, data, res, {from: 'inServer', to: 'inRedux'});

  if(profile) {
    addPositionsIfExist(userFields.profile, profile, res, {from: 'inServer', to: 'inRedux'});
  }

  fillEmailsToTable();

  if(phones) {
    res.phones = fillNestedFieldsToReduxNew('phones', [{name: 'number'}, {name: 'verified'}], data, false);
  }

  return res;

  function fillEmailsToTable() {
    const { emails } = data;

    if( !emails ) {
      return;
    }

    const newEmails = [];

    emails.forEach( emailData => {
      const address = emailData.address;

      if(address) {
        newEmails.push(address);
      }
    })

    res.emails = newEmails;
  }
}

function usersToForm(data) {
  const res = {
    id: data.id,
  };

  const profile = data.profile;
  const emails = data.emails;
  const phones = data.phones;

  addPositionsIfExist(userFields.general, data, res, {from: 'inServer', to: 'inRedux'});

  if(profile) {
    addPositionsIfExist(userFields.profile, profile, res, {from: 'inServer', to: 'inRedux'});
  }

  if(emails) {
    res.emails = fillNestedFieldsToRedux('emails', ['address', 'verified'], data, false);
  }

  if(phones) {
    res.phones = fillNestedFieldsToReduxNew('phones', [{name: 'number'}, {name: 'verified'}], data, false);
  }


  return res;
}

function userEventsBoth(item) {
  const res = {};

  addPositionsIfExist(userEventsFields, item, res, {from: 'inServer', to: 'inRedux'});

  return res;
}

function viewingRequestsToTable(item) {
  const res = {
    id: item.id,
    // date: dateToString(item.startDate),
    agentid: item.agentid,
    acknowledgecount: item.acknowledgecount,
    startdate: item.startdate,
    enddate: item.enddate,
    propertyid: item.propertyid,
    status: item.status,
    userid: item.userid,
    // viewingtimeid: item.viewingtimeid,
  };

  return res;

  function dateToString(date) {
    const newDate = new Date(date);
    const dateString = newDate.toString();

    if( dateString === 'Invalid Date') {
      return '';
    }

    return dateString.split('GMT')[0];
  }
}

function viewingRequestsToForm(item) {

  const res = {
  }

  addPositionsIfExist(viewReqFields, item, res, {from: 'inServer', to: 'inRedux'});

  return res;

  // function dateToInputForm(date) {
  //   if(data) {
  //     return new Date(date).toISOString().split('T')[0];
  //   }
  // }
}

function viewingTimesBoth(prop) {
  const { startTime={}, endTime={} } = prop;

  const res = {
    id: prop._id,
    propertyId: prop.propertyId,
    startHours: startTime.hours,
    startMins: startTime.mins,
    endHours: endTime.hours,
    endMins: endTime.mins,
    dayOfWeek: prop.dayOfWeek,
  }

  return res;
}

function landlordListingToTable(item) {
}

function landlordListingToForm(item) {
}

function userFlagsBoth(item) {
  return item;
}

function slotsParamsBoth(item) {
  return item;
}
  // DELETE THIS
function template(item) {

}

// END FUNCTIONS

export default {
  offers: {
    table: offersToTable,
    form: offersToForm,
  },
  agents: {
    table: agentsToTable,
    form: agentsToForm,
  },
  facetOptions: {
    table: facetOptionsBoth,
    form: facetOptionsBoth,
  },
  landlords: {
    table: agentsToTable,
    form: agentsToForm,
  },
  landlordListing: {
    table: landlordListingToTable,
    form: landlordListingToForm,
  },
  properties: {
    table: propertiesToTable,
    form: propertiesToForm,
  },
  propertyRating: {
    table: propertyRatingBoth,
    form: propertyRatingBoth,
  },
  propertyTags: {
    table: propertyTagsBoth,
    form: propertyTagsBoth,
  },
  tagOptions: {
    table: tagOptionsBoth,
    form: tagOptionsBoth,
  },
  users: {
    table: usersToTable,
    form: usersToForm,
  },
  userEvents: {
    table: userEventsBoth,
    form: userEventsBoth,
  },
  viewingRequests: {
    table: viewingRequestsToTable,
    form: viewingRequestsToForm,
  },
  viewingTimes: {
    table: viewingTimesBoth,
    form: viewingTimesBoth,
  },
  userFlags: {
    table: userFlagsBoth,
    form: userFlagsBoth,
  },
  slotsParams: {
    table: slotsParamsBoth,
    form: slotsParamsBoth,
  },
}
