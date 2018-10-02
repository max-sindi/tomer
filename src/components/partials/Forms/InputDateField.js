import React, { Component } from 'react';
import Label from './Label';
import ValidationError from './ValidationError';

class InputDateField extends Component {

  componentWillUpdate = () => {
    const { error, active, submitFailed } = this.props.meta;

    if( error && !active && submitFailed ) {
      this.inputDom.focus();
    }
  }

  setInputRef = el => {
    this.inputDom = el;
  }

  render() {
    const { label, input, id='', meta: { error, submitFailed }} = this.props;
    const requiredClass = (error && submitFailed) ? 'required' : '';

    return (
      <div className="form__input-number-wrap form__input-wrap">
        {label && <Label htmlFor={id} label={label} /> }
        <input className={`form__input-date ${requiredClass}`} type="date" {...input} ref={this.setInputRef}/>
        {submitFailed && error && <ValidationError error={error} />}
      </div>
    );
  }

}

export default InputDateField;
