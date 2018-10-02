import React, { Component } from 'react';

class ValidationError extends Component {

  render() {
    const { error } = this.props;

    return (
      <span className="form__input-message">{error}</span>
    );
  }

}

export default ValidationError;
