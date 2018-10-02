import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TableCellEdit extends Component {

  render() {
    const { id, part } = this.props;

    return (
      <td className="table__cell-edit table__cell">
        <Link to={`/admin/${part}/${id}/edit`} className="edit-cell-button">
          <i className="fas fa-pencil-alt" />
        </Link>
      </td>
    );
  }

}

export default TableCellEdit;
