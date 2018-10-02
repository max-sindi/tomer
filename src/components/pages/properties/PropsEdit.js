import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleProp, stopEditingProp, putPropChanges, getLastRequest } from '../../../redux/actions/crudsActions';
import { Loader } from 'semantic-ui-react';
import PageHeading from '../../partials/MainContainer/PageHeading';
import PropEditForm from '../../containers/PropEditForm';

class PropEdit extends Component {

  componentWillMount = () => {
    const id =  this.props.match.params.id;
    this.props.getSingleProp(id, 'properties');
  }

  componentWillUnmount = () => {
    this.props.stopEditingProp('properties');
    this.props.getLastRequest();
  }

  putChanges = e => {
    this.props.putPropChanges('properties')
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
        currentProp: prop,
        listingTypeDefault,
        initialValues,
        listingTypeCurrent,
        furnishedCurrent,
        furnishedDefault,
        sourceTypeDefault
      } = this.props.properties;

    if(!prop) {
      return <Loader active />
    }

    return (
      <React.Fragment>
        <PageHeading title="Properties" descr={`Edit ${id}`} />
        <PropEditForm
          onSubmit={this.putChanges}
          initialValues={initialValues}
          listingTypeValues={listingTypeDefault}
          furnished={furnishedDefault}
          sourceType={sourceTypeDefault}
        />
      </React.Fragment>
    );
  }

}

export default connect(
  state => ({
    properties: state.properties
  }), { getSingleProp, stopEditingProp, putPropChanges, getLastRequest }
)(PropEdit);
