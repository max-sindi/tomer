import React, { Component } from 'react';
import { FieldArray, Field } from 'redux-form';
import TimesControlsField from './TimesControlsField';
import ButtonAddField from './ButtonAddField';
import uuid from 'uuid/v4';

class TimesControls extends Component {

  addField = () => {
    const { startValues } = this.props;
    this.props.fields.push([startValues]);
  }

  removeField = (index) => {
    this.props.fields.remove(index);
  }

  render() {
    const { fields } = this.props;

    return (
      <div className="calendar__controls-block">
        <h4 className="calendar__controls-block-title">{ `${fields.name} Time`}</h4>
        <div className="shedule__block">
          {fields.map( (field, index) => (
            <FieldArray
              component={TimesControlsField}
              name={`${fields.name}.${index}`}
              index={index}
              removeField={this.removeField}
              key={ `${fields.name}.${index}` }
            />
          ))}
        </div>
        <ButtonAddField addField={this.addField} />
      </div>
    );
  }

}

export default TimesControls;
