import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewProp } from '../../../redux/actions/crudsActions';
import PageHeading from '../../partials/MainContainer/PageHeading';
import ViewingTimesEditForm from '../../containers/ViewingTimesEditForm';

import { withRouter } from "react-router-dom";

class ViewingTimesNew extends Component {

  createNewViewingTime = () => {
    this.props.createNewProp('viewingTimes')
      .then(res => {
        if( !res.error ) {
          this.props.history.push('/admin/viewingTimes/');
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
    } = this.props.viewingTimes;

    return (
      <div>
        <PageHeading title="ViewingTimes" descr="Create New" />
        <ViewingTimesEditForm
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
      viewingTimes: state.viewingTimes
    }), { createNewProp }
)(ViewingTimesNew));
