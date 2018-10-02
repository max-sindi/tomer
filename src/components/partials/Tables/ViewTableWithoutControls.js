import React, { Component } from 'react';
import RowWithoutControls from './RowWithoutControls';
import * as Table from './index.js';
import { Loader } from 'semantic-ui-react';

class ViewTableWithoutControls extends Component {

  componentWillMount() {
    this.props.getProps();
  }

  componentWillUnmount() {
    this.props.stopViewAll(this.props.part);
  }

  render() {
    const {
      addedClass,
      fields,
      part,
      props,
    } = this.props;

    let tableBody;

    if(!props) {
      tableBody = (<tr><Loader active as="td"/></tr>)
    } else if (props.length === 0) {
      tableBody = (<tr><td>No data available</td></tr>)
    } else {
      tableBody = props.map( (value, index) => (
        <RowWithoutControls prop={value}
          fields={fields}
          addedClass={addedClass}
          part={part}
          key={ props[index].id }
        />
      ))
    }


    return (
      <Table.Table>
        <Table.TableHead>
          {fields.map( (cell, index) => (
            <Table.TableHeadCellWithoutControls
              text={cell.title}
              addedClass={addedClass || ''}
              key={cell.title}
            />
          ))}
        </Table.TableHead>
        <Table.TableBody>
          {tableBody}
        </Table.TableBody>
      </Table.Table>
    );
  }

}

export default ViewTableWithoutControls;
