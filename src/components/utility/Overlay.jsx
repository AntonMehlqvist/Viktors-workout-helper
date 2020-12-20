import React from 'react';

const Overlay = ( { className } ) => (
	<div className={ `absolute inset-0 ${ className }` }></div>
)

export default Overlay
