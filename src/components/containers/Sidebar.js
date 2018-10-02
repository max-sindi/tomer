import React, { Component } from 'react';
// import { Sidebar } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { toggleSidebarCell } from '../../redux/actions/UI';

import { SidebarCellVoid, SidebarCellFilled } from '../partials/Sidebar/SidebarCell.jsx';
import '../partials/Sidebar/Sidebar.css';

class Side extends Component {

  toggleDropdown = target => {
    this.props.toggleSidebarCell(target);
  }

  shouldComponentUpdate(nextProp) {
    const currentSidebar = this.props.ui.sidebar;
    const nextSidebar = nextProp.ui.sidebar;

    if(
      currentSidebar.isVisible !== nextSidebar.isVisible ||
      currentSidebar.visibleCell !== nextSidebar.visibleCell
      ) {
        return true;
      }

    return false;
  }

  render() {
    const { dashes, itemsArray } = this.props.ui;
    const { isVisible, visibleCell } = this.props.ui.sidebar;
    const isSidebarVisible = isVisible ? 'open' : '';

    return (
        <div className={`left-sidebar ${isSidebarVisible}`}>
          <SidebarCellVoid link="/admin" icon="tachometer-alt" title="Dashboard" />
          {itemsArray.map(item => (
            <SidebarCellFilled item={dashes[item]} key={item} toggleDropdown={this.toggleDropdown} visibleCell={visibleCell} />
          ))}
          {/* <SidebarCellVoid link="/admin/filters/flags" icon="cog" title="User Flags" />
          <SidebarCellVoid link="/admin/timeSlots/params" icon="calendar-alt" title="Viewing Slots Params" /> */}
          <SidebarCellVoid link="/admin/settings" icon="cog" title="Settings" />
        </div>
    );
  }

}

export default connect(
  state => ({
    ui: state.ui,
  }), { toggleSidebarCell }
)(Side);
