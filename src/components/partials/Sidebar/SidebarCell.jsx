import React, { Component } from 'react';
import SidebarCellDropdown from './SidebarSellDropdown.jsx';
import { Link } from 'react-router-dom';

class SidebarCellFilled extends Component {

  shouldComponentUpdate(nextProps) {
    if(this.props.visibleCell !== nextProps.visibleCell) {
      return true;
    }
    return false;
  }

  revealDropdown = event => {
    this.props.toggleDropdown(this.props.item.id);
  }

  render() {
    const { side, title, id } = this.props.item;
    const isVisibleDropdown = this.props.visibleCell === id ? 'open' : '';
    const heightAtVisible = side.dropLinks.length * 30; // 30px solid height of link
    const height = isVisibleDropdown ? heightAtVisible : 0;

    return (
      <div className={`sidebar__sell ${isVisibleDropdown}`}>
        <div className="sidebar__sell-title-wrap">
          <Link to='#' className="sidebar__sell-title-link" onClick={this.revealDropdown}>
            <i className={`fas fa-${side.icon} sidebar__cell-left-icon`} />
            <span className="sidebar__sell-title">{title}</span>
            <i className="fas fa-chevron-left sidebar__cell-right-icon" />
          </Link>
        </div>
        <SidebarCellDropdown links={side.dropLinks} title={title} height={height} />
      </div>
    );
  }
}

class SidebarCellVoid extends Component {

  render() {
    const { icon, title, link } = this.props;
    return (
      <div className="sidebar__sell">
        <div className="sidebar__sell-title-wrap">
          <Link to={link} className="sidebar__sell-title-link">
            <i className={`fas fa-${icon} sidebar__cell-left-icon`} />
            <span className="sidebar__sell-title">{title}</span>
          </Link>
        </div>
      </div>
    );
  }
}

export { SidebarCellFilled, SidebarCellVoid };
