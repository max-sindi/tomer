import React, { Component } from 'react';

class TableHeadCell extends Component {

  filter = () => {
    const {sortByField, filterField, part} = this.props;
    // this.props.changeFilterDir()
    sortByField(filterField);
  }

  render() {
    const { addedClass, text, filter, filterClass } = this.props;

    let iconsClassName;

    // if(filter.filtered && filter.field === filterValue) {
    //   if(filter.incrementing === true) {
    //     iconsClassName = 'fa-arrow-up';
    //   } else {
    //     iconsClassName = 'fa-arrow-down';
    //   }
    // } else {
    //   iconsClassName = 'fa-exchange-alt';
    // }

    return (
      <th className={`table-head__cell ${addedClass || ''}`} onClick={this.filter} >
        {text}
        <i className={`fas ${iconsClassName || ''} table__cell-filter-icon`}/>
      </th>
    );
  }
}

export default TableHeadCell;
