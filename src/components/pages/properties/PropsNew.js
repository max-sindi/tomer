import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewProp } from '../../../redux/actions/crudsActions';
import PageHeading from '../../partials/MainContainer/PageHeading';
import PropEditForm from '../../containers/PropEditForm';

import { withRouter } from "react-router-dom";

class PropsNew extends Component {

  createProp = () => {
    this.props.createNewProp('properties')
      .then(res => {
        if( !res.error ) {
          this.props.history.push('/admin/properties/');
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
      listingTypeDefault,
      formTemplateValues,
      furnishedDefault,
      sourceTypeDefault
    } = this.props.properties;

    return (
      <div>
        <PageHeading title="Properties" descr="Create New" />
        <PropEditForm
          onSubmit={this.createProp}
          initialValues={formTemplateValues}
          listingTypeValues={listingTypeDefault}
          furnished={furnishedDefault}
          sourceType={sourceTypeDefault}
        />
      </div>
    );
  }

}

export default withRouter(connect(
  state => ({
    properties: state.properties
  }), { createNewProp }
)(PropsNew));
