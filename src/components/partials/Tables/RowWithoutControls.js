import React, { Component } from 'react';
import * as Table from './index.js';
import uuid from 'uuid/v4';

class RowWithoutControls extends Component {
  convertToText(target) {
    const type = typeof target;

    switch(type) {
      case 'boolean':
        return target.toString();

      case 'undefined':
      case 'null':
        return '';

      default:
        return target;
    }
  }

  render() {
    const { fields, prop, addedClass} = this.props;

    return (
      <tr className="table-row">
        {fields.map( field => (
          <Table.TableCell
            text={ this.convertToText( prop[field.name] ) }
            addedClass={addedClass}
            key={prop.id + field.name}
          />
        ))}
      </tr>
    );
  }
}

export default RowWithoutControls;
