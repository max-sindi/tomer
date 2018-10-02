import React, { Component } from 'react';
import Label from './Label';
import ValidationError from './ValidationError';
import FileBase64 from 'react-file-base64';
import { Field } from 'redux-form';

class InputTextField extends Component {

  constructor() {
    super();
    this.state = {
      dragActive: false,
    }
  }

  componentWillUpdate = () => {
    const { error, active, submitFailed } = this.props.meta;

    if( error && !active && submitFailed ) {
      this.inputDom.focus();
    }
  }

  setInputRef = el => {
    this.inputDom = el;
  }

  getFiles = (e) => {
    this.setState(prevState => ({dragActive: false}));
    this.props.sendImage(e, {form: this.props.meta.form, field: this.props.input.name, value: e.name, url: e.base64});
  }

  activateDnd = e => {
    e.preventDefault();
    this.setState(prevState => ({dragActive: true}));
  }

  render() {
    const {
      label,
      input,
      meta,
      type,
      meta: { error, submitFailed },
      addedClassName,
      activeDnd,
    } = this.props;

    const requiredClass = (error && submitFailed) ? 'required' : '';
    const isDndActiveClass = this.state.dragActive ? 'drag-active' : '';

    return (
      <div className={`form__input-text-wrap  form__input-wrap dnd-field-wrap ${isDndActiveClass}`}>
        {label && <Label meta={meta} label={label} />}
        <input
          className={`form__input-text ${requiredClass} ${addedClassName || ''}`}
          type={type} {...input} ref={this.setInputRef}
          autoComplete="off"
          onDragOver={this.activateDnd}
          draggable='true'
        />
      {/* <Field component={FileBase64} name={`${input.name}-image`} onDone={this.getFiles}/> */}
        <FileBase64
          onDone={ this.getFiles }
        />
        {error && <ValidationError error={error}/>}
      </div>
    );
  }
}

export default InputTextField;
