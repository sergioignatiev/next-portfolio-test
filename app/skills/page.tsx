'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel,EffectCards, EffectCoverflow } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


export default function Works ()  {
  return (
    <div >
      
    <Swiper
    className=' h-[600px]'
 
    id="swiper"
   direction='vertical'
        spaceBetween={0}
        slidesPerView={3}
        
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
         mousewheel={true}
         effect='coverflow'
          modules={[Mousewheel,EffectCoverflow]}
       
        
        loop={true}>
<SwiperSlide className='w-[300px] h-[300px]'><h1 className='text-[200px] w-[300px] bg-[red]'>1</h1></SwiperSlide>
<SwiperSlide className='w-[300px] h-[300px]'><h1 className='text-[200px] w-[300px] bg-[red]'>2</h1></SwiperSlide>
<SwiperSlide className='w-[300px] h-[300px]'><h1 className='text-[200px] w-[300px] bg-[red]'>3</h1></SwiperSlide>
<SwiperSlide className='w-[300px] h-[300px]'><h1 className='text-[200px] w-[300px] bg-[red]'>4</h1></SwiperSlide>

        </Swiper>
        </div>
  );
};