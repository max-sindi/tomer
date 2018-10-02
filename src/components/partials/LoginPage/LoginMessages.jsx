import React from 'react';
import PropTypes from 'prop-types';
import {Message} from 'semantic-ui-react';

const LoginMessage = ({message}) => (
  <Message className="messages" hidden={!message} color='red'>
    {message}
  </Message>
);

LoginMessage.propTypes = {
  message: PropTypes.string
};

export default LoginMessage;
