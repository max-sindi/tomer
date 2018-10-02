import React, { Component } from 'react';
import * as Form from '../partials/Forms';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Form as FormSemantic } from 'semantic-ui-react';

class PropertyTagsEditForm extends Component {

  render() {
    const { handleSubmit, buttonText } = this.props;

    return (
      <FormSemantic
        onSubmit={handleSubmit}
        autoComplete="off">

        <Field type="text" name="tagid" label="Tag id" component={Form.InputTextField} />
        <Field type="text" name="propertyid" label="Property id" component={Form.InputTextField} />
        <Field type="number" name="score" label="score" component={Form.InputNumberField} min='0' />

        <Form.Button>{buttonText}</Form.Button>

      </FormSemantic>
    );
  }
}

let FormToRedux = reduxForm({
  form: 'propertyTags',
  validate,
  enableReinitialize : true,
  destroyOnUnmount: false,
})(PropertyTagsEditForm);

export default FormToRedux;

function validate(values) {
  const error = {};
  const { propertyid, tagid } = values;

  if( !propertyid ) {
    error.propertyid = 'Property Id is required'
  }

  if( !tagid ) {
    error.tagid = 'Tag Id is required'
  }


  return error;
}
