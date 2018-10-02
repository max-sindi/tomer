import React, { Component } from 'react';
import * as Form from '../partials/Forms';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Form as FormSemantic } from 'semantic-ui-react';

class ViewingTimesEditForm extends Component {

  render() {
    const { handleSubmit, buttonText } = this.props;

    return (
      <FormSemantic
        onSubmit={handleSubmit}
        autoComplete="off">

        <Field type="text" name="propertyid" label="Property id" component={Form.InputTextField} />

        <Form.FormBlock title="Start Time">
          <Field type="number" name="starthours" label="Hours" component={Form.InputNumberField} />
          <Field type="number" name="startmins" label="Mins" component={Form.InputNumberField} />
        </Form.FormBlock>

        <Form.FormBlock title="End Time">
          <Field type="number" name="endhours" label="Hours" component={Form.InputNumberField} />
          <Field type="number" name="endmins" label="Mins" component={Form.InputNumberField} />
        </Form.FormBlock>

        <Field
          type="select"
          name="dayofweek"
          label="DayOfWeek"
          component={Form.InputSelectField}
          select={{
            values:['(Select One)', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            defaultValues: '(Select One)'
          }}
        />

        <Form.Button>{buttonText}</Form.Button>

      </FormSemantic>
    );
  }
}

let FormToRedux = reduxForm({
  form: 'viewingTimes',
  validate,
  enableReinitialize : true,
  destroyOnUnmount: false,
})(ViewingTimesEditForm);

export default FormToRedux;

function validate(values) {
  const error = {};

  const { propertyId, dayOfWeek } = values;

  if( !propertyId ) {
    error.propertyId = 'Property Id is required'
  }

  if( dayOfWeek === '(Select One)') {
    error.dayOfWeek = 'Please choose a day'
  }

  return error;
}
