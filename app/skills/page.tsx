'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel,EffectCards, EffectCoverflow } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
let Im=({src}:{src:string})=>{
  return <Image
  alt='image'
  height={400}
  width={300}
  src={`/${src}`}
  />
}

let array=[1,2,3,4,5,6,7,<Im src={'logo.png'}/>,<Im src='vercel.svg'/>]
export default function Works ()  {
  return (
    <div >

    <Swiper
    className='w-[600px]  text-center'
 
    id="swiper"
   direction='horizontal'
        spaceBetween={0}
        slidesPerView={1}
        
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        coverflowEffect={{
          rotate: 70,
          stretch: 0,
        
          modifier: 1,
        
        }}
       
          pagination={{
            clickable: true,
          }}
         mousewheel={false}
         effect='cards'
          modules={[Mousewheel,EffectCoverflow,EffectCards]}
       
        
        loop={true}>


        </Swiper>
        </div>
  );
};