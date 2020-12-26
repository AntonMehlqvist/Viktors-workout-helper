import React from 'react'
import { H3 } from '../../Typography/Typography'
import ExerciseSelectionItems from './ExerciseSelectionItems/ExerciseSelectionItems'

const ExerciseSelection = ( { exercises } ) => {
	return (
		<div className="my-9">
			<H3 className="pb-4">
				Välj dina övningar
			</H3>

			<ExerciseSelectionItems exercises={ exercises } />

		</div>
	)
}

export default ExerciseSelection
