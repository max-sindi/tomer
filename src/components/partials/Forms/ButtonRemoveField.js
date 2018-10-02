import React, { Component } from 'react';

class ButtonRemoveField extends Component {

  removeField = () => {
    this.props.removeField(this.props.index);
  }

  render() {
    return (
      <button className="form-button-reset add-field__button add-field__button-remove" type="button" onClick={this.removeField}>
        <i className="fas fa-minus" />
      </button>
    );
  }

}

export default ButtonRemoveField;
