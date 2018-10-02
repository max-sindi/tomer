import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'

class Crumbs extends Component {

  createCrumbs = () => {
    const { params, url } = this.props.match;
    const crumbs = [];
    const { id } = params;

    const parts = url.split('/');
    // avoid empty parts
    const validParts = parts.filter(item => item.trim().length > 0);
    // remove basic 'admin' link, which exist by default in component
    validParts.splice(0,1);


    for(let i = 0; i < validParts.length; i++) {
      const partOfPath = validParts[i];

      if(i === 0) {
        crumbs.push({
          title: partOfPath,
          link: `${ partOfPath }/`,
        })

        continue;
      }

      if( id && id === partOfPath ) {
        crumbs.push({
          title: partOfPath,
          link: `${validParts[i-1]}/${partOfPath}/edit`
        })

        break;
      }

      crumbs.push({
        title: partOfPath,
        link: `${validParts[i-1]}/${partOfPath}/`
      })
    }

    return crumbs;
  }

  render() {
    // you can pull own crumbs array, or, if it absent, they will be created by parsing url
    // crumbs must have an array of object, each consisting fields: title as name in html and link as relative path
    const crumbs = this.props.crumbs || this.createCrumbs();

    return (
      <ul className="page-heading__crumbs">
        <li className="page-heading__crumbs-item">
          <Link to="/admin">
            Dashboard
          </Link>
        </li>
        {crumbs.map(item => (
          <li className="page-heading__crumbs-item" key={item.title}>
            <i className="fas fa-angle-left page-heading__crumbs-icon" />
            <Link to={`/admin/${item.link}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

}

export default withRouter(Crumbs);
