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
// class ViewingTimesViewAll extends Component {
//
//   deleteProp = (id) => {
//     this.props.deleteProp(id, 'viewingTimes')
//       .then( () => {
//         this.getProps();
//       });
//   }
//
//   getProps = () => {
//     this.props.getProps('viewingTimes');
//   }
//
//   getCount = () => {
//     this.props.getCount('viewingTime', 'viewingTimes');
//   }
//
//   componentWillMount = () => {
//     this.getCount();
//   }
//
//   changePage = (pageNumber) => {
//     this.props.changePage('viewingTimes', pageNumber);
//   }
//
//   render() {
//     const {
//       viewingTimes: { allProps, fields, filter, pagination },
//       controls: { listing, skip },
//       getProps,
//       stopViewAll,
//       filteringByField,
//     } = this.props;
//
//     return (
//       <React.Fragment>
//         <PageHeading title='ViewingTimes' descr="View" />
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
//           addedClass='viewing-times-table-cell'
//           getProps={this.getProps}
//           deleteProp={this.deleteProp}
//           stopViewAll={stopViewAll}
//           part='viewingTimes'
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
//     viewingTimes: state.viewingTimes,
//   }), { getProps, deleteProp, filteringByField, stopViewAll, getCount, changePage }
// )(ViewingTimesViewAll);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewAllPage from '../../containers/ViewAllPage';

class ViewingTimesViewAll extends Component {

  render() {
    const { viewingTimes } = this.props;

    return (
      <ViewAllPage
        field='viewingTimes'
        countField="viewingTime"
        entity={viewingTimes}
        tableCellClass='viewing-times-table-cell'
      />
    );
  }

}

export default connect(
  state => ({
    viewingTimes: state.viewingTimes,
  })
)(ViewingTimesViewAll);
