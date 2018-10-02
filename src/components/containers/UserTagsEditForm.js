import React, { Component } from 'react';
import * as Form from '../partials/Forms';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Form as FormSemantic } from 'semantic-ui-react';

class UserTagsEditForm extends Component {

  render() {
    const { handleSubmit, buttonText } = this.props;

    return (
      <FormSemantic
        onSubmit={handleSubmit}
        autoComplete="off">

        {/* <Field type="text" name="tagid" label="Tag ID" component={Form.InputTextField} /> */}
        <Field type="text" name="userid" label="User ID" component={Form.InputTextField} />
        <Field type="text" name="eventid" label="Event ID" component={Form.InputTextField} />
        <Field type="date" name="happenedatlast" label="Happened at last" component={Form.InputDateField} />
        <Field type="date" name="receivedatlast" label="Received at last" component={Form.InputDateField} />
        <Field type="text" name="propertyid" label="Property Id" component={Form.InputTextField} />

        <Form.Button>{buttonText}</Form.Button>

      </FormSemantic>
    );
  }
}

let FormToRedux = reduxForm({
  form: 'userEvents',
  validate,
  enableReinitialize : true,
  destroyOnUnmount: false,
})(UserTagsEditForm);

export default FormToRedux;

function validate(values) {
  const error = {};
  const { userId, score, tagId } = values;

  if( !userId ) {
    error.userId = 'User Id is required'
  }

  if( !score ) {
    error.score = 'Score is required'
  }

  if( !tagId ) {
    error.tagId = 'Tag Id is required'
  }

  return error;
}
