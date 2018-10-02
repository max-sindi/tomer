import React, { Component } from 'react';

class Select extends Component {

  onChange = e => {
    const { value } = e.target;
    const { name } = this.props.entity;
    this.props.controlChange(name, value);
  }

  render() {
    const { entity } = this.props;

    return (
      <div className="addit-pag-elem-wrap">
        <select
          className="pagination__select"
          value={entity.value}
          name={entity.name}
          onChange={this.onChange}
        >
          {entity.list.map( option => {
            return (
              <option value={option.value} key={option.title}>{option.title}</option>
            )
          })}
        </select>
      </div>
    );
  }

}

export default Select;
