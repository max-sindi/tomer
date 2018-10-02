import React, { Component } from 'react';
import PropertiesViewPage from './PropertiesViewPage';
import queries from './queries';

class PropsErrorsDate extends Component {

  render() {

    return (
      <PropertiesViewPage paramsObj={queries.propsErrorDate} />
    );
  }

}

export default PropsErrorsDate;
