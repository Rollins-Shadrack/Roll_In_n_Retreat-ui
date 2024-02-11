import React from 'react'
import Hero from './sections/Hero'
import Offers from './sections/Offers'
import Featured from './sections/Featured'
import Cities from '../components/Cities'
import Newsletter from './sections/Newsletter'
import Testimonials from './sections/Testimonials'
import PropertyType from './sections/PropertyType'

const index = () => {
  return (
    <div className="pt-10">
      <Hero />
      <PropertyType/>
      <Offers />
      <Featured />
      <Testimonials/>
      <Newsletter/>
      <Cities/>
    </div>
  )
}

export default index