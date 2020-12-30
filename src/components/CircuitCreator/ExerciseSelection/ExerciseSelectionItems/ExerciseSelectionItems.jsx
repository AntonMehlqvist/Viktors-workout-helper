import React from 'react'
import ExerciseSelectionItem from './ExerciseSelectionItem/ExerciseSelectionItem'

const ExerciseSelectionItems = ( { exercises, exercises: { title } } ) => {
	return (
    <div>
      {exercises.map((exercise) => (
        <ExerciseSelectionItem exercise={exercise} key={title} />
      ))}
    </div>
  );
}

export default ExerciseSelectionItems
