// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PageHeading from '../../partials/MainContainer/PageHeading';
// import PageContent from '../../partials/MainContainer/PageContent';
// import Controls from '../../containers/Controls';
// import ViewTable from '../../partials/Tables/ViewTable';
// import { getProps, deleteProp, getCount } from '../../../redux/actions/crudsActions';
// import { filteringByField, changePage } from '../../../redux/actions/controls';
// import { stopViewAll } from '../../../redux/actions/viewEditActions';
//
// class PropertyTagsViewAll extends Component {
//
//   deleteProp = (id) => {
//     this.props.deleteProp(id, 'propertyTags')
//       .then( () => {
//         this.getProps();
//       });
//   }
//
//   getProps = () => {
//     this.props.getProps('propertyTags');
//   }
//
//   getCount = () => {
//     this.props.getCount('propertyTag', 'propertyTags');
//   }
//
//   componentWillMount = () => {
//     this.getCount();
//   }
//
//   changePage = (pageNumber) => {
//     this.props.changePage('propertyTags', pageNumber);
//   }
//
//   render() {
//     const {
//       propertyTags: { allProps, fields, filter, pagination },
//       controls: { listing, skip },
//       getProps,
//       deleteProp,
//       stopViewAll,
//       filteringByField,
//     } = this.props;
//
//     return (
//       <React.Fragment>
//         <PageHeading title='PropertyTags' descr="View" />
//         <PageContent>
//           <Controls
//             getProps={this.getProps}
//             pagination={pagination}
//             getCount={this.getCount}
//             skip={skip}
//             changePage={this.changePage}
//           />
//         </PageContent>
//         <ViewTable
//           props={allProps}
//           fields={fields}
//           addedClass='prop-rate-table-cell'
//           getProps={this.getProps}
//           deleteProp={this.deleteProp}
//           stopViewAll={stopViewAll}
//           part='propertyTags'
//           filtering={filteringByField}
//           filter={filter}
//         />
//       </React.Fragment>
//     );
//   }
// }
//
// export default connect(
//   state => ({
//     controls: state.controls,
//     propertyTags: state.propertyTags,
//   }), { getProps, deleteProp, filteringByField, stopViewAll, getCount, changePage }
// )(PropertyTagsViewAll);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewAllPage from '../../containers/ViewAllPage';

class PropertyTagsViewAll extends Component {

  render() {
    const { propertyTags } = this.props;

    return (
      <ViewAllPage
        field='propertyTags'
        countField="property_tags"
        entity={propertyTags}
        tableCellClass='prop-rate-table-cell'
      />
    );
  }

}

export default connect(
  state => ({
    propertyTags: state.propertyTags,
  })
)(PropertyTagsViewAll);
