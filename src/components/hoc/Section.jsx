import React from 'react'

const Section = ( { children, className, sectionID } ) => {
	return (
		<section id={ sectionID && sectionID } className={ `py-12 md:py-20 ${ className }` }>
			{ children }
		</section>
	)
}

export default Section
