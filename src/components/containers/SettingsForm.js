import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Form from '../partials/Forms';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Form as FormSemantic } from 'semantic-ui-react';
import { Holidays, TimesControls } from '../partials/Calendar/index';
import Calendar from './Calendar';

class SettingsEditForm extends Component {

  render() {
    const { handleSubmit, buttonText } = this.props;
    const { workingStartValues, excludedStartValues, holidaysStartValues } = this.props.calendar;

    return (
      <div className="content-block">
        <FormSemantic
          onSubmit={handleSubmit}>

           <Form.FormBlock title="Shedule" >
             <div className="calendar__controls-wrap">
               <FieldArray name="working" component={TimesControls} startValues={workingStartValues} />
               <FieldArray name="excluded" component={TimesControls} startValues={excludedStartValues} />
               <FieldArray name="holidays" component={Holidays} startValues={holidaysStartValues} />
             </div>
           </Form.FormBlock>

           <Calendar
             shedules={this.props.settings}
           />

          <Form.Button>{buttonText}</Form.Button>

        </FormSemantic>
      </div>
    );
  }
}

let FormToRedux = reduxForm({
  form: 'settings',
  enableReinitialize : true,
  destroyOnUnmount: false,
})(SettingsEditForm);

export default connect(
  state => ({
    settings: state.form.settings,
    calendar: state.calendars,
  })
)(FormToRedux);
