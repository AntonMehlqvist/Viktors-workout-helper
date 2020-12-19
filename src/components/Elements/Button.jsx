import React from 'react';
import { Link } from 'react-router-dom';

const Button = ( { children, to } ) => {
	return (
		<Link
			to={ to }
			className="inline-block w-full py-3 mt-8 font-bold tracking-wide text-center text-white bg-blue-600 rounded-sm px-7 hover:bg-blue-500 md:w-max"
		>
			{ children }
		</Link>
	)
}

export default Button
