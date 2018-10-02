import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleProp, stopEditingProp, putPropChanges, getLastRequest } from '../../../redux/actions/crudsActions';
import { Loader } from 'semantic-ui-react';
import PageHeading from '../../partials/MainContainer/PageHeading';
import LandlordsEditForm from '../../containers/LandlordsEditForm';

class LandlordsEdit extends Component {

  componentWillMount = () => {
    const id =  this.props.match.params.id;
    this.props.getSingleProp(id, 'landlords');
  }

  componentWillUnmount = () => {
    this.props.stopEditingProp('landlords');
    this.props.getLastRequest();
  }

  putChanges = e => {
    this.props.putPropChanges('landlords')
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
      } = this.props.landlords;

    if(!currentProp) {
      return <Loader active />
    }

    return (
      <React.Fragment>
        <PageHeading title="Landlords" descr={`Edit ${id}`} />
        <LandlordsEditForm
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
    landlords: state.landlords
  }), { getSingleProp, stopEditingProp, putPropChanges, getLastRequest }
)(LandlordsEdit);
