import React, { Component } from 'react';

class FormBlock extends Component {

  render() {
    const {children, title} = this.props;

    return (
      <div className="form__block">
        <div className="form__block-heading">
          <h3 className="form__block-title">
            {title}
          </h3>
        </div>
        <div className="form__block-content">
          {children}
        </div>
      </div>
    );
  }

}

export default FormBlock;
