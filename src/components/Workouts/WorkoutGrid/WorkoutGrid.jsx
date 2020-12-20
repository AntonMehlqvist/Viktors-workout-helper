import React from 'react';
import workouts from '../../../workoutData';
import WorkoutCard from './WorkoutCard';
import Container from '../../hoc/Container';
import Section from '../../hoc/Section';

const WorkoutGrid = () => {
	return (
		<Section>
			<Container>
				<h2 className="text-3xl font-bold">Välj ett träningspass</h2>

				<ul className="gap-5 sm:grid sm:grid-cols-2 md:grid-cols-3" >
					{ workouts.map( workout => <WorkoutCard workoutData={ workout } key={ workout.title } /> ) }
				</ul>
			</Container>
		</Section>
	)
}

export default WorkoutGrid
