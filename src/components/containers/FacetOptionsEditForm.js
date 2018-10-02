import React, { Component } from 'react';
import * as Form from '../partials/Forms';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Form as FormSemantic } from 'semantic-ui-react';

class FacetOptionsEditForm extends Component {

  render() {
    const { handleSubmit, buttonText } = this.props;

    return (
      <FormSemantic
        onSubmit={handleSubmit}
        autoComplete="off">

        <Field type="text" name="name" label="Name" component={Form.InputTextField} />

        <Field
          type="select"
          name="type"
          label="Type"
          component={Form.InputSelectField}
          select={{
            values:['Select One', 'Feature', 'Amenity']
          }}
        />

        <Field type="number" name="value" label="Value" component={Form.InputNumberField} />

        <Form.Button>{buttonText}</Form.Button>

      </FormSemantic>
    );
  }
}

let FormToRedux = reduxForm({
  form: 'facetOptions',
  validate,
  enableReinitialize : true,
  destroyOnUnmount: false,
})(FacetOptionsEditForm);

export default FormToRedux;

function validate(values) {
  const error = {};
  const { name, type } = values;

  if( !name ) {
    error.name = 'Name is required'
  }

  if(!type || type === "Select One" ) {
    error.type = "Select any";
  }

  return error;
}
