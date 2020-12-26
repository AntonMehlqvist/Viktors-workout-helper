import React from 'react'
import ExerciseSelectionItem from './ExerciseSelectionItem/ExerciseSelectionItem'

const ExerciseSelectionItems = ( { exercises, exercises: { title } } ) => {
	return (
    <div className="border-t-2 border-gray-400">
      {exercises.map((exercise) => (
        <ExerciseSelectionItem exercise={exercise} key={title} />
      ))}
    </div>
  );
}

export default ExerciseSelectionItems
