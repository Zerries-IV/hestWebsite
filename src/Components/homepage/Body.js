import React from 'react'
import HowToGet from './body/HowToGet' 
import Tokenomic from './body/Tokenomic'
import Hero from './body/Hero'
import WhyHest from './body/WhyHest'
import Footer from './body/Footer'
import FAQ from './body/FAQ'
import RoadMap from './body/RoadMap'
import Partner from './body/Partner'

const Body = () => {
  return (
    <div>
        <Hero />
        <Partner />
        <WhyHest />
        <RoadMap />
        <Tokenomic />
        <HowToGet />
        <FAQ />
        <Footer />
    </div>
  )
}

export default Body
