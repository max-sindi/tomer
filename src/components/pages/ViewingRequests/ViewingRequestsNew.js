import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewProp } from '../../../redux/actions/crudsActions';
import PageHeading from '../../partials/MainContainer/PageHeading';
import ViewingRequestsEditForm from '../../containers/ViewingRequestsEditForm';

import { withRouter } from "react-router-dom";

class ViewingRequestsNew extends Component {

  createNewProp = () => {
    this.props.createNewProp('viewingRequests')
      .then(res => {
        if( !res.error ) {
          this.props.history.push('/admin/viewingRequests/');
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
    } = this.props.viewingRequests;

    return (
      <div>
        <PageHeading title="ViewingRequests" descr="Create New" />
        <ViewingRequestsEditForm
          handleSubmit={this.createNewProp}
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
      viewingRequests: state.viewingRequests
    }), { createNewProp }
)(ViewingRequestsNew));
