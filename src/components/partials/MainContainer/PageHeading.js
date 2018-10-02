import React from 'react';
import PropTypes from 'prop-types';
import Crumbs from './Crumbs';

const PageHeading = ({title, descr, crumbs}) => (
  <div className="page-heading">
    <h2 className="page-heading__title">
      {title}
    </h2>
    <span className="page-heading__descr">
      {descr}
    </span>
    <Crumbs crumbs={crumbs} />
  </div>
);

PageHeading.propTypes = {
  title: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
}

export default PageHeading;
