import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import UserFlagsForm from './UserFlagsForm';
import { Loader } from 'semantic-ui-react';
import { getProps, putPropChanges } from '../../redux/actions/crudsActions';

class UserFlags extends Component {

  componentWillMount = () => {
    this.props.getProps({field: 'userFlags'});
  }

  putPropChanges = () => {
    this.props.putPropChanges('userFlags');
  }

  render() {
    const { putPropChanges } = this.props;
    const { lastProp, props, formTemplate } = this.props.userFlags;

    let form;

    if( !props ) {
      form = <Loader active />
    // if no flags was created yet
    } else if(props.length === 0) {
      form = (
        <UserFlagsForm
          onSubmit={this.putPropChanges}
          initialValues={formTemplate}
        />
      )
    } else {
      form = (
        <UserFlagsForm
          onSubmit={this.putPropChanges}
          initialValues={lastProp}
        />
      )
    }

    return (
      <div className="dash__item" >
        <div className="dash__item-header dash__user-flags-header">
          {form}
          <i className={`fas fa-cog dash__item-plus-icon`} />
        </div>
        <Link to={`/admin/filters/flags`}>
          <div className="dash__item-footer">
              View preveous values
              <i className="fas fa-list-ul dash__item-arrow-icon" />
          </div>
        </Link>
      </div>
    );
  }

}

export default connect(
  state => ({
    userFlags: state.userFlags,
  }), { getProps, putPropChanges }
)(UserFlags);
