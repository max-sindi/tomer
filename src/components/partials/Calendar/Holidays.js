import React, { Component } from 'react';
import { FieldArray, Field } from 'redux-form';
import HolidaysField from './HolidaysField';
import ButtonAddField from './ButtonAddField';

class Holidays extends Component {

  addField = () => {
    const { startValues } = this.props;
    this.props.fields.push( [startValues] );
  }

  removeField = (index) => {
    this.props.fields.remove(index);
  }

  render() {
    const { fields } = this.props;

    return (
      <div className="calendar__controls-block">
        <h4 className="calendar__controls-block-title">{ `${fields.name}`}</h4>
        <div className="shedule__block">
          {fields.map( (field, index) => (
            <FieldArray
              component={HolidaysField}
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

export default Holidays;
