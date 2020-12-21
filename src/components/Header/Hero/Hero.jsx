import React from 'react'
import Container from '../../hoc/Container';
import Overlay from '../../utility/Overlay';

const Hero = ( { children, img, className } ) => {
	return (
    <>
      <section className={ `relative flex flex-col items-center py-20 text-center ${ className }` }>
        <img
          src={img}
          alt=""
          className="absolute inset-0 object-cover object-center w-full h-full"
        />

        <Overlay className="bg-black opacity-50" />

        <Container className="z-10 text-white sm:py-28">{children}</Container>
      </section>
    </>
  );
}

export default Hero
