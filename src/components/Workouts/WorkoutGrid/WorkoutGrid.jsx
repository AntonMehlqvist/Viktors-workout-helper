import React from 'react';
import allWorkouts from '../../../workoutData';
import WorkoutCard from './WorkoutCard';
import Container from '../../hoc/Container';
import Section from '../../hoc/Section';
import { H2 } from '../../Typography/Typography';

const WorkoutGrid = ( { match, title } ) => {
	const workouts = allWorkouts.filter( workout => match?.params.postName !== workout.slug );
	return (
		<Section sectionID="workout-grid" >
			<Container>
				<H2 className="mb-6 md:mb-9">{ title ? title : 'Välj ett träningspass' }</H2>

				<ul className="gap-5 sm:grid sm:grid-cols-2 md:grid-cols-3" >
					{ workouts.map( workout => <WorkoutCard workoutData={ workout } key={ workout.title } /> ) }
				</ul>
			</Container>
		</Section>
	)
}

export default WorkoutGrid
