import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { FaStar } from 'react-icons/fa6'
import { Avatar } from 'flowbite-react';
import profilePic from '../assets/profile.jpg'

// import './BookCard.css';

// import required modules
import { Pagination } from 'swiper/modules';
const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>

      <div className='ml-10 '>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
          <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2 '>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>

            {/* Text */}
            <div className='mt-7'>
              <p className='mb-5 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto totam ratione iure sed eligendi commodi nesciunt dignissimos praesentium nulla tempora illo omnis consequatur, assumenda quaerat provident distinctio architecto at molestias.</p>
              
              <Avatar img={profilePic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
              <h4 className='text-lg font-medium text-left'>Mark Ping</h4>
              <p className='text-left'>CEO, ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
          <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2 '>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>

            {/* Text */}
            <div className='mt-7'>
              <p className='mb-5 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto totam ratione iure sed eligendi commodi nesciunt dignissimos praesentium nulla tempora illo omnis consequatur, assumenda quaerat provident distinctio architecto at molestias.</p>

              <Avatar img={profilePic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
              <h4 className='text-lg font-medium text-left'>Mark Ping</h4>
              <p className='text-left'>CEO, ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
          <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2 '>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>

            {/* Text */}
            <div className='mt-7'>
              <p className='mb-5 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto totam ratione iure sed eligendi commodi nesciunt dignissimos praesentium nulla tempora illo omnis consequatur, assumenda quaerat provident distinctio architecto at molestias.</p>

              <Avatar img={profilePic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
              <h4 className='text-lg font-medium text-left'>Mark Ping</h4>
              <p className='text-left'>CEO, ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
          <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2 '>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>

            {/* Text */}
            <div className='mt-7'>
              <p className='mb-5 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto totam ratione iure sed eligendi commodi nesciunt dignissimos praesentium nulla tempora illo omnis consequatur, assumenda quaerat provident distinctio architecto at molestias.</p>

              <Avatar img={profilePic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
              <h4 className='text-lg font-medium text-left'>Mark Ping</h4>
              <p className='text-left'>CEO, ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
          <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2 '>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>

            {/* Text */}
            <div className='mt-7'>
              <p className='mb-5 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto totam ratione iure sed eligendi commodi nesciunt dignissimos praesentium nulla tempora illo omnis consequatur, assumenda quaerat provident distinctio architecto at molestias.</p>

              <Avatar img={profilePic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
              <h4 className='text-lg font-medium text-left'>Mark Ping</h4>
              <p className='text-left'>CEO, ABC Company</p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
      </div>
    </div>
  )
}

export default Review