import React, { Component } from 'react';
import * as Form from '../partials/Forms';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Form as FormSemantic } from 'semantic-ui-react';
import { activateDndOnField, sendImage, pushFile, deleteFile, clearFiles } from '../../redux/actions/dndActions';
import { Holidays, TimesControls } from '../partials/Calendar/index';
import Calendar from '../containers/Calendar';

class PropEditForm extends Component {

  activateDnd = name => {
    this.props.activateDndOnField(name);
  }

  render() {
    const { handleSubmit, listingTypeValues, furnished, sourceType, dnd, sendImage} = this.props;
    const { workingStartValues, excludedStartValues, holidaysStartValues } = this.props.calendar;

    return (
      <FormSemantic onSubmit={handleSubmit} autoComplete="off">
        <Field
          type="checkbox"
          name="isActive"
          label="Active"
          component={Form.CheckboxField}
          id={'form__property-isActive'}
        />

        <Form.FormBlock title="Address">
          <Field type="text" name="street" label="street" component={Form.InputTextField} />
          <Field type="text" name="city" label="city" component={Form.InputTextField} />
          <Field type="text" name="postcode" label="postcode" component={Form.InputTextField} />
          <Field type="text" name="state" label="state" component={Form.InputTextField} />
          <Field type="text" name="country" label="country" component={Form.InputTextField} />
        </Form.FormBlock>

        <Field type="text" name="displayedaddress" label="Displayed address" component={Form.InputTextField} />

        <Form.FormBlock title="Location">
          <Field type="number" name="latitude" label="latitude" component={Form.InputNumberField} />
          <Field type="number" name="longitude" label="longitude" component={Form.InputNumberField} />
        </Form.FormBlock>

        <Form.FormBlock title="Building">
          <Field type="number" name="numFloors" label="Number of floors" component={Form.InputNumberField} />
          <Field type="number" name="numBedrooms" label="Number of beds" component={Form.InputNumberField} />
          <Field type="number" name="numBathrooms" label="Number of bathrooms" component={Form.InputNumberField} />
          <Field type="text" name="propertyType" label="Property type" component={Form.InputTextField} />
        </Form.FormBlock>

        {/* start of listing */}
        <Form.FormBlock title="Listing">
          <Field
            type="select"
            name="listingType"
            label="Listing Type"
            select={listingTypeValues}
            component={Form.InputSelectField}
          />
          <Field type="text" name="description" label="Description" component={Form.InputTextField} />
          <Field type="text" name="shortDescription" label="Short description" component={Form.InputTextField} />

          <Form.FormBlock title="Agent Ids">
            <FieldArray name='agentIds' component={Form.FloatTextFields} />
          </Form.FormBlock>

          <Field type="date" name="listingDate" label="Date" component={Form.InputDateField} />

          <Form.FormBlock title="Images">
            <FieldArray
              name='listingImages'
              component={Form.FloatTextFieldsWidthDndImage}
              fileStore={dnd}
              dndField='propsImages'
              pushFile={this.props.pushFile}
              deleteFile={this.props.deleteFile}
              multiple={true}
              clearFiles={this.props.clearFiles}
            />
          </Form.FormBlock>

          <Form.FormBlock title="Floor plan">
            <FieldArray
              name='floorPlan'
              component={Form.FloatTextFieldsWidthDndImage}
              fileStore={dnd}
              dndField='propsFloorPlans'
              pushFile={this.props.pushFile}
              deleteFile={this.props.deleteFile}
              multiple={true}
              clearFiles={this.props.clearFiles}
            />
          </Form.FormBlock>

           {/* <Form.FormBlock title="Floor plan">
             <FieldArray name='floorPlan' component={Form.FloatTextFields} inputsPerField={2} nestedFields={['url', 'caption']} />
           </Form.FormBlock> */}

           {/* <Form.FormBlock title="Sale">
             <Field type="number" name="salePrice" label="Price" component={Form.InputNumberField} />
             <Field type="text" name="salePriceType" label="Price type" component={Form.InputTextField} />
           </Form.FormBlock> */}

           <Form.FormBlock title="Rent">
             <Field type="number" name="weeklyPrice" label="Weekly price" component={Form.InputNumberField} />
             <Field type="number" name="monthlyPrice" label="Monthly price" component={Form.InputNumberField} />
             {/* <Field type="date" name="vacancyDate" label="Vacancy date" component={Form.InputDateField} /> */}
           </Form.FormBlock>
        </Form.FormBlock>
        {/* end of listing */}

        <Field type="select" name="furnished" label="Furnished" select={furnished} component={Form.InputSelectField} />

        <Form.FormBlock title="Source">
          <Field type="text" name="sourceId" label="Id" component={Form.InputTextField} />
          <Field type="select" name="sourceType" label="Type" component={Form.InputSelectField} select={sourceType}/>
          <Field type="text" name="sourceUrl" label="Url" component={Form.InputTextField} />
        </Form.FormBlock>

        <Form.FormBlock title="Shedule" >
          <div className="calendar__controls-wrap">
            <FieldArray name="working" component={TimesControls} startValues={workingStartValues} />
            <FieldArray name="excluded" component={TimesControls} startValues={excludedStartValues} />
            <FieldArray name="holidays" component={Holidays} startValues={holidaysStartValues} />
          </div>
        </Form.FormBlock>

        <Calendar
          shedules={this.props.edit}
        />

        <Form.Button>Submit</Form.Button>

      </FormSemantic>
    );
  }
}
{/* inputsPerField={1}
nestedFields={['url']}
dndFields={['url']} */}

let PropEditReduxForm = reduxForm({
  form: 'properties',
  validate,
  enableReinitialize : true,
  destroyOnUnmount: false,
})(PropEditForm);

export default connect(
  state => ({
    dnd: state.dnd,
    edit: state.form.properties,
    props: state.properties,
    calendar: state.calendars,
  }), { activateDndOnField, sendImage, pushFile, deleteFile, clearFiles }
)(PropEditReduxForm);

function validate(values) {
  const error = {};
  const { street, country, floorsNumber, bedsNumber, bathsNumber} = values;

  if( !street ) {
    error.street = 'Street is required'
  }

  if( !country) {
    error.country = 'Country is required'
  }

  return error;
}
