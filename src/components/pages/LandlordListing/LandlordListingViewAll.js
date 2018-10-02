import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewAllPage from '../../containers/ViewAllPage';

class LandlordListingViewAll extends Component {

  render() {
    const { landlordListing } = this.props;

    return (
      <ViewAllPage
        field='landlordListing'
        countField="landlordListing"
        entity={landlordListing}
        tableCellClass='landlord-listing-table-cell'
      />
    );
  }

}

export default connect(
  state => ({
    landlordListing: state.landlordListing,
  })
)(LandlordListingViewAll);
