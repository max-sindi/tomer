import React, { Component } from 'react';

class PaginFilter extends Component {

  constructor() {
    super();
    this.state = {
      preventGet: false,
      sendedGet: false,
    }
  }

  changeFilter = e => {
    const { value } = e.target;
    const { setPreventGet, tryGet } = this;
    this.props.changeFilter(value);
    // this.props.getProps();

    setPreventGet(true);

    setTimeout( () => {
      setPreventGet(false);
    }, 250);

    setTimeout( () => {
      tryGet();
    }, 350)
  }

  tryGet = () => {
    const { preventGet, sendedGet } = this.state;
    const { setSended } = this;
// debugger
    if( !preventGet && !sendedGet ) {
      this.props.getProps();
      setSended(true);

      setTimeout( () => {
        setSended(false);
      }, 500)
    }

  }

  setPreventGet = bool => {
    this.setState( () => ({
      preventGet: bool,
    }))
  }

  setSended = bool => {
    this.setState( () => ({
      sendedGet: bool,
    }))
  }

  changeListing = (e) => {
    const { value } = e.target;
    this.props.changeListing(value);
    this.props.getProps();
  }

  // only if pressed Enter, send getProps request
  onKeyPress = e => {
    if(e.key !== 'Enter') {
      return;
    }

    this.props.getProps();
  }

  render() {
    const { value } = this.props;

    return (
      <div className="pagination__select-search">
        <select className="pagination__select" onChange={this.changeListing} value={value}>
          <option value={2}>2</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <div>
          <input
            type="search"
            className="pagination__search"
            placeholder="Search"
            onChange={this.changeFilter}
            onKeyPress={this.onKeyPress}
          />
        </div>
      </div>
    );
  }

}

export default PaginFilter;
