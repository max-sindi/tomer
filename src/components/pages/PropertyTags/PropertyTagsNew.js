import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewProp } from '../../../redux/actions/crudsActions';
import PageHeading from '../../partials/MainContainer/PageHeading';
import PropertyTagsEditForm from '../../containers/PropertyTagsEditForm';

import { withRouter } from "react-router-dom";

class PropertyTagsNew extends Component {

  createNewViewingTime = () => {
    this.props.createNewProp('propertyTags')
      .then(res => {
        if( !res.error ) {
          this.props.history.push('/admin/propertyTags/');
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
    } = this.props.propertyTags;

    return (
      <div>
        <PageHeading title="PropertyTags" descr="Create New" />
        <PropertyTagsEditForm
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
      propertyTags: state.propertyTags
    }), { createNewProp }
)(PropertyTagsNew));
