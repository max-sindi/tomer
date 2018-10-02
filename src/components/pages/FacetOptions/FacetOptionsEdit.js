import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleProp, stopEditingProp, putPropChanges, getLastRequest } from '../../../redux/actions/crudsActions';
import { Loader } from 'semantic-ui-react';
import PageHeading from '../../partials/MainContainer/PageHeading';
import FacetOptionsEditForm from '../../containers/FacetOptionsEditForm';

class FacetOptionsEdit extends Component {

  componentWillMount = () => {
    const id =  this.props.match.params.id;
    this.props.getSingleProp(id, 'facetOptions');
  }

  componentWillUnmount = () => {
    this.props.stopEditingProp('facetOptions');
    this.props.getLastRequest();
  }

  putChanges = e => {
    this.props.putPropChanges('facetOptions')
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
      } = this.props.facetOptions;

    if(!currentProp) {
      return <Loader active />
    }

    return (
      <React.Fragment>
        <PageHeading title="FacetOptions" descr={`Edit ${id}`} />
        <FacetOptionsEditForm
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
    facetOptions: state.facetOptions
  }), { getSingleProp, stopEditingProp, putPropChanges, getLastRequest }
)(FacetOptionsEdit);
