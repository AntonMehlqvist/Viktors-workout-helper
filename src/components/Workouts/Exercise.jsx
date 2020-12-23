import React from 'react'
import { H2 } from '../Typography/Typography'

const Exercise = ( { index, isLastExercise, exerciseData: { title, image, sets, reps, description, } } ) => {
	return (
    <li className={ ! isLastExercise ? 'mb-16' : '' }>
      <H2 className="mb-6 italic text-gray-800">
        <span className="block mb-1 text-xs font-medium leading-3 tracking-wider uppercase lg:text-sm sm:text-base">Exercise {index}</span>
				{title}
      </H2>
      <img
        src={image}
        alt="exercise illustration"
        className="w-full mb-4 rounded-md shadow-sm"
      />
      <p className="mb-1">
        <strong>Sets: </strong> {sets}
      </p>
      <p className="mb-4">
        <strong>Reps: </strong> {reps}
      </p>
      <p>{description}</p>
    </li>
  );
}

export default Exercise
