import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SelectField, NumberField, CheckboxField } from '../../MainContainer/FormFields';

class Postcode extends Component {

  render() {
    return (
      <SelectField title={'poscodes'} values={this.props.postcodes} />
    );
  }

}

export default connect(
  state => ({
    postcodes: state.properties.import.postcodes
  })
)(Postcode);
