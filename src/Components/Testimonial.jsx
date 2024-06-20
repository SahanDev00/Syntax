import React from 'react';
import pic from '../Assets/icons/grave.svg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const reviews = [
    {
      name: 'demo name 1',
      text: 'demo text 1 demo text 1 demo text 1 demo text 1 demo text 1 demo text 1 demo text 1 demo text 1 demo text 1 demo text 1 demo text 1 demo text 1 ',
      icons: pic
    },
    {
      name: 'demo name 2',
      text: 'demo text 2 demo text 2 demo text 2 demo text 2 demo text 2 demo text 2 demo text 2 demo text 2 demo text 2 demo text 2 demo text 2 demo text 2 ',
      icons: pic
    },
    {
      name: 'demo name 3',
      text: 'demo text 3 demo text 3 demo text 3 demo text 3 demo text 3 demo text 3 demo text 3 demo text 3 demo text 3 demo text 3 demo text 3 demo text 3 ',
      icons: pic
    },
    {
      name: 'demo name 3',
      text: 'demo text 3 demo text 3 demo text 3 demo text 3 demo text 3 demo text 3 demo text 3 demo text 3 demo text 3 demo text 3 demo text 3 demo text 3 ',
      icons: pic
    },
    {
      name: 'demo name 3',
      text: 'demo text 3 demo text 3 demo text 3 demo text 3 demo text 3 demo text 3 demo text 3 demo text 3 demo text 3 demo text 3 demo text 3 demo text 3 ',
      icons: pic
    },
    // Add more reviews as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2900,
    arrows: true,
    responsive: [
        {
          breakpoint: 1280, // screens above 1024px (lg)
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 1024, // screens between 768px and 1024px (md)
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768, // screens below 768px (sm)
          settings: {
            slidesToShow: 1,
          }
        }
      ]
  };

  return (
    <div className='w-[90%] lg:w-[80%] h-[250px] sm:h-[200px] md:h-[300px] lg:h-[350px] xl:h-[300px] 2xl:h-[270px] mt-36 sm:mt-24 md:mt-16 lg:mt-32 mx-auto'>
        <h1 className='text-white dark:text-gray-200 sm:text-3xl text-3xl lg:text-5xl font-bold mb-5'>TESTIMONIALS</h1>
        <Slider {...settings} className='h-full w-[90%] md:w-[90%] text-white mx-auto'>
          {reviews.map((review, index) => (
              <div key={index}>
                  <div className=' md:w-[98%] w-[100%] h-[90%] mt-5 p-4 dark:border-purple-400 border-purple-500 border-2 bg-purple-700 dark:shadow-purple-500 shadow-lg dark:bg-black/10'>
                      <img src={review.icons} alt="" className='mx-auto w-10 h-10 object-contain mt-2 rounded-full border-2 p-1' />
                      <p className='text-sm md:text-lg mx-auto align-middle text-wrap px-2 mt-3'>{review.text}</p>
                      <h1 className='font-semibold text-lg md:text-xl mx-auto mt-2'>: {review.name}</h1>
                  </div>
              </div>
          ))}
        </Slider>
    </div>
  );
};

export default Testimonial;
