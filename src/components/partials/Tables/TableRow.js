import React, { Component } from 'react';

class TableRow extends Component {

  render() {
    return (
      <tr className="table-row">
        {this.props.children}
      </tr>
    );
  }

}

export default TableRow;
