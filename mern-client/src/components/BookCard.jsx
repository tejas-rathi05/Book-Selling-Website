import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './BookCard.css';

// import required modules
import { Pagination } from 'swiper/modules';

import { FaCartShopping } from 'react-icons/fa6'

const BookCard = ({headline, books}) => {

  return (
    <div className='my-16 px-4 lg:px-24'>
      <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>

      {/* Cards */}
      <div className='mt-12'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full max-h-full"
      >
        {
          books.map(book => <SwiperSlide key={book._id}><Link to="/">
              <div className='relative'>
                <img src={book.imageURL} alt="" />
                <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                  <FaCartShopping className='w-4 h-4 text-white'/>
                </div>
              </div>
              <div className='mb-12'>
                <div>
                <h3 className='font-bold'>{book.bookTitle}</h3>
                <p className='text-gray-700'>{book.authorName}</p>
                </div>
                <div>
                  <p className='font-semibold'>$10.0</p>
                </div>
              </div>
            </Link>
            </SwiperSlide>)
        }
      </Swiper>
      </div>

    </div>
  )
}

export default BookCard