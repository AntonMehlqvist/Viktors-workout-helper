import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home/Home';
import SingleWorkout from '../views/Workouts/SingleWorkout';
import WorkoutArchive from '../views/Workouts/WorkoutArchive';

const Layout = () => {
	return (
    <Switch>
			<Route component={ SingleWorkout } path={ '/traningspass/:postName' } />

			<Route component={ WorkoutArchive } exact path={ '/traningspass' } />

			<Route component={ Home } path="/" />

    </Switch>
  );
}

export default Layout
