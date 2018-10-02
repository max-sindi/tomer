import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleProp, stopEditingProp, putPropChanges, getLastRequest } from '../../../redux/actions/crudsActions';
import { Loader } from 'semantic-ui-react';
import PageHeading from '../../partials/MainContainer/PageHeading';
import TagOptionsEditForm from '../../containers/TagOptionsEditForm';

class TagOptionsEdit extends Component {

  componentWillMount = () => {
    const id =  this.props.match.params.id;
    this.props.getSingleProp(id, 'tagOptions');
  }

  componentWillUnmount = () => {
    this.props.stopEditingProp('tagOptions');
    this.props.getLastRequest();
  }

  putChanges = e => {
    this.props.putPropChanges('tagOptions')
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
      } = this.props.tagOptions;

    if(!currentProp) {
      return <Loader active />
    }

    return (
      <React.Fragment>
        <PageHeading title="TagOptions" descr={`Edit ${id}`} />
        <TagOptionsEditForm
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
    tagOptions: state.tagOptions
  }), { getSingleProp, stopEditingProp, putPropChanges, getLastRequest }
)(TagOptionsEdit);
