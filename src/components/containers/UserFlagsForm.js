import React, { Component } from 'react';
import * as Form from '../partials/Forms';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Form as FormSemantic, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import DashCheckbox from '../partials/DashBoardPage/DashCheckbox';
import DashInput from '../partials/DashBoardPage/DashInput';
import Button from '../partials/Forms/Button';

class UserFlagsForm extends Component {

  render() {
    return (
      <FormSemantic onSubmit={this.props.onSubmit} className="dash-flags">
        {/* <DashCheckbox /> */}
        <Grid>
          <Grid.Column computer="8" tablet='16'>
            {/* <div className="dash____user-flags-part"> */}
            {/* <Grid.Column computer="8" tablet="16"> */}
              <Field type='checkbox' component={DashCheckbox} name={'agreed'} label='Let agreed' id="dash__let-agreed" />
              <Field type='checkbox' component={DashCheckbox} name={'student'} id="dash__student" label='Student friendly' />
              <Field type='checkbox' component={DashCheckbox} name={'parking'} id="dash__parking" label='Parking/garage' />
              <Field type='checkbox' component={DashCheckbox} name={'room'} id="dash__room" label='Room' />
            {/* </Grid.Column> */}
            {/* </div> */}
          </Grid.Column>
          <Grid.Column computer="8" tablet='16'>
            <div className="dash__user-flags-part">
              <Field type="number" component={DashInput} name="days" label="Days" id="dash__days"/>
              <Button>
                Confirm
                <i className="far fa-check-circle dash__check-icon"/>
              </Button>
            </div>
          </Grid.Column>
        </Grid>
      </FormSemantic>
    );
  }

}


let FormToRedux = reduxForm({
  form: 'userFlags',
  enableReinitialize : true,
  destroyOnUnmount: false,
})(UserFlagsForm);

export default FormToRedux;
