import React, { Component } from 'react';
import * as Form from '../partials/Forms';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Form as FormSemantic, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import DashCheckbox from '../partials/DashBoardPage/DashCheckbox';
import DashInput from '../partials/DashBoardPage/DashInput';
import Button from '../partials/Forms/Button';

class SlotsParamsForm extends Component {

  render() {
    return (
      <FormSemantic onSubmit={this.props.onSubmit} className="dash-slots">
        {/* <DashCheckbox /> */}
        {/* <Grid> */}
          {/* <Grid.Column computer="8" tablet='16'> */}
            <div className="dash-slots__checkboxes-wrap">
              <div className="dash-slots__checkboxes-column">
                <Field type='checkbox' component={DashCheckbox} name={'monday'} id="dash__monday" label='Monday'/>
                <Field type='checkbox' component={DashCheckbox} name={'tuesday'} id="dash__tuesday" label='Tuesday' />
                <Field type='checkbox' component={DashCheckbox} name={'wednesday'} id="dash__wednesday" label='Wednesday' />
                <Field type='checkbox' component={DashCheckbox} name={'thursday'} id="dash__thursday" label='Thursday' />
              </div>
              <div className="dash-slots__checkboxes-column">
                <Field type='checkbox' component={DashCheckbox} name={'friday'} id="dash__friday" label='Friday' />
                <Field type='checkbox' component={DashCheckbox} name={'saturday'} id="dash__saturday" label='Saturday' />
                <Field type='checkbox' component={DashCheckbox} name={'sunday'} id="dash__sunday" label='Sunday' />
              </div>
            </div>
              <Button disabled={true}>
                Confirm
                <i className="far fa-check-circle dash__check-icon"/>
              </Button>
            {/* </Grid.Column> */}
            {/* </div> */}
          {/* </Grid.Column>
        </Grid> */}
      </FormSemantic>
    );
  }

}


let FormToRedux = reduxForm({
  form: 'slotsParams',
  enableReinitialize : true,
  destroyOnUnmount: false,
})(SlotsParamsForm);

export default FormToRedux;
