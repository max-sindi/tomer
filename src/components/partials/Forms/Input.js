import React, { Component } from 'react';

class Input extends Component {


  render() {
    const { input, requiredClass } = this.props;

    return (
      <input className={`form__input-text ${requiredClass || ''}`} type="text" {...input} autoComplete="off"/>
    );
  }

}

export default Input;
