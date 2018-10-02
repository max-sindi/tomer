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
// class UserTagsViewAll extends Component {
//
//   deleteProp = (id) => {
//     this.props.deleteProp(id, 'userTags')
//       .then( () => {
//         this.getProps();
//       });
//   }
//
//   getProps = () => {
//     this.props.getProps('userTags');
//   }
//
//   getCount = () => {
//     this.props.getCount('userTag', 'userTags');
//   }
//
//   componentWillMount = () => {
//     this.getCount();
//   }
//
//   changePage = (pageNumber) => {
//     this.props.changePage('userTags', pageNumber);
//   }
//
//   render() {
//     const {
//       userTags: { allProps, fields, filter, pagination },
//       controls: { listing, skip },
//       getProps,
//       filteringByField,
//       stopViewAll,
//     } = this.props;
//
//     return (
//       <React.Fragment>
//         <PageHeading title='UserEvents' descr="View" />
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
//           stopViewAll={stopViewAll}
//           addedClass='user-tags-table-cell'
//           getProps={this.getProps}
//           deleteProp={this.deleteProp}
//           part='userEvents'
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
//     userTags: state.userTags,
//   }), { getProps, deleteProp, filteringByField, stopViewAll, getCount, changePage }
// )(UserTagsViewAll);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewAllPage from '../../containers/ViewAllPage';

class UserTagsViewAll extends Component {

  render() {
    const { userEvents } = this.props;

    return (
      <ViewAllPage
        field='userEvents'
        countField="user_tags"
        entity={userEvents}
        tableCellClass='user-tags-table-cell'
      />
    );
  }

}

export default connect(
  state => ({
    userEvents: state.userEvents,
  })
)(UserTagsViewAll);
