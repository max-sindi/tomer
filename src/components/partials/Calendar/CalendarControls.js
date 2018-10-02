import React, { Component } from 'react';
import { WorkingTime, ExcludedTime, Holidays } from './index.js';

class CalendarControls extends Component {

  render() {
    const {working, excluded, holidays} = this.props.times;

    return (
      <div className="calendar-controls">
        <WorkingTime times={working} />
        <ExcludedTime times={excluded} />
        <Holidays dates={holidays} />
      </div>
    );
  }

}

export default CalendarControls;
