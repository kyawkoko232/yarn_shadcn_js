import './swiper-bundle.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { HiArchiveBox,HiUser,HiSquare3Stack3D ,HiChatBubbleOvalLeftEllipsis} from "react-icons/hi2";
import { Link } from 'react-router-dom';

export default function SwiperStart() {
  return (
    <>
     <div className='md:hidden fixed bottom-0 w-full'>
     <Swiper
        slidesPerView={4}
        centeredSlides={false}
        slidesPerGroup={4}
        spaceBetween={0}
        loop={false}
        className="mySwiper text-white h-[50px] bg-slate-900 bg-opacity-90 backdrop-blur-lg">
      
      
        <SwiperSlide className=''>
       

          <Link to="/form">
          <div className="bottom_tab">
            <div className='text-xl'>
            <HiArchiveBox />
            </div>
            <div>
              <span className="text-sm">Form</span>
            </div>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bottom_tab">
            <div className='text-xl'>
            <HiSquare3Stack3D />
            </div>
            <div>
              <span className="text-sm ">Blog</span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bottom_tab">
          <div className='text-xl'>
          <HiChatBubbleOvalLeftEllipsis />
            </div>

            <div>
              <span className="text-xs">Chat</span>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="bottom_tab">
            <div className='text-xl'>
            <HiUser />
            </div>
            <div>
              <span className="text-xs">Profile</span>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="bottom_tab">
            <div className='text-xl'>
            <HiArchiveBox />
            </div>
            <div>
              <span className="text-sm">Local</span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bottom_tab">
            <div className='text-xl'>
            <HiSquare3Stack3D />
            </div>
            <div>
              <span className="text-sm ">Blog</span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bottom_tab">
          <div className='text-xl'>
            <HiSquare3Stack3D />
            </div>

            <div>
              <span className="text-xs">Chat</span>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="bottom_tab">
            <div className='text-xl'>
            <HiUser />
            </div>
            <div>
              <span className="text-xs">Profile</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
     </div>
    </>
  );
}
