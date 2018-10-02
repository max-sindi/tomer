import React, { Component } from 'react';

class DashInput extends Component {

  render() {
    const { label, input, type, id } = this.props;

    return (
      <div className="dash__input">
        <label htmlFor={id}>{label}</label>
        <input id={id} type={type} {...input} />
      </div>
    );
  }

}

export default DashInput;
