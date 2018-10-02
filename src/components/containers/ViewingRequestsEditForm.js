import React, { Component } from 'react';
import * as Form from '../partials/Forms';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Form as FormSemantic } from 'semantic-ui-react';

class ViewingRequestsEditForm extends Component {

  render() {
    const { handleSubmit, buttonText } = this.props;

    return (
      <FormSemantic
        onSubmit={handleSubmit}
        autoComplete="off">

        <Field type="text" name="userid" label="User id" component={Form.InputTextField} />
        {/* <Field type="text" name="viewingtimeid" label="Viewing time id" component={Form.InputTextField} /> */}
        <Field type="date" name="startdate" label="Start date" component={Form.InputDateField} />
        <Field type="date" name="enddate" label="End date" component={Form.InputDateField} />
        <Field type="select" name="status" label="Status" component={Form.InputSelectField} select={{values:['Pending', 'Accepted', 'Rejected'], defaultValues: 'Pending' }} />
        <Field type="text" name="agentid" label="Agent Id" component={Form.InputTextField} />
        <Field type="text" name="propertyid" label="Property Id" component={Form.InputTextField} />
        <Field type="number" name="acknowledgecount" label="Acknowledge count" component={Form.InputNumberField} min={'0'} max={'2'}/>

        <Form.Button>{buttonText}</Form.Button>

      </FormSemantic>
    );
  }
}

let ViewingRequestsEditFormToRedux = reduxForm({
  form: 'viewingRequests',
  validate,
  enableReinitialize : true,
  destroyOnUnmount: false,
})(ViewingRequestsEditForm);

export default ViewingRequestsEditFormToRedux;

function validate(values) {
  const error = {};
  const { userid, viewingtimeid } = values;

  if( !userid ) {
    error.userid = 'User Id is required'
  }

  if( !viewingtimeid ) {
    error.viewingtimeid = 'Viewing Time Id is required'
  }

  // if( !propertyId ) {
  //   error.propertyId = 'Property Id is required';
  // }

  return error;
}
