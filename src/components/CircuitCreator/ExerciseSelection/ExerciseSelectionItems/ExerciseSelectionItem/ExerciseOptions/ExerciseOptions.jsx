import React, { useState, useEffect } from 'react'
import ExerciseOption from './ExerciseOption';

const ExerciseOptions = ( { exercise: { minReps, maxReps, time: exerciseTime } } ) => {
	const [ reps, setReps ] = useState( maxReps ?? minReps );
	const [ time, setTime ] = useState( exerciseTime );

	const setOptionsHandler = ( currentValue, value, callback ) => {
		if ( currentValue !== 0 ) {
			callback( value );
		}
	}

	return (
    <ul className="py-4 list-none">
      { time && (
        <ExerciseOption
					name="Time (seconds)"
          currentValue={ time }
          setOption={ ( newValue) => setOptionsHandler( time, newValue, setTime ) }
        />
      ) }

      { reps && (
        <ExerciseOption
					name="Reps"
          currentValue={ reps }
          setOption={ ( newValue ) => setOptionsHandler( reps, newValue, setReps ) }
        />
      ) }
    </ul>
  );
}

export default ExerciseOptions
