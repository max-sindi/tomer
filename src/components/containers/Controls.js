import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaginFilter from './PaginFilter';
import Pagination from './Pagination';
import { changeListing, changeFilter } from '../../redux/actions/controls';

class Controls extends Component {

  changeListing = (value) => {
    this.props.changeListing(value);
  }

  changeFilter = (value) => {
    this.props.changeFilter(value);
  }
  //
  // componentWillUnmount = () => {
  //   this.props.resetPage();
  // }

  render() {
    const { pagination, controls, changePage, buttons, count } = this.props;
    const { listing, currentPage } = controls;

    return (
      <div>
        <div className="pagintaion__wrap">
          <PaginFilter
            onChange={this.changeListing}
            value={listing}
            getProps={this.props.getProps}
            changeFilter={this.changeFilter}
            changeListing={this.changeListing}
            currentPage={controls.currentPage}
          />
          <Pagination
            pagination={pagination}
            changePage={changePage}
            getProps={this.props.getProps}
            buttons={buttons}
            count={false}
          />
        </div>
      </div>
    );
  }

}

export default connect(
  state => ({
    controls: state.controls
  }), { changeListing, changeFilter }
)(Controls);
