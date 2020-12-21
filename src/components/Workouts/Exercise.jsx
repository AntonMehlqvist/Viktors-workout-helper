import React from 'react'
import { H2 } from '../Typography/Typography'

const Exercise = ( { index, exerciseData: { title, image, sets, reps, description } } ) => {
	return (
    <li>
      <H2 className="mb-4 italic text-gray-800">
        Exercise {index}: {title}
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
      <p className="mb-9">{description}</p>
    </li>
  );
}

export default Exercise
