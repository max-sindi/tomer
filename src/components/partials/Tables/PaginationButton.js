import React, { Component } from 'react';

class PaginationButton extends Component {

  render() {
    const { disabled, control, children } = this.props;

    return (
        <button
          className={`
            pagination__list-button
            ${control ? 'pagination__list-button--crement' : ''}
            ${disabled ? 'disabled' : ''}`
          }

          disabled={disabled}
          type='button'
        >
          {children}
        </button>
    );
  }

}

export default PaginationButton;
