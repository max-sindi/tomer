import React from 'react';

const HeaderButton = ({children, clickHandler}) => (
  <button className="header-button clear-button" onClick={clickHandler}>
    {children}
  </button>
);

export default HeaderButton;
