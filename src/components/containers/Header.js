import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { logOutRequest } from '../../redux/actions/login';
import { toggleSidebar, toggleProfileMenu } from '../../redux/actions/UI'

import HeaderProfile from '../partials/Header/HeaderProfile.jsx';
import HeaderButton from '../partials/Header/HeaderButton.jsx';
import '../partials/Header/Header.css';

class Header extends Component {

  logOut = e => {
    this.props.logOutRequest();
  }

  toggleSidebar = e => {
    this.props.toggleSidebar();
  }

  toggleProfileMenu = e => {
    this.props.toggleProfileMenu();
  }

  render() {
    const menuVisibility = this.props.ui.header.isMenuVisible ? 'open' : '';

    return (
      <div className="header__inner">
        <Link to='/' className="header-logo-link">
          FlatSnapp
        </Link>
        <HeaderButton clickHandler={this.toggleSidebar}>
          <i className="fas fa-bars header__toggle-sidebar-icon" />
        </HeaderButton>
        <HeaderProfile
          toggleProfileMenu={this.toggleProfileMenu}
          logOut={this.logOut}
          menuVisibility={menuVisibility}
        />
      </div>
    );
  }

}

export default connect(
  state => ({
    ui: state.ui
  }), { logOutRequest, toggleSidebar, toggleProfileMenu }
)(Header);
