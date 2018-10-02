import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        {this.props.children}
      </form>
    );
  }

}

export default Form;
