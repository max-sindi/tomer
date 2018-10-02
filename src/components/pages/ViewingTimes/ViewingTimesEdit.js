import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleProp, stopEditingProp, putPropChanges, getLastRequest } from '../../../redux/actions/crudsActions';
import { Loader } from 'semantic-ui-react';
import PageHeading from '../../partials/MainContainer/PageHeading';
import ViewingTimesEditForm from '../../containers/ViewingTimesEditForm';

class ViewingTimesEdit extends Component {

  componentWillMount = () => {
    const id =  this.props.match.params.id;
    this.props.getSingleProp(id, 'viewingTimes');
  }

  componentWillUnmount = () => {
    this.props.stopEditingProp('viewingTimes');
    this.props.getLastRequest();
  }

  putChanges = e => {
    this.props.putPropChanges('viewingTimes')
      .then(res => {
        if( !res.error) {
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
      } = this.props.viewingTimes;

    if(!currentProp) {
      return <Loader active />
    }

    return (
      <React.Fragment>
        <PageHeading title="ViewingTimes" descr={`Edit ${id}`} />
        <ViewingTimesEditForm
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
    viewingTimes: state.viewingTimes
  }), { getSingleProp, stopEditingProp, putPropChanges, getLastRequest }
)(ViewingTimesEdit);
