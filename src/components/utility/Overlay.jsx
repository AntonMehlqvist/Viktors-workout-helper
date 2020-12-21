import React from 'react';

const Overlay = ( { className, children } ) => (
	<div className={ `absolute inset-0 ${ className }` }>
		{ children }
	</div>
)

export default Overlay
