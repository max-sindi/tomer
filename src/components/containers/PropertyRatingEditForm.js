import React, { Component } from 'react';
import * as Form from '../partials/Forms';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Form as FormSemantic } from 'semantic-ui-react';

class PropertyRatingEditForm extends Component {

  render() {
    const { handleSubmit, buttonText } = this.props;

    return (
      <div className="content-block">
        <FormSemantic
          onSubmit={handleSubmit}
          autoComplete="off">

          <Field type="text" name="propertyid" label="Property id" component={Form.InputTextField} />
          <Field type="text" name="userid" label="User id" component={Form.InputTextField} />
          <Field type="number" name="rating" label="Rating" component={Form.InputNumberField} />

          <Form.Button>{buttonText}</Form.Button>

        </FormSemantic>
      </div>
    );
  }
}

let FormToRedux = reduxForm({
  form: 'propertyRating',
  validate,
  enableReinitialize : true,
  destroyOnUnmount: false,
})(PropertyRatingEditForm);

export default FormToRedux;

function validate(values) {
  const error = {};
  const { propertyid, userid, rating } = values;

  // if( !propertyid ) {
  //   error.propertyid = 'Property Id is required'
  // }
  //
  // if( !userid ) {
  //   error.userid = 'User Id is required'
  // }
  //
  // if( !rating ) {
  //   error.rating = 'Rating is required'
  // }


  return error;
}
