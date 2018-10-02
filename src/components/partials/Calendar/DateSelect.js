import React, { Component } from 'react';

class DateSelect extends Component {

  render() {
    const { input } = this.props;

    return (
      <div className="calendar-date-wrap" >
        <input type="date" {...input} className="calendar-date"/>
      </div>
    );
  }

}

export default DateSelect;
