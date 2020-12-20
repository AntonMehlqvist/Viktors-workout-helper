import React from 'react'

const Exercise = ( { exerciseData: { title, image, sets, reps, description } } ) => {
	return (
		<li>
			<h2>{ title }</h2>
			<img
				src={ image }
				alt="exercise illustration"
				className="w-full"
				/>
			<p>{ `Sets: ${ sets }` }</p>
			<p>{ `Repss: ${ reps }` }</p>
			<p>{ description }</p>
		</li>
	)
}

export default Exercise
