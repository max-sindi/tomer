import React, { Component } from 'react';

class SearchPagination extends Component {

  render() {
    const {input} = this.props;

    return (
      <div>
        <input type="search" {...input} className="pagination__search" placeholder="Search"/>
      </div>
    );
  }

}

export default SearchPagination;
