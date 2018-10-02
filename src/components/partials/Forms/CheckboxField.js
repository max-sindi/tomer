import React, { Component } from 'react';
import Label from './Label'

class CheckboxField extends Component {

  render() {
    const { label, input, id } = this.props;

    return (
      <div className="form__checkbox-wrap">
        <input type="checkbox" className="form__input-checkbox" {...input} id={id} />
        {label && <Label htmlFor={id} label={label} />}
      </div>
    );
  }

}

export default CheckboxField;
