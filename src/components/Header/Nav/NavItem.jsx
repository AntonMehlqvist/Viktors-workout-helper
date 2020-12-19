import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ( { children, to } ) => {
	return (
    <li className="transition-all duration-200 border-b-2 border-transparent hover:border-blue-400">
      <Link to={ to } className="block px-4 py-4">
        {children}
      </Link>
    </li>
  );
}

export default NavItem
