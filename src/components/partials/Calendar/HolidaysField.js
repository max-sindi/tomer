import React, { Component } from 'react';
import { Field } from 'redux-form';
import DateSelect from './DateSelect';


class HolidaysField extends Component {

  removeField = () => {
    this.props.removeField(this.props.index);
  }

  render() {
    const { name } = this.props.fields;

    return (
      <div className="controls-row">
        <div>
          <button onClick={this.removeField} className="calendar__button-delete-field" type="button" >
            <i className="fas fa-times" />
          </button>
        </div>
        <div className="conrols__selects-wrap">
          <Field component={DateSelect} name={`${name}.0.date`}/>
        </div>
      </div>
    );
  }

}

export default HolidaysField;
