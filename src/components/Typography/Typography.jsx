import React from 'react'

export const H1 = ( { children, className } ) => (
	<h1
		className={
			`text-3xl font-bold md:text-4xl tracking-wide ${ className }`
		}
	>
		{ children }
	</h1>
);
export const H2 = ( { children, className } ) => (
	<h1
		className={
			`text-2xl font-bold md:text-3xl tracking-wide ${ className }`
		}
	>
		{ children }
	</h1>
);
