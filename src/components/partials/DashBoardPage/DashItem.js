import React from 'react';
import { Link } from 'react-router-dom';

const DasItem = ({ item, item: {dash, countName}, name, counts }) => (
  <Link to={`/admin/${dash.path}`} className="dash__item" >
    <div className="dash__item-header">
      <h3 className="dash__count">
        {counts[countName] || 0}
      </h3>
      <div className="dash__title">
        {item.title}
      </div>
      <div className="dash__additional">
        {dash.additional}
      </div>
      <i className={`fas fa-plus dash__item-plus-icon`} />
    </div>
    <div className="dash__item-footer">
      See all
      <i className="fas fa-arrow-circle-right dash__item-arrow-icon" />
    </div>
  </Link>
);

export default DasItem;
