import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaginationButton from '../partials/Tables/PaginationButton';
import Pagination from "react-js-pagination";

class Pagin extends Component {

  handlePageChange = (pageNumber) => {
    this.props.changePage(pageNumber);
    this.props.getProps();
  }

  render() {
    const { pagination, controls, buttons, count } = this.props;
    const { listing, currentPage, pagButtons } = controls;
    let counts;

    if(count === false) {
      counts = false
    } else {
      counts = pagination.count;
    }

    return (
      <div className="pagination-wrap">
        <div className="pagination-total">
          <b>Total</b> {pagination.count}
        </div>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={listing}
          totalItemsCount={pagination.count || 1000000}
          pageRangeDisplayed={buttons || pagButtons}
          onChange={this.handlePageChange}
          prevPageText='prev'
          nextPageText='next'
          firstPageText='first'
          lastPageText='last'
          activeClass='active'
          itemClass='pag-list'
          linkClass='pag-link'
          itemClassFirst='pag-controls pag-controls-first'
          itemClassPrev='pag-controls'
          itemClassNext='pag-controls'
          itemClassLast='pag-controls pag-controls-last'
        />
      </div>
    );
  }

}

export default connect(
  state => ({
    controls: state.controls,
  }), {}
)(Pagin);
