import React, { Component } from 'react';
import * as Form from '../partials/Forms';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Form as FormSemantic } from 'semantic-ui-react';

class TagOptionsEditForm extends Component {

  render() {
    const { handleSubmit, buttonText } = this.props;

    return (
      <FormSemantic
        onSubmit={handleSubmit}
        autoComplete="off">

        <Field type="text" name="name" label="Name" component={Form.InputTextField} />
        <Field type="number" name="value" label="value" component={Form.InputNumberField} />

        <Form.Button>{buttonText}</Form.Button>

      </FormSemantic>
    );
  }
}

let FormToRedux = reduxForm({
  form: 'tagOptions',
  validate,
  enableReinitialize : true,
  destroyOnUnmount: false,
})(TagOptionsEditForm);

export default FormToRedux;

function validate(values) {
  const error = {};
  const { name } = values;

  if( !name ) {
    error.name = 'Name is required'
  }
  return error;
}
