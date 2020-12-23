import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ( { children, to, className, exact } ) => {
	return (
    <li className="h-full border-transparent navlink">
      <NavLink
        to={to}
        exact={ exact }
        className={ `flex items-center h-full px-4 py-4 overflow-hidden tracking-wide transition-all duration-200 border-b-2 border-transparent rounded-sm hover:border-blue-600 ${ className }` }
        activeClassName="border-b-2 border-blue-600">
        {children}
      </NavLink>
    </li>
  );
}

export default NavItem
