import React, { Component } from 'react';
import * as Table from '../Tables/index';

class TableDataHeading extends Component {

  render() {
    const { data, children } = this.props;

    return (
      <thead className="table-head table-row">
        <tr>
          {children}
        </tr>
      </thead>
    );
  }

}

export default TableDataHeading;
