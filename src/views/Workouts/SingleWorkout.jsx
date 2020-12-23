import React from 'react';
import Exercise from '../../components/Workouts/Exercise';
import workouts from '../../workoutData';
import { H1 } from '../../components/Typography/Typography'
import Container from '../../components/hoc/Container';

const SingleWorkout = ( { match } ) => {
	const [ workout ] = workouts.filter( workout => match.params.postName === workout.slug );

	const { title, image, description, exercises } = workout;

	return (
    <>
      <div className="md:px-6 md:container md:mx-auto">
        <img
          src={image}
          alt="featured"
          className="w-full md:mt-20 md:rounded-xl md:shadow-md"
        />
      </div>

      <Container>
        <div className="max-w-2xl py-6 mx-auto md:py-9">
          <H1 className="mb-3 md:mb-5">{title}</H1>

          <p className="mb-12 font-normal leading-normal md:mb-15">{description}</p>

          <ul className="my-6">
            {exercises.map((exercise, index) => (
              <Exercise
                exerciseData={exercise}
                index={index + 1}
                key={exercise.title}
              />
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
}

export default SingleWorkout
