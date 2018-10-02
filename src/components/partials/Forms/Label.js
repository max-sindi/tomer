import React, { Component } from 'react';

class Label extends Component {

  render() {
    const { label, addedClassName, meta, htmlFor='' } = this.props;
    const addedClass = addedClassName || '';

    // meta from redux-form, for validation error tracing
    if(!meta) {
      return (
        <label htmlFor={htmlFor} className={`form__label ${addedClass}`}>{label}</label>
      );
    }

    const { error, submitFailed  } = meta;
    const requiredClass = (error && submitFailed) ? 'required' : '';

    return (
      <label htmlFor={htmlFor} className={`form__label ${addedClass} ${requiredClass}`}>{label}</label>
    );
  }

}

export default Label;
