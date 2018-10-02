import React, { Component } from 'react';
import * as Table from './index.js';
import uuid from 'uuid/v4';

class Row extends Component {

  render() {
    const {fields, prop, deleteProp, addedClass, part} = this.props;

    return (
      <tr className="table-row">
        {fields.map( field => (
          <Table.TableCell text={prop[field.name]} addedClass={addedClass} key={field.name}/>
        ))}
        <Table.TableCellEdit id={prop.id} part={part} />
        <Table.TableCellDelete id={prop.id} deleteProperty={deleteProp} />
      </tr>
    );
  }

}

export default Row;
