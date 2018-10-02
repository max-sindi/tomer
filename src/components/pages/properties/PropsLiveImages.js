import React, { Component } from 'react';
import PropertiesViewPage from './PropertiesViewPage';
import queries from './queries';

class PropsLiveImages extends Component {

  render() {
    return (
      <PropertiesViewPage paramsObj={queries.propsLiveImages} />
    );
  }

}

export default PropsLiveImages;
