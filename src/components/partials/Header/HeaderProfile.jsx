import React from 'react';
import { Link } from 'react-router-dom';
// import { Button } from 'semantic-ui-react'
import HeaderButton from './HeaderButton.jsx';

const HeaderProfile = ({logOut, toggleProfileMenu, menuVisibility}) => (
  <div className='header__profile-wrap'>
    <Link to='/admin' className="header-button">
      Home
    </Link>
    <div className="header__profile-menu">
      <HeaderButton clickHandler={toggleProfileMenu}>
          Admin <i className="fas fa-caret-down header__profile-caret-icon" />
      </HeaderButton>
      <div className={`header__profile-dropdown-wrap ${menuVisibility}`}>
        <ul className="header__profile-dropdown-list">
          <li className="header__profile-dropdown-item">
            <Link to="/" className="header__profile-dropdown-link">
              Your profile
            </Link>
          </li>
          <li className="header__profile-dropdown-item">
            <Link to="/" className="header__profile-dropdown-link" onClick={logOut}>
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default HeaderProfile;
