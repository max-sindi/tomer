import React, { Component } from 'react';

class TableHeadCellWithoutControls extends Component {

  render() {
    const { text, addedClass } = this.props;

    return (
      <th className={`table-head__cell ${addedClass || ''}`} >
        {text}
      </th>
    );
  }

}

export default TableHeadCellWithoutControls;
