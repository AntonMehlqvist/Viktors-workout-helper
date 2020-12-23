import React from 'react'

const Container = ( { children, className } ) => (
	<div className={ `max-w-screen-xl md:mx-auto px-4 md:px-6 ${ className }` }>
		{ children }
	</div>
)

export default Container
