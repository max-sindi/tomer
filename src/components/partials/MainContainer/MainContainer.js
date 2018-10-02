import React from 'react';
import './MainContainer.css';

const MainContainer = ({isSidebarVisible, children}) => {
  const isVisible = isSidebarVisible ? '' : 'full-width';

  return (
    <div className={`main-container ${isVisible}`}>
      <div className='main-container__inner'>
        {children}
      </div>
    </div>)
};

export default MainContainer;
