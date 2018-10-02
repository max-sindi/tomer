import facetOptionsFields from '../components/partials/FacetOptions/fields';
import userEventsFields from '../components/partials/UserTags/fields';
import { fields as tagOptionsFields } from '../components/partials/TagOptions/fields';
import propertyTagsFields from '../components/partials/PropertyTags/fields';
import { fields as propertyRatingFields } from '../components/partials/PropertyRating/fields';
import viewingRequestsFields from '../components/partials/ViewingRequests/fields';
import usersFields from '../components/partials/Users/fields';
import propsFields from '../components/partials/Properties/fieldsCouples';

import {
  fillNestedFieldsToServer,
  addPositionsIfExist,
  fillNestedFieldsToServerNew,
  fillTimesToServer,
} from './assists';


import { sendFile, deleteFile } from '../utils/api/AWSApi';


async function propertiesDataToServer(values, store, oldState) {
  const res = {
    active: values.isActive,
    address: {},
    location: {},
    building: {},
    listing: {
      rent: {},
      agentIds: fillAgentIds(values),
    },
    source: {}
  }


  if( !oldState ) {
    await sendFiles('propsImages').then( resolve => {
      res.listing.images = resolve;
    })

    await sendFiles('propsFloorPlans',).then( resolve => {
      res.listing.floorPlan = resolve;
    })
  } else {
    await sendFiles('propsImages', oldState.listing.images).then( resolve => {
      res.listing.images = resolve;
    })

    await sendFiles('propsFloorPlans', oldState.listing.floorPlan).then( resolve => {
      res.listing.floorPlan = resolve;
    })
  }


  fillAnother();

  return res;

  function fillAnother() {
    addPositionsIfExist(propsFields.general, values, res, {from: 'inRedux', to: 'inServer'});
    addPositionsIfExist(propsFields.address, values, res.address, {from: 'inRedux', to: 'inServer'});
    addPositionsIfExist(propsFields.location, values, res.location, {from: 'inRedux', to: 'inServer'});
    addPositionsIfExist(propsFields.building, values, res.building, {from: 'inRedux', to: 'inServer'});
    addPositionsIfExist(propsFields.listing, values, res.listing, {from: 'inRedux', to: 'inServer'});
    addPositionsIfExist(propsFields.rent, values, res.listing.rent, {from: 'inRedux', to: 'inServer'});
    addPositionsIfExist(propsFields.source, values, res.source, {from: 'inRedux', to: 'inServer'});
    // addPositionsIfExist(propsFields.building, values, res.building, {from: 'inRedux', to: 'inServer'});

    // fillAgentIds(values);
    // fillTimesToServer(res, values);
  }

  function fillAgentIds(values) {
    const { agentIds } = values;

    if( !agentIds || agentIds.length === 0) {
      return;
    }

    // avoid empty fields
    const res = agentIds.map( value => value.trim() ).filter(value => value.length > 0)

    return res;
  }

  function sendFiles(filesInDndStore, fileStore) {
    if(!fileStore) {
      return new Promise((res, rej) => {
        const files = store.dnd[filesInDndStore];

        let filesArrToServer = [];
        let promises = [];

        if(!files || files.length === 0) {
          res(promises);
        }

        files.forEach( obj => {
          promises.push( sendImage(obj) );
        })

        Promise.all(promises).then(function(values) {
          res(values.map(obj => {
            return {
              url: obj.location
            }
          }))
        });

      })
    } else {
      return new Promise( (res, rej) => {
        const files = fileStore || [];
        const newImages = store.dnd[filesInDndStore];

        const filesToDelete = store.dnd[`${filesInDndStore}ToDelete`];
        const filesToSend = store.dnd[`${filesInDndStore}ToSend`]

        let promises = [];

        if(files.length === 0 && newImages.length === 0) {
          return new Promise(res => promises);
        }

        if( filesToDelete ) {
          filesToDelete.forEach( obj => {
            promises.push( deleteImage(obj) );
          })
        }

        if( filesToSend ) {
          filesToSend.forEach( obj => {
            promises.push( sendImage(obj) );
          })
        }

        Promise.all(promises).then( values => {
          res(values.map(obj => {
            return {
              url: obj.location,
            }
          }))
        })
      })
    }

    function sendImage(file) {
      return sendFile(file.file, file.name);
    }

    function deleteImage(file) {
      return deleteFile(file.name);
    }
  }
}


