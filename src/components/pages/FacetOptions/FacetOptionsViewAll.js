import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewAllPage from '../../containers/ViewAllPage';

class FacetOptionsViewAll extends Component {

  render() {
    const { facetOptions } = this.props;

    return (
      <ViewAllPage
        field='facetOptions'
        countField="facet_options"
        entity={facetOptions}
        tableCellClass='facet-options-table-cell'
      />
    );
  }

}

export default connect(
  state => ({
    facetOptions: state.facetOptions,
  })
)(FacetOptionsViewAll);
