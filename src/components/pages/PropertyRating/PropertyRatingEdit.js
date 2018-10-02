import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleProp, stopEditingProp, putPropChanges, getLastRequest } from '../../../redux/actions/crudsActions';
import { Loader } from 'semantic-ui-react';
import PageHeading from '../../partials/MainContainer/PageHeading';
import PropertyRatingEditForm from '../../containers/PropertyRatingEditForm';

class PropertyRatingEdit extends Component {

  componentWillMount = () => {
    const id =  this.props.match.params.id;
    this.props.getSingleProp(id, 'propertyRating');
  }

  componentWillUnmount = () => {
    this.props.stopEditingProp('propertyRating');
    this.props.getLastRequest();
  }

  putChanges = e => {
    this.props.putPropChanges('propertyRating')
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
      } = this.props.propertyRating;

    if(!currentProp) {
      return <Loader active />
    }

    return (
      <React.Fragment>
        <PageHeading title="PropertyRating" descr={`Edit ${id}`} />
        <PropertyRatingEditForm
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
    propertyRating: state.propertyRating
  }), { getSingleProp, stopEditingProp, putPropChanges, getLastRequest }
)(PropertyRatingEdit);
