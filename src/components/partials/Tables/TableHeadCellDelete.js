import React, { Component } from 'react';

class TableHeadCellDelete extends Component {

  render() {
    const addedClassName = this.props.addedClass || '';

    return (
      <th className={`table-head__cell table__cell-delete ${addedClassName}`}>
        Delete
      </th>
    );
  }

}

export default TableHeadCellDelete;
