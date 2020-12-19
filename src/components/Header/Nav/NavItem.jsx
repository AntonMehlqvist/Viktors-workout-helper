import React from 'react'

const NavItem = ( { children } ) => {
	return (
    <li className="transition-all duration-200 border-b-2 border-transparent hover:border-blue-400">
      <a href="/" className="block px-4 py-4">
        {children}
      </a>
    </li>
  );
}

export default NavItem
