import React from 'react'

const Nav = ( { children } ) => {
	return (
    <nav>
      <ul className="flex h-full">
				{ children }
      </ul>
    </nav>
  );
}

export default Nav
