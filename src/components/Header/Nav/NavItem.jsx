import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ( { children, to } ) => {
	return (
    <li className="h-full border-transparent">
      <NavLink
        to={to}
        exact
        className="block h-full px-4 py-4 overflow-hidden transition-all duration-200 border-b-2 border-transparent rounded-sm hover:border-blue-600"
        activeClassName="border-b-2 border-blue-600">
        {children}
      </NavLink>
    </li>
  );
}

export default NavItem
