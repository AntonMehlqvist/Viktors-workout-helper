import React from 'react'
import Button from '../../components/Elements/Button';
import Hero from '../../components/Header/Hero/Hero';

const HeroSection = () => {
	return (
		<Hero
        img={'https://miro.medium.com/max/14144/1*toyr_4D7HNbvnynMj5XjXw.jpeg'}
				>

        <h1 className="mb-10 text-6xl font-bold leading-tight capitalize md:mb-15 sm:text-7xl lg:text-8xl">
          Välkommen Lil' Vic
        </h1>
        <h3 className="mb-10 text-3xl font-semibold md:mb-14">
          Klicka på knappen och svettas lite skitunge!
        </h3>

        <Button to="/">Klicka då!</Button>
      </Hero>
	)
}

export default HeroSection
