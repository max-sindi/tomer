import React, { Component } from 'react';

class ButtonAddField extends Component {

  addField = () => {
    this.props.addField();
  }

  render() {
    return (
      <button onClick={this.addField} className="calendar__button-add-field" type="button">
        <i className="fas fa-plus" />
      </button>
    );
  }

}

export default ButtonAddField;
