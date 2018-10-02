import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewProp } from '../../../redux/actions/crudsActions';
import PageHeading from '../../partials/MainContainer/PageHeading';
import TagOptionsEditForm from '../../containers/TagOptionsEditForm';

import { withRouter } from "react-router-dom";

class TagOptionsNew extends Component {

  createNewViewingTime = () => {
    this.props.createNewProp('tagOptions')
      .then(res => {
        if( !res.error ) {
          this.props.history.push('/admin/tagOptions/');
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
    } = this.props.tagOptions;

    return (
      <div>
        <PageHeading title="TagOptions" descr="Create New" />
        <TagOptionsEditForm
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
      tagOptions: state.tagOptions
    }), { createNewProp }
)(TagOptionsNew));
