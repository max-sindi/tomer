import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageHeading from '../../partials/MainContainer/PageHeading';
import PageContent from '../../partials/MainContainer/PageContent';
import Controls from '../../containers/Controls';
import AdditionalControls from '../../containers/AdditionalControls';
import ViewTable from '../../containers/ViewTable';
import { getProps, deleteProp, getCount } from '../../../redux/actions/crudsActions';
import { sortByField, changePage } from '../../../redux/actions/controls';
import { stopViewAll } from '../../../redux/actions/viewEditActions';

class PropertiesViewPage extends Component {

  deleteProp = (id) => {
    this.props.deleteProp(id)
      .then( () => {
        this.getProps();
      });
  }

  getProps = () => {
    const { paramsObj } = this.props;
    paramsObj.field = 'properties';
    this.props.getProps(paramsObj);
  }

  changePage = (pageNumber) => {
    this.props.changePage('properties', pageNumber);
  }

  filteringByField = (field) => {
    this.getProps(field);
  }

  sortByField = (fieldName) => {
    this.props.sortByField(fieldName, 'properties');
  }

  render() {
    const {
      properties: { allProps, fields, filter, pagination },
      controls: { listing, skip },
      getProps,
      deleteProp,
      stopViewAll,
      sortByField,
    } = this.props;

    return (
      <div className="props-filtered">
        <PageHeading title='Properties' descr="Filtered" />
        {/* <AdditionalControls propsField="properties" /> */}
        <PageContent>
          <Controls
            getProps={this.getProps}
            pagination={pagination}
            // getCount={this.getCount}
            skip={skip}
            changePage={this.changePage}
            // buttons={1}
          />
        </PageContent>
        <ViewTable
          props={allProps}
          fields={fields}
          addedClass='props-table-cell'
          getProps={this.getProps}
          deleteProp={this.deleteProp}
          stopViewAll={stopViewAll}
          part='properties'
          sortByField={this.sortByField}
          filter={filter}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    controls: state.controls,
    properties: state.properties,
  }), { getProps, deleteProp, sortByField, stopViewAll, getCount, changePage }
)(PropertiesViewPage);
