import React from 'react';
import { Link } from 'react-router-dom';
import Overlay from '../../utility/Overlay';

const WorkoutCard = ( { workoutData: { title, slug, image, exercises } } ) => {
	return (
    <article className="relative mb-6 overflow-hidden transition-transform rounded-sm shadow-lg sm:mb-0 md:hover:scaleup hover:shadow-sm focus:scaledown focus:shadow-sm">
      <Link
        to={`/traningspass/${slug}`}
        className="inline-block w-full rectangle">
        <Overlay>
          <img
            src={image}
            alt="Workout"
            className="object-cover object-center w-full h-full"
          />
        </Overlay>

        <Overlay className="bg-blue-900 opacity-60" />
        <Overlay className="bg-black opacity-75" />

        <Overlay className="z-10 flex flex-col justify-center px-6 py-3 text-center text-white">
          <h3 className="mb-6 text-2xl font-bold tracking-wide uppercase">
            <i>{title}</i>
          </h3>
          <p className="text-base font-bold tracking-wider md:text-lg text-gray-50">
            Övningar: {exercises.length}
          </p>
        </Overlay>
      </Link>
    </article>
  );
}

export default WorkoutCard
