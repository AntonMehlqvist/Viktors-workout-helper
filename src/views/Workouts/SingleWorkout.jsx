import React from 'react';
import Exercise from '../../components/Workouts/Exercise';
import workouts from '../../workoutData';
import { H1 } from '../../components/Typography/Typography'
import Container from '../../components/hoc/Container';
import WorkoutGrid from '../../components/Workouts/WorkoutGrid/WorkoutGrid';

const SingleWorkout = ( { match } ) => {
	const [ workout ] = workouts.filter( workout => match.params.postName === workout.slug );

	const { title, image, description, exercises } = workout;

	return (
    <>
      <div className="md:px-6 md:max-w-screen-xl md:mx-auto">
        <img
          src={image}
          alt="featured"
          className="w-full md:mt-20 md:rounded-xl md:shadow-md"
        />
      </div>

      <Container>
        <div className="max-w-2xl py-6 mx-auto md:py-12">
          <H1 className="mb-3 md:mb-5">{title}</H1>

          <p className="mb-12 font-normal leading-normal md:mb-15">
            {description}
          </p>

          <ul className="my-6">
            {exercises.map((exercise, index) => (
              <Exercise
                exerciseData={exercise}
                index={index + 1}
                isLastExercise={index + 1 === exercises.length}
                key={exercise.title}
              />
            ))}
          </ul>
        </div>

      </Container>

			<WorkoutGrid title="Fler träningspass" match={ match } />
    </>
  );
}

export default SingleWorkout
