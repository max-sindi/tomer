import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSettings } from '../../../redux/actions/crudsActions';
import { Loader } from 'semantic-ui-react';
import PageHeading from '../../partials/MainContainer/PageHeading';
import SettingsForm from '../../containers/SettingsForm';

class SettingsViewAll extends Component {

  componentWillMount = () => {
    this.props.getSettings();
  }

  // componentWillUnmount = () => {
  //   this.props.stopEditingProp('settings');
  // }


  putChanges = e => {
    this.props.putPropChanges('settings')
      .then(res => {
        this.props.history.push('/admin');
      })
      .catch( error => {
        console.error(`Something went wrong: ${error}` );
      })

  }

  render() {
    const {
        props,
        initialValues,
      } = this.props.settings;

    if(!props) {
      return <Loader active />
    }

    return (
      <React.Fragment>
        <PageHeading title="Settings" descr={`View`} />
        <SettingsForm
          onSubmit={this.putChanges}
          initialValues={initialValues}
        />
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    settings: state.settings
  }), { getSettings }
)(SettingsViewAll);
