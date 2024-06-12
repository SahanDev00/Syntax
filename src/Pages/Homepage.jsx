import React from 'react';
import Offers from '../Components/Offers';
import Offers2 from '../Components/Offers2';
import Hero from '../Components/Hero';
import Slider from '../Components/Slider';
import Contact from '../Components/Contact';

const Homepage = () => {
  return (
    <div>
      <Hero/>
      <Slider/>
      <Offers/>
      <Offers2/>
      <Contact/>
    </div>
  );
};

export default Homepage;

