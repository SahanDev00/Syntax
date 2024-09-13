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
          <title>SyntaxWare Solutions | Best software company in Sri Lanka, Kurunegala, Colombo.</title>

            {/* Meta Description for Search Engines */}
            <meta name="description" content="SyntaxWare Solutions is the best software company in Sri Lanka, specializing in 3d website development, 3d web development, POS systems, payroll systems, and custom software solutions. Serving Kurunegala, Colombo, and beyond. Using cutting edge technologies. React.JS , Tailwind.CSS , 3d websites, three.js, MERN stack, Web api." />

            {/* Keywords for SEO */}
            <meta name="keywords" content="best software company in Sri Lanka, Kurunegala software company, Colombo software company, POS systems Sri Lanka, payroll systems Sri Lanka, custom software solutions Sri Lanka, web development company, web development companies in sri lanka, website development companies in sri lanka, website development companies in kurunegala, website development companies in sri lanka, 3d website. MERN stack company., E-Commerce websites, E-commerce website companies." />
                        {/* Open Graph for Social Media */}
                        <meta property="og:title" content="SyntaxWare Solutions | Best Software Company in Sri Lanka | Kurunegala & Colombo" />
            <meta property="og:description" content="Expert software solutions for businesses in Sri Lanka. We provide top-notch POS systems, payroll systems, and customized software solutions." />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://syntaxware.netlify.app" />

            {/* Twitter Cards for Twitter */}
            <meta name="twitter:title" content="SyntaxWare | Best Software Company in Sri Lanka | Kurunegala & Colombo" />
            <meta name="twitter:description" content="Leading software company in Sri Lanka, offering POS systems, payroll solutions, and custom software for businesses." />
            <meta name="facebook:image" content="https://www.facebook.com/syntaxware.org/" /> {/* Update with the actual image URL */}
            <meta name="facebook:card" content="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/448390166_122098955360366279_153524139099881966_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=R3vSxu5wWmUQ7kNvgFGG4kT&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYDnRg_UAmMBA_gEuBC9fIFffX6Cvkl30_zsc-ocVEAZ7g&oe=66E9F55D" />
            <meta name="instagram:image" content="https://www.instagram.com/syntaxware/p/C_pSmZsR4eI/" /> {/* Update with the actual image URL */}
            <meta name="tiktok:url" content="https://www.tiktok.com/@syntaxware" /> {/* Update with your actual website URL */}
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

