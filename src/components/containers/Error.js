import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeError } from '../../redux/actions/UI';

import { Message, Button } from 'semantic-ui-react';
import '../partials/Error/Error.css';

class Error extends Component {

  componentWillUpdate = () => {
    console.warn('error updated');
    const timer = setTimeout( () => {
      const { message: msg } = this.props.error;

      if(!msg) {
        clearTimeout(timer);
      } else {
        this.removeError();
      }

    }, 5000)
  }

  handleClick = () => {
    console.warn('error buitton');
    this.removeError();
  }

  removeError = () => {
    this.props.removeError();
  }

  render() {
    const {message} = this.props.error;

    if(!message) {
      return null;
    } else {
        return (
          <Message className="error">
            <span className="error__message">
              {message}
            </span>
            <Button
              onClick={this.handleClick}
              size='mini'
              className="error__button"
            >
              OK
            </Button>
          </Message>
        );
    }

  }

}

export default connect(
  state => ({
    error: state.error
  }), { removeError }
)(Error);
