import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleProp, stopEditingProp, putPropChanges, getLastRequest } from '../../../redux/actions/crudsActions';
import { Loader } from 'semantic-ui-react';
import PageHeading from '../../partials/MainContainer/PageHeading';
import UserTagsEditForm from '../../containers/UserTagsEditForm';

class UserTagsEdit extends Component {

  componentWillMount = () => {
    const id =  this.props.match.params.id;
    this.props.getSingleProp(id, 'userEvents');
  }

  componentWillUnmount = () => {
    this.props.stopEditingProp('userEvents');
    this.props.getLastRequest();
  }

  putChanges = e => {
    this.props.putPropChanges('userEvents')
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
        currentProp,
        initialValues,
      } = this.props.userEvents;

    if(!currentProp) {
      return <Loader active />
    }

    return (
      <React.Fragment>
        <PageHeading title="UserEvents" descr={`Edit ${id}`} />
        <UserTagsEditForm
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
    userEvents: state.userEvents
  }), { getSingleProp, stopEditingProp, putPropChanges, getLastRequest }
)(UserTagsEdit);
