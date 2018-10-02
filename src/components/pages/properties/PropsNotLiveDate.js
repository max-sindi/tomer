import React, { Component } from 'react';
import PropertiesViewPage from './PropertiesViewPage';
import queries from './queries';

class PropsNotLiveDate extends Component {

  render() {
    return (
      <PropertiesViewPage paramsObj={queries.propsNotLiveDate} />
    );
  }

}

export default PropsNotLiveDate;
