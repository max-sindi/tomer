import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';

class InputText extends Component {

  render() {
    const { input, type } = this.props;
    // debugger
    return (
      <div className="input-wrap">
        <label>{input.name}</label>
        <input className="input-text" {...input} type={type} />
      </div>
    )
  }
}

class PageForm extends Component {
  render() {

    return (
      <Form onSubmit={this.props.handleSubmit}>
        {this.props.fields.map( field => (
          <Field type={field.type} name={field.name} component={InputText} value={field.value} key={field.name} />
        ))}
        <button type="submit">Confirm</button>
      </Form>
    );
  }

}


let PageFormRedux = reduxForm({
  form: 'edit',
  validate
})(PageForm);

export default connect(
  state => ({
    initialValues: state.properties.initialValues,
  }))
(PageFormRedux);

function validate(values) {
  const errors = {};

  if(
    !values.street ||
    !values.city ||
    !values.postcode ||
    !values.country ||
    !values.state
  ) {
    errors.message = 'Please fill all fields'
  }

  return errors;
}
