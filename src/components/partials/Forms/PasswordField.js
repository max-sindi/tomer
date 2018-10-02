import React, { Component } from 'react';
import InputTextField from './InputTextField';
import { Field } from 'redux-form';

class PasswordField extends Component {

  render() {
    const { isExist } = this.props;

    if( isExist ) {
      return (
        <div className="user__password">
          <Field type="password" name="password" label="Password" component={InputTextField} />
        </div>
      )
    } else {
      return null;
    }
  }

}

export default PasswordField;
