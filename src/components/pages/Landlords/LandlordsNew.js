import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewProp } from '../../../redux/actions/crudsActions';
import PageHeading from '../../partials/MainContainer/PageHeading';
import LandlordsEditForm from '../../containers/LandlordsEditForm';

import { withRouter } from "react-router-dom";

class LandlordsNew extends Component {

  createNewViewingTime = () => {
    this.props.createNewProp('landlords')
      .then(res => {
        if( !res.error ) {
          this.props.history.push('/admin/landlords/');
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
    } = this.props.landlords;

    return (
      <div>
        <PageHeading title="Landlords" descr="Create New" />
        <LandlordsEditForm
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
      landlords: state.landlords
    }), { createNewProp }
)(LandlordsNew));
