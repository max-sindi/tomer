import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Form from '../partials/Forms';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Form as FormSemantic } from 'semantic-ui-react';
// import { activateDndOnField, sendImage, pushFile, deleteFile, clearFiles } from '../../redux/actions/dndActions';
import { Holidays, TimesControls } from '../partials/Calendar/index';
import Calendar from '../containers/Calendar';

class LandlordsEditForm extends Component {

  render() {
    const { handleSubmit, buttonText } = this.props;
    const { workingStartValues, excludedStartValues, holidaysStartValues } = this.props.calendar;

    return (
      <div className="content-block">
        <FormSemantic
          onSubmit={handleSubmit}
          autoComplete="off">

          <Field type="text" name="name" label="Name" component={Form.InputTextField} />

          <Form.FormBlock title="Address">
            <Field type="text" name="street" label="street" component={Form.InputTextField} />
            <Field type="text" name="city" label="city" component={Form.InputTextField} />
            <Field type="text" name="postcode" label="postcode" component={Form.InputTextField} />
            <Field type="text" name="state" label="state" component={Form.InputTextField} />
            <Field type="text" name="country" label="country" component={Form.InputTextField} />
          </Form.FormBlock>

          <Field type="text" name="phone" label="Phone" component={Form.InputTextField} />

          <Form.FormBlock title="Textable numbers">
           <FieldArray name='textablenumbers' component={Form.FloatTextFields} inputsPerField={2} nestedFields={['name', 'number']} />
          </Form.FormBlock>

          <Field type="text" name="email" label="Email" component={Form.InputTextField} />

          {/* <Form.FormBlock title="Image">
            <Field type="text" name="imageUrl" label="Url" component={Form.InputTextField} />
            <Field type="text" name="imageCaption" label="Caption" component={Form.InputTextField} />
          </Form.FormBlock> */}

          <Form.FormBlock title="Office hours">
            <Form.FormBlock title="Start time">
              <Field type="number" name="startHours" label="Hours" component={Form.InputNumberField} />
              <Field type="number" name="startMins" label="Mins" component={Form.InputNumberField} />
            </Form.FormBlock>
            <Form.FormBlock title="End time">
              <Field type="number" name="endHours" label="Hours" component={Form.InputNumberField} />
              <Field type="number" name="endMins" label="Mins" component={Form.InputNumberField} />
            </Form.FormBlock>
          </Form.FormBlock>

          <Form.FormBlock title="Shedule" >
            <div className="calendar__controls-wrap">
              <FieldArray name="working" component={TimesControls} startValues={workingStartValues} />
              <FieldArray name="excluded" component={TimesControls} startValues={excludedStartValues} />
              <FieldArray name="holidays" component={Holidays} startValues={holidaysStartValues} />
            </div>
          </Form.FormBlock>

          <Calendar
            shedules={this.props.landlords}
          />

          <Form.Button>{buttonText}</Form.Button>

        </FormSemantic>
      </div>
    );
  }
}

let FormToRedux = reduxForm({
  form: 'landlords',
  validate,
  enableReinitialize : true,
  destroyOnUnmount: false,
})(LandlordsEditForm);

export default connect(
  state => ({
    landlords: state.form.landlords,
    calendar: state.calendars,
  })
)(FormToRedux);

function validate(values) {
  const error = {};
  const { name } = values;

  if( !name ) {
    error.name = 'Name is required'
  }

  return error;
}
