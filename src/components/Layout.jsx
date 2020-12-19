import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HeroSection from '../views/HeroSection';

const Layout = () => {
	return (
    <Switch>
			<Route path="/hej">
				<h1>hej</h1>
			</Route>

			<Route path="/">
				<HeroSection />
			</Route>

    </Switch>
  );
}

export default Layout
