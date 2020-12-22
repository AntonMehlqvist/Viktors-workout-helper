import React from 'react';
import Exercise from '../../components/Workouts/Exercise';
import workouts from '../../workoutData';
import { H1 } from '../../components/Typography/Typography'
import Container from '../../components/hoc/Container';

const SingleWorkout = ( { match } ) => {
	const [ workout ] = workouts.filter( workout => match.params.postName === workout.slug );

	const { title, image, exercises } = workout;

	return (
    <Container className="md:px-6">
      <img
        src={image}
        alt="featured"
        className="w-full mx-auto mt-12 md:mt-20 md:rounded-xl md:shadow-md"
      />

      <div className="max-w-2xl px-4 py-6 mx-auto md:py-9 md:px-0">
          <H1 className="mb-9 md:mb-12">{title}</H1>

          <ul className="my-6">
            {exercises.map( ( exercise, index ) => (
              <Exercise exerciseData={exercise} index={ index + 1 } key={exercise.title} />
            ))}
          </ul>
      </div>
    </Container>
  );
}

export default SingleWorkout
