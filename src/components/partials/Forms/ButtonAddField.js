import React, { Component } from 'react';

class ButtonAddField extends Component {

  render() {
    return (
      <button className="form-button-reset add-field__button" onClick={this.props.addField} type="button">
        <i className="fas fa-plus" />
      </button>
    );
  }

}

export default ButtonAddField;
