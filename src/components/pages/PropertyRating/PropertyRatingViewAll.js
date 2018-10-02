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
// class PropertyRatingViewAll extends Component {
//
//   deleteProp = (id) => {
//     this.props.deleteProp(id)
//       .then( () => {
//         this.getProps();
//       });
//   }
//
//   getProps = () => {
//     this.props.getProps('propertyRating');
//   }
//
//   getCount = () => {
//     this.props.getCount('propertyRating', 'propertyRating');
//   }
//
//   componentWillMount = () => {
//     this.getCount();
//   }
//
//   changePage = (pageNumber) => {
//     this.props.changePage('propertyRating', pageNumber);
//   }
//
//   render() {
//     const {
//       propertyRating: { allProps, fields, filter, pagination },
//       controls: { listing, skip },
//       getProps,
//       deleteProp,
//       stopViewAll,
//       filteringByField,
//     } = this.props;
//
//     return (
//       <React.Fragment>
//         <PageHeading title='PropertyRating' descr="View" />
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
//           part='propertyRatings'
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
//     propertyRating: state.propertyRating,
//   }), { getProps, deleteProp, filteringByField, stopViewAll, getCount, changePage }
// )(PropertyRatingViewAll);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewAllPage from '../../containers/ViewAllPage';

class PropertyRatingViewAll extends Component {

  render() {
    const { propertyRating } = this.props;

    return (
      <ViewAllPage
        field='propertyRating'
        countField="property_ratings"
        entity={propertyRating}
        tableCellClass='prop-rate-table-cell'
      />
    );
  }

}

export default connect(
  state => ({
    propertyRating: state.propertyRating,
  })
)(PropertyRatingViewAll);
