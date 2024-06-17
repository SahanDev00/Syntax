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
      className='w-[90%] lg:w-[80%] xl:w-[50%] h-[200px] mx-auto mt-20 dark:border-purple-400 border-purple-600 border-2 mb-4 opacity-0 transition-opacity duration-700 shadow-xl'
    >
      <div className='py-10'>
        <p className='cta-text  mb-5 dark:text-gray-200 text-white'>
          Have a project in mind? <br className='sm:block hidden' /> Let's build something together!
        </p>
        <Link to='/Contact' className='btn dark:bg-gradient-to-r dark:from-[#1D267D] dark:to-[#402E7A] bg-gradient-to-r from-[#e469ff] to-[#da08ff]'>Contact</Link>
      </div>
    </div>
  );
};

export default Contact;
