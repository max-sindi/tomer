import React, { Component } from 'react';

class TableDataContent extends Component {

  render() {
    return (
      <tbody className="table-body">
        {this.props.children}
      </tbody>
    );
  }

}

export default TableDataContent;
