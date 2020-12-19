import React from 'react'

const Button = ( { children, passedHref } ) => {
	return (
		<a
			href={ passedHref }
			className="w-full py-3 mt-8 font-bold tracking-wide text-center text-white bg-blue-600 rounded-sm px-7 hover:bg-blue-500 sm:w-max"
		>
			{ children }
		</a>
	)
}

export default Button
