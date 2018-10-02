import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewProp } from '../../../redux/actions/crudsActions';
import PageHeading from '../../partials/MainContainer/PageHeading';
import AgentsEditForm from '../../containers/AgentsEditForm';

import { withRouter } from "react-router-dom";

class AgentsNew extends Component {

  createNewProp = () => {
    this.props.createNewProp('agents')
      .then(res => {
        if( !res.error ) {
          this.props.history.push('/admin/agents/');
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
    } = this.props.agents;

    return (
      <div>
        <PageHeading title="Agents" descr="Create New" />
        <AgentsEditForm
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
      agents: state.agents
    }), { createNewProp }
)(AgentsNew));
