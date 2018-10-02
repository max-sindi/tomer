import React, { Component } from 'react';
import { Field, FieldArray } from 'redux-form';
// import Input from './Input';
import * as Form from './';
import uuid from 'uuid/v4';

class FloatTextFields extends Component {

  removeField = index => {
    const { fields } = this.props;
    fields.remove(index);
  }

  shouldComponentUpdate = (nextProp) => {
    if(nextProp.fields.length === this.props.fields.length) {
      return false;
    }

    return true;
  }

  addField = () => {
    const { fields, inputsPerField, nestedFields } = this.props;

    let initialState;
    // someting wrong if put just '' without space, fields are removing at blur
    const initialString = ' ';

    if( !inputsPerField && !nestedFields) {
      initialState = " ";
    } else {
      initialState = {};
      for(let i = 0; i < inputsPerField; i++) {
        initialState[nestedFields[i]] = initialString
      }
    }


    fields.push(initialState);
  }

  fillFieldWithInputs = (field) => {
    const { inputsPerField, fields: {name}, nestedFields } = this.props;
    const {index} = field;

    let elemsArray = [];

    if( !nestedFields && !inputsPerField ) {
      elemsArray[0] =
        <Field
          type="text"
          component={Form.InputTextField}
          name={`${name}.${index}`}
          addedClassName="add-field__input"
          key={ `${name}.${index}` }
        />;
      return elemsArray;
    }

    for (let i = 0; i < inputsPerField; i++) {
      elemsArray.push(
        <Field type="text"
          component={Form.InputTextField}
          name={`${name}.${index}.${nestedFields[i]}`}
          addedClassName="add-field__input"
          key={ `${name}.${index}.${nestedFields[i]}` }
          label={nestedFields[i]}
        />
      )
    }

    return elemsArray;
  }

  render() {
    const { meta, fields } = this.props;

    return (
      <React.Fragment>
        {fields.map( ( field, index ) => (
          <div className="add-field__wrap" key={ `${fields.name}${index}` }>
            <Form.ButtonRemoveField removeField={this.removeField} index={index} />
            <div className="add-field__inputs-wrap">
              <FieldArray name={`${fields.name}.nested${index}`} component={this.fillFieldWithInputs} props={{index}} />
            </div>
          </div>
        ))}
        <div className="add-field__add">
          <Form.ButtonAddField addField={this.addField} />
        </div>
      </React.Fragment>
    );
  }

}

export default FloatTextFields;
