import React, { Component } from 'react';
import * as Form from '../partials/Forms';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Form as FormSemantic } from 'semantic-ui-react';
import { connect } from 'react-redux';

class UsersEditForm extends Component {

  render() {
    const { handleSubmit, buttonText, isEdit } = this.props;

    return (
      <div className="content-block">
        <FormSemantic
          onSubmit={handleSubmit}
        >

        <Field type="text" name="username" label="Name" component={Form.InputTextField} />

         <Form.FormBlock title="Emails">
           <FieldArray
             name='emails'
             component={Form.FloatTextAndCheckout}
             nestedFields={['address', 'verified']} />
         </Form.FormBlock>

         {/* <Form.FormBlock title="Phones">
           <FieldArray
             name='phones'
             component={Form.FloatTextAndCheckout}
             nestedFields={['phone', 'verified']} />
         </Form.FormBlock> */}

          <Form.FormBlock title="Phones">
            <FieldArray name='phones' component={Form.FloatTextFields} inputsPerField={1} nestedFields={['number']} />
          </Form.FormBlock>

         <Field type="date" name="createdat" label="Created At" component={Form.InputDateField} />

        <Form.FormBlock title="Profile">
          <Field type="text" name="name" label="Name" component={Form.InputTextField} />
          <Field type="text" name="firstName" label="First name" component={Form.InputTextField} />
          <Field type="text" name="lastName" label="Last name" component={Form.InputTextField} />
          <Field type="text" name="postcode" label="Postcode" component={Form.InputTextField} />

          <Field type="checkbox" name="termsAgreed" label="Terms agreed" component={Form.CheckboxField} id='user__terms' />
          <Field type="checkbox" name="isStudent" label="Is student" component={Form.CheckboxField} id='user__student' />
          <Field type="checkbox" name="hasGuarantor" label="Has guarantor" component={Form.CheckboxField} id='user__guarant' />
        </Form.FormBlock>

        {/* <Form.FormBlock title="Profile">
          <Field type="text" name="profileName" label="Name" component={Form.InputTextField} />
        </Form.FormBlock> */}

        <Form.PasswordField isExist={!isEdit} />

        <Form.Button>{buttonText}</Form.Button>

        </FormSemantic>
      </div>
    );
  }
}

let FormToRedux = reduxForm({
  form: 'users',
  validate,
  enableReinitialize : true,
  destroyOnUnmount: false,
})(UsersEditForm);

export default FormToRedux;

function validate(values) {
  const error = {};
  const { email, password, username } = values;

  if( !email ) {
    error.email = 'Email is required'
  } else if ( email.split('@').length !== 2 || email.split('@')[1].split('.').length !== 2 ) {
    error.email = 'Invalid email address'
  }

  if( !password ) {
    error.password = 'Password is required'
  }
  // 
  // if( !username ) {
  //   error.username = 'Name is required'
  // }


  return error;
}
