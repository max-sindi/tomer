// import React, { Component } from 'react';
// import Row from './Row';
// import * as Table from './index.js';
// import { Loader } from 'semantic-ui-react';
// import uuid from 'uuid/v4';
//
// class ViewTable extends Component {
//
//   componentWillMount() {
//     this.props.getProps();
//   }
//
//   componentWillUnmount() {
//     this.props.stopViewAll(this.props.part);
//   }
//
//   render() {
//     const {
//       addedClass,
//       deleteProp,
//       fields,
//       filtering,
//       filter,
//       part,
//       props,
//     } = this.props;
//
//     let tableBody;
//
//     if(!props) {
//       tableBody = (<tr><Loader active as="td"/></tr>)
//     } else if (props.length === 0) {
//       tableBody = (<tr><td>No data available</td></tr>)
//     } else {
//       tableBody = props.map( value => (
//         <Row prop={value}
//           fields={fields}
//           deleteProp={deleteProp}
//           addedClass={addedClass}
//           part={part}
//           key={ value.id }
//         />
//       ))
//     }
//
//     return (
//       <Table.Table>
//         <Table.TableHead>
//           {fields.map( (cell, index) => (
//             <Table.TableHeadCell
//               text={cell.title}
//               filterValue={fields[index].name}
//               filter={filter}
//               filtering={filtering}
//               filterField={cell.filterField}
//               addedClass={addedClass || ''}
//               part={part}
//               key={cell.title}
//             />
//           ))}
//           <Table.TableHeadCellEdit />
//           <Table.TableHeadCellDelete />
//         </Table.TableHead>
//         <Table.TableBody>
//           {tableBody}
//         </Table.TableBody>
//
//       </Table.Table>
//     );
//   }
//
// }
//
// export default ViewTable;
