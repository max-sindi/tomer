import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import CalendarControls from '../partials/Calendar/CalendarControls';
import uuid from 'uuid/v4';
import { Loader } from 'semantic-ui-react';

import '../partials/Calendar/Calendar.css';

BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
  constructor() {
    super();

    const nowDate = new Date();
    const nowYear = nowDate.getFullYear();
    const nowMonth= nowDate.getMonth();

    this.state = {
      year: nowYear,
      month: nowMonth,
    }
  }

  navigateChange = (newDate) => {
    const year = newDate.getFullYear();
    const month = newDate.getMonth();

    this.setState( prevState => ({
      year,
      month,
    }))
  }

  addTimes = (from, to, role) => {
    const { convertDateToCalendar } = this;

    from.forEach( item => {
      const date = item[0];
      convertDateToCalendar(date, role, to);
    })

    return to;
  }

  convertDateToCalendar = ( date, role, targetArr ) => {
    const { year, month } = this.state;
    const day = +date.day;
    const { startTime: start, endTime: end } = date;

    fillMonthWithDate(month-1);
    fillMonthWithDate(month);
    fillMonthWithDate(month+1);

    function fillMonthWithDate(month) {
      const msNowMonth = new Date(year, month+1).getTime() - new Date(year, month).getTime();
      const daysInMonth = moment.duration(msNowMonth).asDays();
      const firstDayOfMonth = new Date(year, month).getDay();

      let startPoint = 0;
      let daysDiff;

      if(day === firstDayOfMonth) {
        daysDiff = 0;
      } else if(day > firstDayOfMonth) {
        daysDiff = day - firstDayOfMonth;
      } else if(day < firstDayOfMonth) {
        daysDiff = (day - firstDayOfMonth) + 7;
      }

       while(startPoint <= daysInMonth) {
         const [ startHour, startMins ] = start.split(':');
         const [ endHour, endMins ] = end.split(':');

         const eventToRes = {
           id: uuid(),
           title: `${start}-${end}: \n${role}`,
           start: new Date(year, month, startPoint + daysDiff + 1, startHour, startMins),
           end: new Date(year, month, startPoint + daysDiff + 1, endHour, endMins),
           role: role,
         }

         if( willnotDuplicateAnyEvent(targetArr, eventToRes) ) {
           targetArr.push(eventToRes);
         }

         startPoint = startPoint + 7 + daysDiff;
         daysDiff = 0;

         function willnotDuplicateAnyEvent(targetArr, event) {

          return  !targetArr.some(checkMatching);

          function checkMatching(eventInArr) {
             if(
               eventInArr.start.getTime() === event.start.getTime()
               && eventInArr.end.getTime() === event.end.getTime()
             ) {
               return true;
             } else {
               return false;
             }
          }
        }
      }
    }
  }

  addHolidays = (from, to) => {
    const { convertDateToCalendar } = this;

    from.forEach( item => {
      if(!item[0]) {
        return;
      }

      const date = item[0].date;

      if(!date) {
        return;
      }

      const newDate = new Date(date);

      const resObject = {
        id: uuid(),
        title: `${newDate.toDateString()} - holiday`,
        allDay: true,
        start: newDate,
        end: newDate,
        role: 'holidays'
      }

      to.push(resObject);
    })
  }

  fillDates = () => {
    if(!this.props.shedules.values) {
      return [];
    }

    const {
      working = [],
      excluded = [],
      holidays = [],
    } = this.props.shedules.values;

    const { addTimes, addHolidays } = this;

    const workingRes = [];
    const excludedRes = [];
    const holidaysRes = [];

    addTimes(working, workingRes, 'working');
    addTimes(excluded, excludedRes, 'excluded');
    addHolidays(holidays, holidaysRes);

    const resAll = [].concat(workingRes, excludedRes, holidaysRes);

    return resAll;
  }

  render() {
    let events;
    let calendar;

    if(!this.props.shedules) {
      calendar = <Loader active />
    } else {
      events = this.fillDates();
      calendar = (
        <BigCalendar
        events={events}
        // views={allViews}
        step={60}
        // views={{ month: true, week: true }}
        showMultiDayTimes
        onNavigate={this.navigateChange}
        // without this navigation crashes
        defaultDate={new Date()}
        />
      )
    }

    return (
      <div className="calendar">
        {calendar}
      </div>
    );
  }

}

export default Calendar;
