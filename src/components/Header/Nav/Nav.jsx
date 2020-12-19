import React from 'react'

const Nav = ( { children } ) => {
	return (
    <nav>
      <ul className="flex justify-items">
				{ children }
      </ul>
    </nav>
  );
}

export default Nav
