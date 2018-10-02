import React, { Component } from 'react';

class SelectField extends Component {

  render() {
    const { values, title, labelClass, fieldClass, selectClass } = this.props;
    const addLabelClass = labelClass || '';
    const addFieldClass = fieldClass || '';
    const addSelectClass = selectClass || '';
    // debugger

    return (
      <div className={`form-field ${addFieldClass}`}>
        <label className={`form-field__label ${addLabelClass}`}>
          {title}
        </label>
        <select className={`form-field__select ${addSelectClass}`}>
          {values.map(value => (
            <option key={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    );
  }

}

export { SelectField };
