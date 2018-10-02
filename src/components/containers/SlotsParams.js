import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SlotParamsForm from './SlotsParamsForm';
import { getProps, putPropChanges } from '../../redux/actions/crudsActions';
import { connect } from 'react-redux';
import { Loader } from 'semantic-ui-react';

class SlotsParams extends Component {

  componentWillMount = () => {
    this.props.getProps({field: 'slotsParams'});
  }

  putPropChanges = () => {
    this.props.putPropChanges('slotsParams')
  }

  render() {
    const { putPropChanges } = this.props;
    const { props, formTemplate } = this.props.slotsParams;

    let form;

    if( !props ) {
      form = <Loader active />
    // if no flags was created yet
    } else if(props.length === 0) {
      form = (
        <SlotParamsForm
          onSubmit={this.putPropChanges}
          initialValues={formTemplate}
        />
      )
    } else {
      form = (
        <SlotParamsForm
          onSubmit={this.putPropChanges}
          initialValues={props[ props.length - 1] }
        />
      )
    }

    return (
      <div className="dash__item" >
        <div className="dash__item-header">
          {form}
          <i className={`fas fa-calendar-alt dash__item-plus-icon`} />
        </div>
        <Link to={`/admin/timeSlots/params`}>
          <div className="dash__item-footer">
              View preveous values
              <i className="fas fa-list-ul dash__item-arrow-icon" />
          </div>
        </Link>
      </div>
    );
  }

}

export default connect(
  state => ({
    slotsParams: state.slotsParams,
  }), { getProps, putPropChanges }
)(SlotsParams);
