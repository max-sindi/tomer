import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleProp, stopEditingProp, putPropChanges, getLastRequest } from '../../../redux/actions/crudsActions';
import { Loader } from 'semantic-ui-react';
import PageHeading from '../../partials/MainContainer/PageHeading';
import ViewingRequestsEditForm from '../../containers/ViewingRequestsEditForm';

class ViewingRequestsEdit extends Component {

  componentWillMount = () => {
    const id =  this.props.match.params.id;
    this.props.getSingleProp(id, 'viewingRequests');
  }

  componentWillUnmount = () => {
    this.props.stopEditingProp('viewingRequests');
    this.props.getLastRequest();
  }

  putChanges = e => {
    this.props.putPropChanges('viewingRequests')
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
        currentProp: viewingRequest,
        initialValues,
      } = this.props.viewingRequests;

    if(!viewingRequest) {
      return <Loader active />
    }

    return (
      <React.Fragment>
        <PageHeading title="ViewingRequests" descr={`Edit ${id}`} />
        <ViewingRequestsEditForm
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
    viewingRequests: state.viewingRequests
  }), { getSingleProp, stopEditingProp, putPropChanges, getLastRequest }
)(ViewingRequestsEdit);
