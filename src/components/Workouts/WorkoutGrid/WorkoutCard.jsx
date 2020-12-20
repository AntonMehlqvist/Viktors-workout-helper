import React from 'react';
import { Link } from 'react-router-dom';
import Overlay from '../../utility/Overlay';

const WorkoutCard = ( { workoutData: { title, slug, image, exercises } } ) => {
	return (
    <article className="relative transition-transform rounded-sm shadow-lg md:hover:scaleup hover:shadow-sm">
      <Link
        to={`/traningspass/${slug}`}
        className="inline-block w-full rectangle">
        <img
          src={image}
          alt="Workout"
          className="absolute inset-0 object-cover object-center w-full h-full"
        />

        <Overlay className="bg-red-900 opacity-30" />
        <Overlay className="bg-black opacity-70" />

        <div className="absolute inset-0 z-10 text-white">
          <h3>{title}</h3>
          <p>Exercises: {exercises.length}</p>
        </div>
      </Link>
    </article>
  );
}

export default WorkoutCard
