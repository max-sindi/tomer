import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageHeading from '../partials/MainContainer/PageHeading';
import PageContent from '../partials/MainContainer/PageContent';
import ViewTable from './ViewTable';
import Controls from './Controls';
import { getProps, deleteProp, getCount, stopViewAll } from '../../redux/actions/crudsActions';
import { sortByField, changePage, stopSortingByField, resetControls } from '../../redux/actions/controls';

class ViewingRequestsViewAll extends Component {

  deleteProp = (id) => {
    this.props.deleteProp(id, this.props.field)
      .then( () => {
        this.getProps();
      });
  }

  getProps = () => {
    this.props.getProps({field: this.props.field});
  }

  getCount = () => {
    this.props.getCount(this.props.countField, this.props.field);
  }

  componentDidMount = () => {
    this.getCount();
  }

  componentWillUnmount = () => {
    this.props.stopViewAll(this.props.field);
    this.props.resetControls()
  }

  changePage = (pageNumber) => {
    this.props.changePage(this.props.field, pageNumber);
  }

  sortByField = (fieldName) => {
    const { field } = this.props;
    this.props.sortByField(fieldName, field);
  }

  render() {
    const {
      entity: { allProps, fields, filter, pagination },
      controls: { listing, skip },
      field,
      tableCellClass,
      getProps,
      deleteProp,
      stopViewAll,
      stopSortingByField,
    } = this.props;

    return (
      <React.Fragment>
        <PageHeading title={field} descr="View" />
        <PageContent>
          <Controls
            getProps={this.getProps}
            pagination={pagination}
            getCount={this.getCount}
            skip={skip}
            changePage={this.changePage}
          />
        </PageContent>
        <ViewTable
          props={allProps}
          fields={fields}
          stopViewAll={stopViewAll}
          addedClass={tableCellClass}
          getProps={this.getProps}
          deleteProp={this.deleteProp}
          part={field}
          sortByField={this.sortByField}
          stopSortingByField={stopSortingByField}
          // filter={filter}
        />
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    controls: state.controls,
  }), { getProps, deleteProp, sortByField, stopViewAll, getCount, changePage, stopSortingByField, resetControls }
)(ViewingRequestsViewAll);
