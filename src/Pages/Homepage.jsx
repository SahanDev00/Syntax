import React from 'react';
import Offers from '../Components/Offers';
import Offers2 from '../Components/Offers2';
import Hero from '../Components/Hero';
import Contact from '../Components/Contact';
import Testimonial from '../Components/Testimonial';
import { Helmet } from 'react-helmet';

const Homepage = () => {
  return (
    <div>
        <Helmet>
          <title>SyntaxWare | Best software company in Sri Lanka, Kurunegala, Colombo.</title>

            {/* Meta Description for Search Engines */}
            <meta name="description" content="SyntaxWare is the best software company in Sri Lanka, specializing in 3d website development, 3d web development, POS systems, payroll systems, and custom software solutions. Serving Kurunegala, Colombo, and beyond. Using cutting edge technologies. React.JS , Tailwind.CSS , 3d websites, three.js, MERN stack, Web api." />

            {/* Keywords for SEO */}
            <meta name="keywords" content="best software company in Sri Lanka, Kurunegala software company, Colombo software company, POS systems Sri Lanka, payroll systems Sri Lanka, custom software solutions Sri Lanka, web development company, web development companies in sri lanka, website development companies in sri lanka, website development companies in kurunegala, website development companies in sri lanka, 3d website. MERN stack company., E-Commerce websites, E-commerce website companies." />
        </Helmet>
      <Hero/>
      <Offers/>
      <Offers2/>
      <Testimonial/>
      <Contact/>
    </div>
  );
};

export default Homepage;

