import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TableCellDelete extends Component {

  deleteHandler = () => {
    this.props.deleteProperty(this.props.id);
  }

  render() {
    return (
      <td className="table__cell-edit table__cell">
        <Link to="#" className="delete-cell-button" onClick={this.deleteHandler}>
          <i className="fas fa-times" />
        </Link>
      </td>
    );
  }

}

export default TableCellDelete;
