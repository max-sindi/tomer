import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from '../partials/Controls/Select';
import { changeControls, addControlsUnmount } from '../../redux/actions/controls';
// import { getProps } from './';

class AdditionalControls extends Component {

  dateChange = e => {
    const { name, value } = e.target;
    this.changeControls(name, value);
  }

  changeControls = (name, value) => {
    const { propsField } = this.props;
    this.props.changeControls(name, value, propsField);
  }

  componentWillUnmount = () => {
    this.props.addControlsUnmount();
  }

  render() {
    const { year, month, flags, old } = this.props.controls.addControls;

    return (
      <div className="addit-pag">
        <div className="addit-pag-elem-wrap">
          <input
            type="number"
            name={year.name}
            min={year.min}
            value={year.value}
            placeholder='Year'
            className="pagination__search"
            onChange={this.dateChange}
          />
        </div>
        <Select entity={month} controlChange={this.changeControls} />
        <Select entity={flags} controlChange={this.changeControls} />
        <Select entity={old} controlChange={this.changeControls} />
      </div>
    );
  }

}

export default connect(
  state => ({
    controls: state.controls,
  }), { changeControls, addControlsUnmount }
)(AdditionalControls);
