import React from 'react'

export const H1 = ( { children, className } ) => (
	<h1
		className={
			`text-3xl font-bold md:text-4xl ${ className }`
		}
	>
		{ children }
	</h1>
);
