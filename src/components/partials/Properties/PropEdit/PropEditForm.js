import React, { Component } from 'react';
import * as Form from '../../Forms';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Form as FormSemantic } from 'semantic-ui-react';

class PropEditForm extends Component {

  render() {
    const { handleSubmit, listingTypeValues, furnished, sourceType } = this.props;

    return (
      <FormSemantic onSubmit={handleSubmit} autoComplete="off">
        <Field type="checkbox" name="isActive" label="Active" component={Form.CheckboxField} id={'form__property-isActive'}/>

        <Form.FormBlock title="Address">
          <Field type="text" name="street" label="street" component={Form.InputTextField} />
          <Field type="text" name="city" label="city" component={Form.InputTextField} />
          <Field type="text" name="postcode" label="postcode" component={Form.InputTextField} />
          <Field type="text" name="state" label="state" component={Form.InputTextField} />
          <Field type="text" name="country" label="country" component={Form.InputTextField} />
        </Form.FormBlock>

        <Field type="text" name="displayedAddress" label="Displayed address" component={Form.InputTextField} />

        <Form.FormBlock title="Location">
          <Field type="number" name="latitude" label="latitude" component={Form.InputNumberField} />
          <Field type="number" name="longitude" label="longitude" component={Form.InputNumberField} />
        </Form.FormBlock>

        <Form.FormBlock title="Building">
          <Field type="number" name="floorsNumber" label="Number of floors" component={Form.InputNumberField} />
          <Field type="number" name="bedsNumber" label="Number of beds" component={Form.InputNumberField} />
          <Field type="number" name="bathsNumber" label="Number of bathrooms" component={Form.InputNumberField} />
          <Field type="text" name="propertyType" label="Property type" component={Form.InputTextField} />
        </Form.FormBlock>

        <Form.FormBlock title="Listing">
          <Field type="select" name="listingType" label="Listing Type" select={listingTypeValues} component={Form.InputSelectField} />
          <Field type="text" name="listingDescription" label="Description" component={Form.InputTextField} />
          <Field type="text" name="listingShortDescription" label="Short description" component={Form.InputTextField} />

          <Form.FormBlock title="Agent Ids">
            <FieldArray name='agentIds' component={Form.FloatTextFields} />
          </Form.FormBlock>

          <Field type="date" name="listingDate" label="Date" component={Form.InputDateField} />

          <Form.FormBlock title="Images">
            <FieldArray name='listingImages' component={Form.FloatTextFields} inputsPerField={2} nestedFields={['url', 'caption']} />
          </Form.FormBlock>

           <Form.FormBlock title="Floor plan">
             <FieldArray name='floorPlan' component={Form.FloatTextFields} inputsPerField={2} nestedFields={['url', 'caption']} />
           </Form.FormBlock>

           <Form.FormBlock title="Sale">
             <Field type="number" name="salePrice" label="Price" component={Form.InputNumberField} />
             <Field type="text" name="salePriceType" label="Price type" component={Form.InputTextField} />
           </Form.FormBlock>

           <Form.FormBlock title="Rent">
             <Field type="number" name="weeklyPrice" label="Weekly price" component={Form.InputNumberField} />
             <Field type="number" name="monthlyPrice" label="Monthly price" component={Form.InputNumberField} />
             <Field type="date" name="vacancyDate" label="Vacancy date" component={Form.InputDateField} />
           </Form.FormBlock>
        </Form.FormBlock>
        {/* end of listing */}

        <Field type="select" name="furnished" label="Furnished" select={furnished} component={Form.InputSelectField} />

         {/* not found in api */}
         {/* <Field type="checkbox" name="live" label="Live" component={Form.CheckboxField} id={'form__property-live'}/> */}



        <Form.FormBlock title="Source">
          <Field type="text" name="sourceId" label="Id" component={Form.InputTextField} />
          {/* <Field type="text" name="bedsNumber" label="Number of beds" component={Form.InputTextField} /> */}
          <Field type="select" name="sourceType" label="Type" component={Form.InputSelectField} select={sourceType}/>
          <Field type="text" name="sourceUrl" label="Url" component={Form.InputTextField} />
          {/* <Field type="text" name="propType" label="Property type" component={Form.InputTextField} /> */}
        </Form.FormBlock>

        <Form.Button>Submit</Form.Button>

      </FormSemantic>
    );
  }
}

let PropEditReduxForm = reduxForm({
  form: 'edit',
  validate,
})(PropEditForm);

export default PropEditReduxForm;

function validate(values) {
  const error = {};
  const { street, country, floorsNumber, bedsNumber, bathsNumber} = values;

  if( !street ) {
    error.street = 'Street is required'
  }

  if( !country) {
    error.country = 'Country is required'
  }

  if( !floorsNumber) {
    error.floorsNumber = "Number of floors is required"
  } else if(floorsNumber < 0) {
    error.floorsNumber = "Number can't be less than 0"
  }

  if( !bedsNumber) {
    error.bedsNumber = "Number of beds is required"
  } else if(bedsNumber < 0) {
    error.bedsNumber = "Number can't be less than 0"
  }

  if( !bathsNumber) {
    error.bathsNumber = "Number of baths is required"
  } else if(bathsNumber < 0) {
    error.bathsNumber = "Number can't be less than 0"
  }

  return error;
}
