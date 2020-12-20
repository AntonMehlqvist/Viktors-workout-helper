import React from 'react'

const Section = ( { children, className } ) => {
	return (
		<section className={ `py-12 md:py-20 ${ className }` }>
			{ children }
		</section>
	)
}

export default Section
