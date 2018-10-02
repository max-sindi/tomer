import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewProp } from '../../../redux/actions/crudsActions';
import PageHeading from '../../partials/MainContainer/PageHeading';
import UsersEditForm from '../../containers/UsersEditForm';

import { withRouter } from "react-router-dom";

class UsersNew extends Component {

  createNewViewingTime = () => {
    this.props.createNewProp('users')
      .then(res => {
        if(!res.error) {
          this.props.history.push('/admin/users/');
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
    } = this.props.users;

    return (
      <div>
        <PageHeading title="Users" descr="Create New" />
        <UsersEditForm
          handleSubmit={this.createNewViewingTime}
          initialValues={formTemplateValues}
          buttonText='Create'
          isEdit={false}
        />
      </div>
    );
  }

}

export default withRouter(
  connect(
    state => ({
      users: state.users
    }), { createNewProp }
)(UsersNew));
