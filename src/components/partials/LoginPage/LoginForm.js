import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form } from 'semantic-ui-react';
import LoginButton from './LoginButton';

const LoginField = ({
  input,
  type,
  meta: { touched, error, warning }
}) => (
  <div className="login__field-wrap">
    <label>{input.name}</label>
    <div>
      <input {...input} placeholder={input.name} type={type} />
      {touched &&
        ((error && <span className="login__field-error">{error}</span>)) }
           {/* (warning && <span className="login__field-warn">{warning}</span>))} */}
    </div>
  </div>
);

let LoginForm = props => {
  const { handleSubmit } = props;
// debugger
  return (
    <Form onSubmit={handleSubmit}>
      <Field name="login" component={LoginField} type="text" />
      <Field name="password" component={LoginField} type="password" />
      <LoginButton />
    </Form>
  )
}

LoginForm = reduxForm({
  form: 'login',
  validate
})(LoginForm);

export default LoginForm;


// VALIDATION FUNCS
function validate(values) {
  const errors= {};
  loginValidating();
  passwordValidating();

  return errors;

  function loginValidating() {
    const loginRequaredLength = 3;

    if(!values.login) {
      errors.login = 'Login is required';
    }  else if(values.login.length < loginRequaredLength) {
      errors.login = `Login must have at least ${loginRequaredLength} characters`;
    }
  }

  function passwordValidating() {
    const passwordRequaredLength = 3;

    if(!values.password) {
      errors.password = 'Password is required';
    } else if(values.password.length < passwordRequaredLength) {
      errors.password = `Password must have at least ${passwordRequaredLength} characters`;
    }
  }
}
