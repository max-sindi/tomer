import {
  ACTIVATE_DND_ON_FIELD,
  ADD_IMAGE,
} from '../constants';

const initialState = {
  activeDnd: '',
  properties: {
    images: [],
  },
  images: {
    listingImages: [],
  }
}

export default function(state = initialState, action) {
  switch(action.type) {
    case ACTIVATE_DND_ON_FIELD:
      return {
        ...state,
        activeDnd: action.name,
      };

    case 'ADD_IMAGE':
      return {
        ...state,
        images: {
          ...state.images,
          listingImages: [
            ...state.images.listingImages,
            {src: action.url},
          ]
        }
      }

    case 'PUSH_FILE': {
      const { field, file } = action;
      let newFilesArray;
      let toSendName = `${field}ToSend`;
      let toSendArray;

      if( !state[toSendName] ) {
        toSendArray = [];
      } else {
        toSendArray = state[toSendName].concat();
      }

      if( !state[field] ) {
        newFilesArray = [];
      } else {
        newFilesArray = state[field].concat();
      }

      if( Array.isArray(file) ) {
        file.forEach( fileObj => {
          newFilesArray.push( fileToRedux(fileObj) );
        })
      } else {
        newFilesArray.push( fileToRedux(file) )
      }

      return {
        ...state,
        [field]: newFilesArray,
        [toSendName]: toSendArray,
      }
    }

    case 'CRUDS_PROPERTIES__GET_SINGLE_SUCCESS': {
      const { images, floorPlan } = action.prop.listing;

      // if( images ) {
      //   images.forEach( image => {
      //     const url = image.url;
      //
      //     newImages.push({
      //       name: url,
      //       src: url,
      //       file: image
      //     })
      //   });
      // }
      //
      // let newImages;
      // let newFloorPlan;
      //
      // if( floorPlan ) {
      //   newFloorPlan = convertArrayToRedux(floorPlan);
      // } else {
      //
      // }

      const newImages = images ? convertArray(images) : [];
      const newFloorPlan = floorPlan ? convertArray(floorPlan) : [];

      return {
        ...state,
        propsImages: newImages,
        propsFloorPlans: newFloorPlan,
      }

      function convertArray(arr) {
        return arr.map( image => {
          const { url } = image;

          return {
            name: url,
            src: url,
            file: image,
          }
        })
      }
    }

    case 'DELETE_FILE': {
      const { field, index } = action;
      const reduxField = state[field];
      const toDeleteName = `${field}ToDelete`;
      const newFilesArray = reduxField.slice(0);
      let toDeleteArr;


      if( !state[toDeleteName] ) {
        toDeleteArr = [];
      } else {
        toDeleteArr = state[toDeleteName].concat();
      }

      // first copy object to deleteArray
      toDeleteArr.push( newFilesArray[index] );
      // then delete it from viewArray
      newFilesArray.splice(index, 1);

      return {
        ...state,
        [field]: newFilesArray,
        [toDeleteName]: toDeleteArr,
      }
    }

    case 'CLEAR_FILES': {
      const { field } = action;

      const reduxField = state[field];

      return {
        ...state,
        [field]: null,
        [`${field}ToDelete`]: null,
        [`${field}ToSend`]: null,
      }
    }

    default:
      return state;
  }

  function fileToRedux(fileObj) {
    return {
      name: fileObj.name,
      src: fileObj.base64,
      file: fileObj.file,
    };
  }
}
