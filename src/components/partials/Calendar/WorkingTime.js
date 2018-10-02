import React, { Component } from 'react';
import { FieldArray, Field } from 'redux-form';
import WorkingTimeField from './WorkingTimeField';
import ButtonAddField from './ButtonAddField';

class WorkingTime extends Component {

  addField = () => {
    const working = [{day: '1', startTime: "9:00", endTime: "18:00"}];
    this.props.fields.push(working);
  }

  removeField = (index) => {
    this.props.fields.remove(index);
  }

  render() {
    const { fields } = this.props;

    return (
      <div className="calendar__controls-block">
        <h4>Working Time</h4>
        <div className="shedule__block">
          {fields.map( (field, index) => (
            <FieldArray
              component={WorkingTimeField}
              name={`${fields.name}.${index}`}
              index={index}
              removeField={this.removeField}
            />
          ))}
        </div>
        <ButtonAddField addField={this.addField} />
      </div>
    );
  }

}

export default WorkingTime;
