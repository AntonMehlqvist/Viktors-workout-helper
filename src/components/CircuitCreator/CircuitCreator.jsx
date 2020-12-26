import React from 'react'
import Container from '../hoc/Container'
import { H2 } from '../Typography/Typography'
import ExerciseSelection from './ExerciseSelection/ExerciseSelection';

const CircuitCreator = ( { exercises } ) => {
	return (
		<Container className="fixed inset-0 py-6 overflow-y-scroll bg-gray-50">


			<H2>Skapa ditt eget pass</H2>
			<p className="mt-2 mb-5 font-normal leading-normal">
				Välj hur många rundor, vilka övningar och skräddarsy upplägget precis som du vill ha det.
			</p>

			<ExerciseSelection exercises={ exercises } />

		</Container>
  );
}

export default CircuitCreator
