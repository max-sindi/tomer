import React, { Component } from 'react';

class TableCell extends Component {

  checkValue = (value) => {
    const type = typeof value;

    switch(type) {
      case 'boolean': {
        return value.toString();
      }

      case 'object': {
        if( Array.isArray(value) ) {
          return value.map( valueObj => {

            let val;

            if( valueObj.number ) {
              val = valueObj.number;
            } else {
              val = valueObj;
            }

            return (
              <span className="td__span" key={val}>
                {val}
              </span>)
          })
        }
      }

      default:
        return value;
    }
  }

  render() {
    const { addedClass, text } = this.props;

    return (
      <td className={`table__cell ${addedClass || ''}`}>
        {this.checkValue(text)}
      </td>
    );
  }

}

export default TableCell;
