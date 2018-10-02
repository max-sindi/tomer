import React, { Component } from 'react';

class SelectPagination extends Component {
  //
  change = () => {
    this.props.paginationChange()
  }

  render() {
    const {input} = this.props;

    return (
      <div>
        <select {...input} className="pagination__select">
          <option value={'10'}>10</option>
          <option value={'20'}>20</option>
          <option value={'50'}>50</option>
          <option value={'100'}>100</option>
        </select>
      </div>
    );
  }

}

export default SelectPagination;
