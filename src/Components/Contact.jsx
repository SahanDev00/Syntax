import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('float-up');
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentContactRef = contactRef.current;

    if (currentContactRef) {
      observer.observe(currentContactRef);
    }

    return () => {
      if (currentContactRef) {
        observer.unobserve(currentContactRef);
      }
    };
  }, []);

  return (
    <div
      ref={contactRef}
      className='w-[90%] lg:w-[80%] xl:w-[50%] h-[200px] mx-auto mt-20 border-purple-600 border-2 mb-4 opacity-0 transition-opacity duration-700 shadow-xl'
    >
      <div className='py-10'>
        <p className='cta-text dark:text-gray-100 mb-5'>
          Have a project in mind? <br className='sm:block hidden' /> Let's build something together!
        </p>
        <Link to='/Contact' className='btn'>Contact</Link>
      </div>
    </div>
  );
};

export default Contact;
