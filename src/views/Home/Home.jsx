import React from 'react'
import WorkoutGrid from '../../components/Workouts/WorkoutGrid/WorkoutGrid';
import HeroSection from './HeroSection'

const Home = ( props ) => {
	console.log( props );
	return (
		<>
			<HeroSection />
			<WorkoutGrid />
		</>
	)
}

export default Home
