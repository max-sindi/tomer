import React, { Component } from 'react';

class DashCheckbox extends Component {

  render() {
    const { label, input, type, id } = this.props;

    return (
      <div className="dash__checkbox-wrap">
        <label htmlFor={id} className="dash__checkbox-label" >{label}</label>
        <input id={id} type={type} {...input} />
      </div>
    );
  }

}

export default DashCheckbox;
