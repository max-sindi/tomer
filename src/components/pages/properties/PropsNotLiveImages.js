import React, { Component } from 'react';
import PropertiesViewPage from './PropertiesViewPage';
import queries from './queries';

class PropsNotLiveImages extends Component {

  render() {
    return (
      <PropertiesViewPage paramsObj={queries.propsNotLiveImages} />
    );
  }

}

export default PropsNotLiveImages;
