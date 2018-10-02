import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageHeading from '../../partials/MainContainer/PageHeading';
import PageContent from '../../partials/MainContainer/PageContent';
import ViewTableWithoutControls from '../../partials/Tables/ViewTableWithoutControls';
import { getProps } from '../../../redux/actions/crudsActions';
import { stopViewAll } from '../../../redux/actions/viewEditActions';

class SlotsParamsViewAll extends Component {

  getProps = () => {
    this.props.getProps({field: 'slotsParams'})
  }

  render() {
    const {
      slotsParams: { props, fields },
      getProps,
      stopViewAll,
    } = this.props;

    const crumbs = [
      {
        title: 'Viewing Slots Params List',
        link: 'timeSlots/params',
      },
    ]

    return (
      <React.Fragment>
        <PageHeading title='Viewing Slots Params List' descr="" crumbs={crumbs} />
        <PageContent>
          <ViewTableWithoutControls
            props={props}
            fields={fields}
            stopViewAll={stopViewAll}
            addedClass='slots-params-table-cell'
            getProps={this.getProps}
            part='slotsParams'
          />
        </PageContent>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    controls: state.controls,
    slotsParams: state.slotsParams,
  }), { getProps, stopViewAll }
)(SlotsParamsViewAll);
