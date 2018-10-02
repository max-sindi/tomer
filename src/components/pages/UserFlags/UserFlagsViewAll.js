import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageHeading from '../../partials/MainContainer/PageHeading';
import PageContent from '../../partials/MainContainer/PageContent';
import ViewTableWithoutControls from '../../partials/Tables/ViewTableWithoutControls';
import { getProps } from '../../../redux/actions/crudsActions';
import { stopViewAll } from '../../../redux/actions/viewEditActions';

class UserFlagsViewAll extends Component {

  getProps = () => {
    this.props.getProps({field: 'userFlags'})
  }

  render() {
    const {
      userFlags: { props, fields },
      getProps,
      stopViewAll,
    } = this.props;

    const crumbs = [
      {
        title: 'Users Flags List',
        link: 'filters/flags',
      },
    ]

    return (
      <React.Fragment>
        <PageHeading title='Users Flags List' descr="" crumbs={crumbs} />
        <PageContent>
          <ViewTableWithoutControls
            props={props}
            fields={fields}
            stopViewAll={stopViewAll}
            addedClass='user-flags-table-cell'
            getProps={this.getProps}
            part='userFlags'
          />
        </PageContent>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    controls: state.controls,
    userFlags: state.userFlags,
  }), { getProps, stopViewAll }
)(UserFlagsViewAll);
