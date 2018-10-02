import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TableRow, TableCell, TableCellEdit, TableCellDelete } from '../../Tables';
import cellClassnames from './cellsClassNames';
import { getAgentName } from '../../../../redux/actions/properties';

class PropsAllTableRow extends Component {

  componentWillMount = () => {
    // const agentId = this.props.data.agentId;
    //
    // if(agentId) {
    //   this.props.getAgentName(agentId, this.props.id);
    // }
  }

  render() {
    const { data } = this.props;

    return (
      <TableRow>
        <TableCell text={data.id} addedClass={'properties-teble-cell'} />
        <TableCell text={data.street} addedClass={'properties-teble-cell'} />
        <TableCell text={data.city} addedClass={'properties-teble-cell'} />
        <TableCell text={data.country} addedClass={'properties-teble-cell'} />
        <TableCell text={data.postcode} addedClass={'properties-teble-cell'} />
        <TableCell text={data.agentId} addedClass={'properties-teble-cell'} />
        <TableCell text={data.weeklyPrice} addedClass={'properties-teble-cell'} />
        <TableCell text={data.numBedrooms} addedClass={'properties-teble-cell'} />
        <TableCell text={data.numBathrooms} addedClass={'properties-teble-cell'} />
        <TableCellEdit id={data.id} part={'properties'} />
        <TableCellDelete id={data.id} deleteProperty={this.props.deleteProperty} />
      </TableRow>
    );
  }
}

export default connect(
  state => ({
    properties: state.properties
  }), { getAgentName }
)(PropsAllTableRow);
