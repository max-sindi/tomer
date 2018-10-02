import React, { Component } from 'react';
import PropertiesViewPage from './PropertiesViewPage';
import queries from './queries';

class PropsLiveDate extends Component {

  render() {
    return (
      <PropertiesViewPage paramsObj={queries.propsLiveDate}  />
    );
  }

}

export default PropsLiveDate;
