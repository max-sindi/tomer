import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewAllPage from '../../containers/ViewAllPage';

class PropsViewAll extends Component {

  render() {
    const { properties } = this.props;

    return (
      <ViewAllPage
        field='properties'
        countField="properties"
        entity={properties}
        tableCellClass='props-table-cell'
      />
    );
  }

}

export default connect(
  state => ({
    properties: state.properties,
  })
)(PropsViewAll);
