import React from 'react'
import Carousel from '../components/Carousel'
import Hero from '../components/Hero'
import MovieListing from '../components/ME_Listing_Component'
import EventListing from '../components/ME_Listing_Component'

const Homepage = () => {
  return (
    <>
        <Carousel />
        {/* <Hero /> */}
        <MovieListing />
    </>
  )
}

export default Homepage