function agentsDataToServer(values) {
  const res = {
    name: values.name,
    phone: values.phone || '',
    address: {
      street: values.street || '',
      country: values.country || '',
      state: values.state || '',
      city: values.city || '',
      postcode: values.postcode || '',
    },
    textablenumbers: fillNestedFieldsToServer('textablenumbers', ['name', 'number'], values),
    email: values.email || '',
    // image: {
    //   url: values.imageUrl || '',
    //   // caption: values.imageCaption || '',
    // },
    officehours: {
      startTime: {
        hours: values.startHours || '',
        mins: values.startMins || '',
      },
      endTime: {
        hours: values.endHours || '',
        mins: values.endMins || '',
      },
    }
  }

  // fillTimesToServer(res, values);

  return res;
}

function facetOptionsDataToServer(values) {
  const res = {}

  addPositionsIfExist(facetOptionsFields, values, res);

  return res;
}

function landlordsDataToServer(values) {
  const res = {
    name: values.name,
    phone: values.phone || '',
    address: {
      street: values.street || '',
      country: values.country || '',
      state: values.state || '',
      city: values.city || '',
      postcode: values.postcode || '',
    },
    textablenumbers: fillNestedFieldsToServer('textablenumbers', ['name', 'number'], values),
    email: values.email || '',
    officehours: {
      startTime: {
        hours: values.startHours || '',
        mins: values.startMins || '',
      },
      endTime: {
        hours: values.endHours || '',
        mins: values.endMins || '',
      },
    }
  }

  // fillTimesToServer(res, values);

  return res;
}

function usersDataToServer(values) {
  const res = {
    // username: values.username,
    // password: values.password,
    // createdAt: values.createdAt,
    profile: {},
  }

  const emailsFields = [
    {
      name: 'address',
      type: 'text',
    },
    {
      name: 'verified',
      type: 'checkbox',
    },
  ];

  const phonesFields = [
    {
      name: 'number',
      type: 'text',
    },
  ];

  addPositionsIfExist(usersFields.general, values, res, {from: 'inRedux', to: 'inServer'});
  addPositionsIfExist(usersFields.profile, values, res.profile, {from: 'inRedux', to: 'inServer'});
  res.emails = fillNestedFieldsToServerNew('emails', emailsFields, values);
  res.phones = fillNestedFieldsToServerNew('phones', phonesFields, values);

  return res;
}

function userEventsDataToServer(values) {

  const res = {}

  addPositionsIfExist(userEventsFields, values, res);

  return res;
}

function userFlagsDataToServer(values) {

}

function tagOptionsDataToServer(values) {
  const res = {}

  addPositionsIfExist(tagOptionsFields, values, res);

  return res;
}

function slotsParamsDataToServer(values) {

}

function propertyTagsDataToServer(values) {
  const res = {
    // tagId: value.tagId || '',
    // propertyId: value.propertyId || '',
    // score: value.score || 0,
  }

  addPositionsIfExist(propertyTagsFields, values, res);

  return res;
}

function viewingTimesDataToServer(values) {
  const res = {
    propertyid: values.propertyid || '',
    starttime: {
        hours: values.starthours || '2',
        mins: values.startmins || '2',
    },
    endtime:
      {
        hours: values.endhours || '2',
        mins: values.endmins || '2',
      },
    dayofweek: values.dayofweek || 'Monday'
  }

  return res;
}

function propertyRatingDataToServer(values) {
  const res = {}

  addPositionsIfExist(propertyRatingFields, values, res);

  return res;
}

function viewingRequestsDataToServer(value) {
  const res = {
      // userid: value.userid || '',
      // viewingtimeid: value.viewingtimeid || '',
      // startdate: value.startdate || '',
      // enddate: value.enddate || '',
      // status: value.status || 'Pending',
      // agentid: value.agentid || '',
      // propertyid: value.propertyid || '',
      // acknowledgecount: value.acknowledgecount || 0,
  }
  // debugger

  addPositionsIfExist(viewingRequestsFields, value, res, {from: 'inRedux', to: 'inServer'});
  return res;
}

const converters = {
  agents: agentsDataToServer,
  facetOptions: facetOptionsDataToServer,
  landlords: landlordsDataToServer,
  users: usersDataToServer,
  userEvents: userEventsDataToServer,
  userFlags: userFlagsDataToServer,
  properties: propertiesDataToServer,
  tagOptions: tagOptionsDataToServer,
  slotsParams: slotsParamsDataToServer,
  propertyTags: propertyTagsDataToServer,
  viewingTimes: viewingTimesDataToServer,
  propertyRating: propertyRatingDataToServer,
  viewingRequests: viewingRequestsDataToServer,
}

export default converters;
