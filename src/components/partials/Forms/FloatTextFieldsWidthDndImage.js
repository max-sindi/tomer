// import React, { Component } from 'react';
// import { Field, FieldArray } from 'redux-form';
// import { connect } from 'react-redux';
// import * as Form from './';
// import uuid from 'uuid/v4';
// import FileBase64 from 'react-file-base64';
//
// class FloatTextFieldsWidthDndImage extends Component {
//
//   removeField = index => {
//     const { fields } = this.props;
//     fields.remove(index);
//   }
//
//   addField = () => {
//     const { fields, inputsPerField, nestedFields } = this.props;
//     let initialState;
//     // someting wrong if put just '' without space, fields are removing at blur
//     const initialString = ' ';
//
//     if( !inputsPerField && !nestedFields) {
//       initialState = " ";
//
//     } else {
//       initialState = {};
//       for(let i = 0; i < inputsPerField; i++) {
//         initialState[nestedFields[i]] = initialString
//       }
//     }
//
//
//     fields.push(initialState);
//   }
//
//   fillFieldWithInputs = (field) => {
//     const { inputsPerField, fields: {name}, nestedFields } = this.props;
//     const {index} = field;
//
//     let elemsArray = [];
//
//     if( !nestedFields && !inputsPerField ) {
//       elemsArray[0] =
//         <Field
//           type="text"
//           component={Form.InputTextFieldWidthDndImage}
//           name={`${name}.${index}`}
//           addedClassName="add-field__input"
//           key={ `${name}.${index}` }
//           activateDnd={this.props.activateDnd}
//         />;
//       return elemsArray;
//     }
//
//     for (let i = 0; i < inputsPerField; i++) {
//       const fieldName = `${name}.${index}.${nestedFields[i]}`;
//
//       // check if this field need to be dnd or not
//       if(this.props.dndFields.some(value => value === nestedFields[i])) {
//
//         elemsArray.push(
//           <div className={`dnd-field-wrap`} key={ fieldName }>
//             <Field type="text"
//               component={Form.InputTextFieldWidthDndImage}
//               name={fieldName}
//               addedClassName="add-field__input"
//               label={nestedFields[i]}
//               activateDnd={this.props.activateDnd}
//               activeDnd={this.props.activeDnd}
//               sendImage={this.props.sendImage}
//             />
//           {/* <Field type="file" component={() => (<input type='file' className='xeqw'/>)} name={`${fieldName}-image`}/> */}
//            </div>
//         )
//       } else {
//         elemsArray.push(
//           <Field type="text"
//             component={Form.InputTextField}
//             name={fieldName}
//             addedClassName="add-field__input"
//             key={ fieldName }
//             label={nestedFields[i]}
//           />
//         )
//       }
//     }
//
//     return elemsArray;
//   }
//
//   render() {
//     const { meta, fields, activeDnd, dnd } = this.props;
//     const imgs = dnd.images[fields.name];
//
//     return (
//       <React.Fragment>
//         {fields.map( ( field, index ) => {
//           return (
//             <div className="add-field__wrap" key={ `${fields.name}${index}` }>
//               <Form.ButtonRemoveField removeField={this.removeField} index={index} />
//             <div className={`add-field__inputs-wrap`}>
//               {imgs[index] &&
//                 <div className="img-wrap">
//                   <img src={imgs[index].src} alt='dsada'/>
//                 </div>
//               }
//               <div className="fields-wrap">
//                 <FieldArray
//                   name={`${fields.name}.nested${index}`}
//                   component={this.fillFieldWithInputs}
//                   props={{index}}
//                 />
//               </div>
//             </div>
//           </div>
//           )}
//         )}
//         <div className="add-field__add">
//           <Form.ButtonAddField addField={this.addField} />
//         </div>
//       </React.Fragment>
//     );
//   }
//
// }
//
//
// export default connect(
//   state => ({
//     dnd: state.dnd,
//   })
// )(FloatTextFieldsWidthDndImage);

import React, { Component } from 'react';
import { Field, FieldArray } from 'redux-form';
// import { connect } from 'react-redux';
import * as Form from './';
// import uuid from 'uuid/v4';
import FileBase64 from 'react-file-base64';
import DndImages from './DndImages';
// import { pushFile } from '../../../redux/actions/dndActions';
import ReactS3Uploader from 'react-s3-uploader';
class FloatTextFieldsWidthDndImage extends Component {

  done = file => {
    this.props.pushFile(file, this.props.dndField);
  }

  componentWillUnmout = () => {
    this.props.clearFiles(this.props.dndField);
  }

  render() {
    const { fileStore, dndField, deleteFile, multiple } = this.props;
    const images = fileStore[dndField];

    return (
      <div className="dnd-field-wrap">
        <DndImages
          images={images}
          field={dndField}
          deleteFile={deleteFile}
        />
        <div className="dnd-upload-wrap">
          <FileBase64
            multiple={multiple}
            onDone={this.done}
          />
          <div className="dnd-upload-fake">
            Click or drug images to upload
          </div>
        </div>
      </div>
    );
  }

}

export default FloatTextFieldsWidthDndImage;
