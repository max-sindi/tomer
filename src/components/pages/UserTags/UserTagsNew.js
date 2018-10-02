import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewProp } from '../../../redux/actions/crudsActions';
import PageHeading from '../../partials/MainContainer/PageHeading';
import UserTagsEditForm from '../../containers/UserTagsEditForm';

import { withRouter } from "react-router-dom";

class UserTagsNew extends Component {

  createNewUserTag = () => {
    this.props.createNewProp('userEvents')
      .then(res => {
        if( !res.error ) {
          this.props.history.push('/admin/userEvents/');
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
    } = this.props.userEvents;

    return (
      <div>
        <PageHeading title="UserEvents" descr="Create New" />
        <UserTagsEditForm
            handleSubmit={this.createNewUserTag}
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
      userEvents: state.userEvents
    }), { createNewProp }
)(UserTagsNew));
