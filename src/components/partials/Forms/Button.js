import React, { Component } from 'react';

class Button extends Component {

  render() {
    const { children, disabled } = this.props;

    return (
      <button type="submit" className="form-button" disabled={disabled}>
        {children}
      </button>
    );
  }

}

export default Button;
