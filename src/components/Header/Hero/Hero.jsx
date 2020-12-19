import React from 'react'

const Hero = ( { children, img } ) => {
	return (
    <>
      <section className="relative flex flex-col items-center px-4 py-20 text-center md:px-6">
        <img
          src={img}
          alt=""
          className="absolute inset-0 object-cover object-center w-full h-full"
        />

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="z-10 text-white sm:py-28 md:container md:mx-auto">
          {children}
        </div>
      </section>
    </>
  );
}

export default Hero
