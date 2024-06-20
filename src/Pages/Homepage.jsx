import React from 'react';
import Offers from '../Components/Offers';
import Offers2 from '../Components/Offers2';
import Hero from '../Components/Hero';
import Slider from '../Components/Slider';
import Contact from '../Components/Contact';
import Testimonial from '../Components/Testimonial';

const Homepage = () => {
  return (
    <div>
      <Hero/>
      <Slider/>
      <Offers/>
      <Offers2/>
      <Testimonial/>
      <Contact/>
    </div>
  );
};

export default Homepage;

