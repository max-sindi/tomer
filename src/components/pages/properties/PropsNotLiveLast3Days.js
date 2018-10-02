import React, { Component } from 'react';
import PropertiesViewPage from './PropertiesViewPage';
import queries from './queries';

class PropsNotLiveLast3Days extends Component {

  render() {
    return (
      <PropertiesViewPage paramsObj={queries.propsNotLiveLast3Days} />
    );
  }

}

export default PropsNotLiveLast3Days;
