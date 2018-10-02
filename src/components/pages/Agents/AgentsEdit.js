import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleProp, stopEditingProp, putPropChanges, getLastRequest } from '../../../redux/actions/crudsActions';
import { Loader } from 'semantic-ui-react';
import PageHeading from '../../partials/MainContainer/PageHeading';
import AgentsEditForm from '../../containers/AgentsEditForm';

class AgentsEdit extends Component {

  componentWillMount = () => {
    const id = this.props.match.params.id;
    this.props.getSingleProp(id, 'agents');
  }

  componentWillUnmount = () => {
    this.props.stopEditingProp('agents');
    this.props.getLastRequest();
  }

  putChanges = e => {
    this.props.putPropChanges('agents')
      .then(res => {
        if( !res.error ) {
          this.props.history.goBack();
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
    const id =  this.props.match.params.id;
    const {
        currentProp: agent,
        initialValues,
      } = this.props.agents;

    if(!agent) {
      return <Loader active />
    }

    return (
      <React.Fragment>
        <PageHeading title="Agents" descr={`Edit ${id}`} />
        <AgentsEditForm
          onSubmit={this.putChanges}
          initialValues={initialValues}
          buttonText='Update'
        />
      </React.Fragment>
    );
  }

}

export default connect(
  state => ({
    agents: state.agents
  }), { getSingleProp, stopEditingProp, putPropChanges, getLastRequest }
)(AgentsEdit);
