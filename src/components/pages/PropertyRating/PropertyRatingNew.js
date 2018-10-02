import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewProp } from '../../../redux/actions/crudsActions';
import PageHeading from '../../partials/MainContainer/PageHeading';
import PropertyRatingEditForm from '../../containers/PropertyRatingEditForm';

import { withRouter } from "react-router-dom";

class PropertyRatingNew extends Component {

  createNewViewingTime = () => {
    this.props.createNewProp('propertyRating')
      .then(res => {
        if( !res.error ) {
          this.props.history.push('/admin/propertyRating/');
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
    } = this.props.propertyRating;

    return (
      <div>
        <PageHeading title="PropertyRatings" descr="Create New" />
        <PropertyRatingEditForm
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
      propertyRating: state.propertyRating
    }), { createNewProp }
)(PropertyRatingNew));
