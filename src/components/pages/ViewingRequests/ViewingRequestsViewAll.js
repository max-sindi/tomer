import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewAllPage from '../../containers/ViewAllPage';

class ViewingRequestsViewAll extends Component {

  render() {
    const { viewingRequests } = this.props;

    return (
      <ViewAllPage
        field='viewingRequests'
        countField="viewing_requests"
        entity={viewingRequests}
        tableCellClass='viewing-requests-table-cell'
      />
    );
  }

}

export default connect(
  state => ({
    viewingRequests: state.viewingRequests,
  })
)(ViewingRequestsViewAll);
