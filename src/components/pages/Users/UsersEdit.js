import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleProp, stopEditingProp, putPropChanges, getLastRequest } from '../../../redux/actions/crudsActions';
import { Loader } from 'semantic-ui-react';
import PageHeading from '../../partials/MainContainer/PageHeading';
import UsersEditForm from '../../containers/UsersEditForm';

class UsersEdit extends Component {

  componentWillMount = () => {
    const id =  this.props.match.params.id;
    this.props.getSingleProp(id, 'users');
  }

  componentWillUnmount = () => {
    this.props.stopEditingProp('users');
    this.props.getLastRequest();
  }

  putChanges = e => {
    this.props.putPropChanges('users')
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
      } = this.props.users;

    if(!currentProp) {
      return <Loader active />
    }

    return (
      <React.Fragment>
        <PageHeading title="Users" descr={`Edit ${id}`} />
        <UsersEditForm
          onSubmit={this.putChanges}
          initialValues={initialValues}
          buttonText='Update'
          isEdit={true}
        />
      </React.Fragment>
    );
  }

}

export default connect(
  state => ({
    users: state.users
  }), { getSingleProp, stopEditingProp, putPropChanges, getLastRequest }
)(UsersEdit);
