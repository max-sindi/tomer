import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewAllPage from '../../containers/ViewAllPage';

class AgentsViewAll extends Component {

  render() {
    const { agents } = this.props;

    return (
      <ViewAllPage
        field='agents'
        countField="agents"
        entity={agents}
        tableCellClass='agents-table-cell'
      />
    );
  }

}

export default connect(
  state => ({
    agents: state.agents,
  })
)(AgentsViewAll);
