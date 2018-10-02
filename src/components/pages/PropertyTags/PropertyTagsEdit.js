import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleProp, stopEditingProp, putPropChanges, getLastRequest } from '../../../redux/actions/crudsActions';
import { Loader } from 'semantic-ui-react';
import PageHeading from '../../partials/MainContainer/PageHeading';
import PropertyTagsEditForm from '../../containers/PropertyTagsEditForm';

class PropertyTagsEdit extends Component {

  componentWillMount = () => {
    const id =  this.props.match.params.id;
    this.props.getSingleProp(id, 'propertyTags');
  }

  componentWillUnmount = () => {
    this.props.stopEditingProp('propertyTags');
    this.props.getLastRequest();
  }

  putChanges = e => {
    this.props.putPropChanges('propertyTags')
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
      } = this.props.propertyTags;

    if(!currentProp) {
      return <Loader active />
    }

    return (
      <React.Fragment>
        <PageHeading title="PropertyTags" descr={`Edit ${id}`} />
      <PropertyTagsEditForm
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
    propertyTags: state.propertyTags
  }), { getSingleProp, stopEditingProp, putPropChanges, getLastRequest }
)(PropertyTagsEdit);
