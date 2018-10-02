import React, { Component } from 'react';
import Label from './Label';
import ValidationError from './ValidationError';

class InputTextField extends Component {
  constructor(props) {
    super(props);

  }

  componentWillUpdate = () => {
    const { error, active, submitFailed } = this.props.meta;

    if( error && !active ) {
      this.inputDom.focus();
    }
  }

  setInputRef = el => {
    this.inputDom = el;
  }

  render() {
    const { label, input, meta, type, meta: { error, submitFailed }, addedClassName} = this.props;
    const requiredClass = (error && submitFailed) ? 'required' : '';

    return (
      <div className="form__input-text-wrap  form__input-wrap">
        {label && <Label meta={meta} label={label} />}
        <input
          className={`form__input-text ${requiredClass} ${addedClassName || ''}`}
          type={type} {...input}
          ref={this.setInputRef}
          autoComplete="off"
        />
        {error && <ValidationError error={error}/>}
      </div>
    );
  }
}

export default InputTextField;
