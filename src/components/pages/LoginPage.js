import React from 'react'
import { connect } from 'react-redux';
import { tryLogin } from '../../redux/actions/login';

import LoginForm from '../partials/LoginPage/LoginForm';
import LoginMessages from '../partials/LoginPage/LoginMessages.jsx';
import { Container, Image } from 'semantic-ui-react';
import logo from '../../assets/img/flatsnapp-logo.png';
import '../partials/LoginPage/index.css';

 class LoginPage extends React.Component {
  handleSubmit = e => {
    this.props.tryLogin();
  }

  render() {
    return (
      <Container>
        <div className="login__wrap">
          <div className="login__logo-wrap">
            <Image src={logo} alt="logo" />
          </div>
          <LoginForm onSubmit={this.handleSubmit} />
          <LoginMessages message={this.props.loginMessage} />
        </div>
      </Container>

    )
  }
}

export default connect(
  state => ({
    login: state.form.login,
    loginMessage: state.login.message
  }), { tryLogin }
)(LoginPage);
