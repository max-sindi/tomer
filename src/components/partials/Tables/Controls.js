import React, { Component } from 'react';
import SelectPagination from './SelectPagination';
import SearchPagination from './SearchPagination';
import Pagination from './Pagination';
import { connect } from 'react-redux';

import { changeListing, changeFilter } from '../../../redux/actions/controls';

class Controls extends Component {

  changeListing = (e) => {
    const value = e.target.value;
    this.props.changeListing(value);
  }

  changeFilter = (e) => {
    const value = e.target.value;
    this.props.changeFilter(value);
  }

  componentWillUpdate = () => {
    this.props.getProps();
  }

  render() {
    const { count, controls } = this.props;
    const { listing } = controls;
    return (
      <div>
        <div className="pagintaion__wrap">
          <select className="pagination__select" onChange={this.changeListing} value={listing}>
            <option value={'10'}>10</option>
            <option value={'20'}>20</option>
            <option value={'50'}>50</option>
            <option value={'100'}>100</option>
          </select>
          <div>
            <input type="search" className="pagination__search" placeholder="Search" onChange={this.changeFilter} />
          </div>
          {/* <Pagination count={count} perList={listing} /> */}
          dsadas
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
