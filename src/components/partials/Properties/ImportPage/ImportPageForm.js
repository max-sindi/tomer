import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { SelectField, NumberField, CheckboxField } from '../../MainContainer/FormFields';
import Postcode from './Postcode';

// const Postcode = ({}) => (
//   <SelectField title={} />
// )

let ImportPageForm = () => (
  <form>
    <Field name="postcode" component={Postcode} />
  </form>
)

ImportPageForm = reduxForm({
  form: 'propsImport'
})(ImportPageForm);

export default ImportPageForm;
