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
// class LandlordsViewAll extends Component {
//
//   deleteProp = (id) => {
//     this.props.deleteProp(id, 'landlords')
//       .then( () => {
//         this.props.getProps('landlords');
//       });
//   }
//
//   getProps = () => {
//     this.props.getProps('landlords');
//   }
//
//   getCount = () => {
//     this.props.getCount('landlord', 'landlords');
//   }
//
//   componentWillMount = () => {
//     this.getCount();
//   }
//
//   changePage = (pageNumber) => {
//     this.props.changePage('landlords', pageNumber);
//   }
//
//   render() {
//     const {
//       landlords: { allProps, fields, filter, pagination },
//       controls: { listing, skip },
//       getProps,
//       stopViewAll,
//       filteringByField,
//     } = this.props;
//
//     return (
//       <React.Fragment>
//         <PageHeading title='Landlords' descr="View" />
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
//           addedClass='landlords-table-cell'
//           getProps={this.getProps}
//           deleteProp={this.deleteProp}
//           stopViewAll={stopViewAll}
//           part='landlords'
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
//     landlords: state.landlords,
//   }), { getProps, deleteProp, filteringByField, stopViewAll, getCount, changePage }
// )(LandlordsViewAll);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewAllPage from '../../containers/ViewAllPage';

class LandlordsViewAll extends Component {

  render() {
    const { landlords } = this.props;

    return (
      <ViewAllPage
        field='landlords'
        countField="land_lords"
        entity={landlords}
        tableCellClass='landlords-table-cell'
      />
    );
  }

}

export default connect(
  state => ({
    landlords: state.landlords,
  })
)(LandlordsViewAll);
