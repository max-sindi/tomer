import React, { Component } from 'react';
import Label from './Label';
import ValidationError from './ValidationError';

class InputSelectField extends Component {

  render() {
    const { label, input, meta, meta: { error }, select: { values} } = this.props;

    return (
      <div className="form__input-wrap">
        {label && <Label meta={meta} label={label} />}

        <select {...input} >
          {values.map( value => (
            <option value={value} key={value}>{value}</option>
          ))}
        </select>

        { error && <ValidationError error={error}/>}
      </div>
    );
  }

}

export default InputSelectField;
