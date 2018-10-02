import React, { Component } from 'react';
import { Field } from 'redux-form';
import DaySelect from './DaySelect';
import TimeSelect from './TimeSelect';


class TimesControlsField extends Component {

  removeField = () => {
    this.props.removeField(this.props.index);
  }

  render() {
    const {name} = this.props.fields;

    return (
      <div className="controls-row">
        <div>
          <button onClick={this.removeField} className="calendar__button-delete-field" type="button" >
            <i className="fas fa-times" />
          </button>
        </div>
        <div className="conrols__selects-wrap">
          <Field component={DaySelect} name={`${name}.0.day`}/>
          <Field component={TimeSelect} name={`${name}.0.startTime`}/>
          <Field component={TimeSelect} name={`${name}.0.endTime`}/>
        </div>
      </div>
    );
  }

}

export default TimesControlsField;
