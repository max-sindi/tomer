import React, { Component } from 'react';

class DaySelect extends Component {

  render() {
    const { input } = this.props;
// debugger
    return (
      <div className="calendar__controls-select-wrap">
        <select {...input} className="calendar-select" >
          <option value="0">Sunday</option>
          <option value="1">Monday</option>
          <option value="2">Tuesday</option>
          <option value="3">Wednesday</option>
          <option value="4">Thursday</option>
          <option value="5">Friday</option>
          <option value="6">Saturday</option>
        </select>
      </div>
    );
  }

}

export default DaySelect;
