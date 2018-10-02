import React, { Component } from 'react';

class TimeSelect extends Component {

  render() {
    const { input } = this.props;

    return (
      <div className="calendar__controls-select-wrap">
        <select {...input} className="calendar-select">
          <option value="9:00">9:00</option>
          <option value="9:15">9:15</option>
          <option value="9:30">9:30</option>
          <option value="9:45">9:45</option>
          <option value="10:00">10:00</option>
          <option value="10:15">10:15</option>
          <option value="10:30">10:30</option>
          <option value="10:45">10:45</option>
          <option value="11:00">11:00</option>
          <option value="11:15">11:15</option>
          <option value="11:30">11:30</option>
          <option value="11:45">11:45</option>
          <option value="12:00">12:00</option>
          <option value="12:15">12:15</option>
          <option value="12:30">12:30</option>
          <option value="12:45">12:45</option>
          <option value="13:00">13:00</option>
          <option value="13:15">13:15</option>
          <option value="13:30">13:30</option>
          <option value="13:45">13:45</option>
          <option value="14:00">14:00</option>
          <option value="14:15">14:15</option>
          <option value="14:30">14:30</option>
          <option value="14:45">14:45</option>
          <option value="15:00">15:00</option>
          <option value="15:15">15:15</option>
          <option value="15:30">15:30</option>
          <option value="15:45">15:45</option>
          <option value="16:00">16:00</option>
          <option value="16:15">16:15</option>
          <option value="16:30">16:30</option>
          <option value="16:45">16:45</option>
          <option value="17:00">17:00</option>
          <option value="17:15">17:15</option>
          <option value="17:30">17:30</option>
          <option value="17:45">17:45</option>
          <option value="18:00">18:00</option>
          <option value="18:15">18:15</option>
          <option value="18:30">18:30</option>
          <option value="18:45">18:45</option>
          <option value="19:00">19:00</option>
          <option value="19:15">19:15</option>
          <option value="19:30">19:30</option>
          <option value="19:45">19:45</option>
          <option value="20:00">20:00</option>
        </select>
      </div>
    );
  }

}

export default TimeSelect;
