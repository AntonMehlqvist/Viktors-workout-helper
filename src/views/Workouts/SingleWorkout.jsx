import React from 'react';
import Exercise from '../../components/Workouts/Exercise';
import workouts from '../../workoutData';
import { H1 } from '../../components/Typography/Typography'
import Container from '../../components/hoc/Container';
import Section from '../../components/hoc/Section';

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

      <Section className="max-w-2xl px-4 mx-auto md:px-0">
          <H1 className="mb-6 md:mb-9">{title}</H1>

          <ul className="my-6">
            {exercises.map((exercise) => (
              <Exercise exerciseData={exercise} key={exercise.title} />
            ))}
          </ul>
      </Section>
    </Container>
  );
}

export default SingleWorkout
