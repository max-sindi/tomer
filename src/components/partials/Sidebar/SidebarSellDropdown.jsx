import React from 'react';
import { Link } from 'react-router-dom';

class SidebarCellDropdown extends React.Component {

  render() {
    const { links, title } = this.props;

    return (
      <div className="sidebar__sell-dropdown-wrap" style={{height: `${this.props.height}px`}}>
        <ul className='sidebar__sell-dropdown-list'>
          {links.map(link => (
            <li className="sidebar__sell-dropdown-item" key={link.title}>
              <Link to={`/admin/${title}/${link.path}`} className="sidebar__sell-dropdown-link">
                <i className="fas fa-angle-double-right sidebar__sell-double-angle" />
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SidebarCellDropdown;
