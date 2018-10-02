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
// class UsersViewAll extends Component {
//
//   deleteProp = (id) => {
//     this.props.deleteProp(id, 'users')
//       .then( () => {
//         this.getProps();
//       });
//   }
//
//   getProps = () => {
//     this.props.getProps('users');
//   }
//
//   getCount = () => {
//     this.props.getCount('user', 'users');
//   }
//
//   componentWillMount = () => {
//     this.getCount();
//   }
//
//   changePage = (pageNumber) => {
//     this.props.changePage('users', pageNumber);
//   }
//
//   render() {
//     const {
//       users: { allProps, fields, filter, pagination },
//       controls: { listing, skip },
//       getProps,
//       filteringByField,
//       stopViewAll,
//     } = this.props;
//
//     return (
//       <React.Fragment>
//         <PageHeading title='Users' descr="View" />
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
//           addedClass='users-table-cell'
//           getProps={this.getProps}
//           deleteProp={this.deleteProp}
//           part='users'
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
//     users: state.users,
//   }), { getProps, deleteProp, filteringByField, stopViewAll, getCount, changePage }
// )(UsersViewAll);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewAllPage from '../../containers/ViewAllPage';

class UserTagsViewAll extends Component {

  render() {
    const { users } = this.props;

    return (
      <ViewAllPage
        field='users'
        countField="users"
        entity={users}
        tableCellClass='users-table-cell'
      />
    );
  }

}

export default connect(
  state => ({
    users: state.users,
  })
)(UserTagsViewAll);
