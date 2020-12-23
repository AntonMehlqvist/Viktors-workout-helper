import React, { useState } from 'react'
import NavItem from './Nav/NavItem';
import Nav from './Nav/Nav';
import Logo from './Logo';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Container from '../hoc/Container';
import { NavLink } from 'react-router-dom';


const Header = () => {

	const [ isHeaderSticky, setIsHeaderSticky ] = useState( false );

  useScrollPosition( ( { currPos } ) => {
			const shouldBeSticky = ( currPos.y > window.innerHeight );

      if ( shouldBeSticky === isHeaderSticky ) {
				return;
			}

			if ( isHeaderSticky && currPos.y === 0 ) {
				setIsHeaderSticky( false );
				return;
			}

			if( shouldBeSticky !== isHeaderSticky ) {
				setIsHeaderSticky( true );
			}

    }, [ isHeaderSticky ], false, true
	);

	return (
    <header
      className={`${
        isHeaderSticky ? 'fixed animate-slideDown' : ''
      } left-0 right-0 shadow-sm bg-white z-50`}>
      <Container className="flex justify-between px-4 md:px-6">
        <NavLink to="/">
          <Logo />
        </NavLink>

        <Nav>
          <NavItem exact to="/">Hem</NavItem>
          <NavItem to="/traningspass">Träningspass</NavItem>
        </Nav>
      </Container>
    </header>
  );
}

export default Header
