import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewProp } from '../../../redux/actions/crudsActions';
import PageHeading from '../../partials/MainContainer/PageHeading';
import FacetOptionsEditForm from '../../containers/FacetOptionsEditForm';

import { withRouter } from "react-router-dom";

class FacetOptionsNew extends Component {

  createNewViewingTime = () => {
    this.props.createNewProp('facetOptions')
      .then(res => {
        if( !res.error ) {
          this.props.history.push('/admin/facetOptions/');
        } else {
          try {
            console.warn(res.error.response.data);
          } catch(e) {
            console.warn(e);
          }
        }
      })
  }

  render() {
    const {
      formTemplateValues,
    } = this.props.facetOptions;

    return (
      <div>
        <PageHeading title="FacetOptions" descr="Create New" />
        <FacetOptionsEditForm
            handleSubmit={this.createNewViewingTime}
            initialValues={formTemplateValues}
            buttonText='Create'
          />
      </div>
    );
  }

}

export default withRouter(
  connect(
    state => ({
      facetOptions: state.facetOptions
    }), { createNewProp }
)(FacetOptionsNew));
