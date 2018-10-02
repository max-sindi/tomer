import React, { Component } from 'react';
import * as Table from '../partials/Tables';
import { Loader } from 'semantic-ui-react';
import uuid from 'uuid/v4';

class ViewTable extends Component {

  componentDidMount() {
    this.props.getProps();
  }

  render() {
    const {
      addedClass,
      deleteProp,
      fields,
      sortByField,
      filter,
      part,
      props,
    } = this.props;

    let tableBody;

    if(!props) {
      tableBody = (<tr><Loader active as="td"/></tr>)
    } else if (props.length === 0) {
      tableBody = (<tr><td>No data available</td></tr>)
    } else {
      tableBody = props.map( value => {
        return <Table.Row prop={value}
          fields={fields}
          deleteProp={deleteProp}
          addedClass={addedClass}
          part={part}
          key={ value.id }
        />
      })
    }

    return (
      <Table.Table>
        <Table.TableHead>
          {fields.map( (cell, index) => (
            <Table.TableHeadCell
              text={cell.title}
              filterValue={fields[index].name}
              filter={filter}
              sortByField={sortByField}
              filterField={cell.filterField}
              addedClass={addedClass || ''}
              part={part}
              key={cell.title}
            />
          ))}
          <Table.TableHeadCellEdit />
          <Table.TableHeadCellDelete />
        </Table.TableHead>
        <Table.TableBody>
          {tableBody}
        </Table.TableBody>

      </Table.Table>
    );
  }

}

export default ViewTable;
