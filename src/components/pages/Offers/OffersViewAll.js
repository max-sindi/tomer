import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewAllPage from '../../containers/ViewAllPage';

class OffersViewAll extends Component {

  render() {
    const { offers } = this.props;

    return (
      <ViewAllPage
        field='offers'
        countField="offer"
        entity={offers}
        tableCellClass='offers-table-cell'
      />
    );
  }

}

export default connect(
  state => ({
    offers: state.offers,
  })
)(OffersViewAll);
