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
// class TagOptionsViewAll extends Component {
//
//   deleteProp = (id) => {
//     this.props.deleteProp(id, 'tagOptions')
//       .then( () => {
//         this.getProps();
//       });
//   }
//
//   getProps = () => {
//     this.props.getProps('tagOptions');
//   }
//
//   getCount = () => {
//     this.props.getCount('tagOption', 'tagOptions');
//   }
//
//   componentWillMount = () => {
//     this.getCount();
//   }
//
//   changePage = (pageNumber) => {
//     this.props.changePage('tagOptions', pageNumber);
//   }
//
//   render() {
//     const {
//       tagOptions: { allProps, fields, filter, pagination },
//       controls: { listing, skip },
//       getProps,
//       stopViewAll,
//       filteringByField,
//     } = this.props;
//
//     return (
//       <React.Fragment>
//         <PageHeading title='TagOptions' descr="View" />
//         <PageContent>
//           <Controls
//             getProps={this.getProps}
//             pagination={pagination}
//             getCount={this.getCount}
//             changePage={this.changePage}
//           />
//         </PageContent>
//         <ViewTable
//           props={allProps}
//           fields={fields}
//           addedClass='tag-options-table-cell'
//           getProps={this.getProps}
//           deleteProp={this.deleteProp}
//           stopViewAll={stopViewAll}
//           part='tagOptions'
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
//     tagOptions: state.tagOptions,
//   }), { getProps, deleteProp, filteringByField, stopViewAll, getCount, changePage }
// )(TagOptionsViewAll);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewAllPage from '../../containers/ViewAllPage';

class UserTagsViewAll extends Component {

  render() {
    const { tagOptions } = this.props;

    return (
      <ViewAllPage
        field='tagOptions'
        countField="tag_options"
        entity={tagOptions}
        tableCellClass='tag-options-table-cell'
      />
    );
  }

}

export default connect(
  state => ({
    tagOptions: state.tagOptions,
  })
)(UserTagsViewAll);
