import React, { Component } from 'react';

class TableHeadCellEdit extends Component {

  render() {
    const addedClassName = this.props.addedClass || '';

    return (
      <th className={`table-head__cell table__cell-edit ${addedClassName}`}>
        Edit
      </th>
    );
  }

}

export default TableHeadCellEdit;
