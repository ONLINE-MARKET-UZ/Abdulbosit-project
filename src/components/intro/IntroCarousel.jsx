import { Carousel } from "antd"
import carousel from "../assets/images/Carousel.jpg"
const IntroCarousel = () => {
  return (
<div>
  <Carousel className='w-[665px] ml-[90px] mt-[17px]' autoplay>
    <div className='relative'>
      <img src={carousel} alt='Banner' />
      <div className='absolute top-14 left-11'>
        <h3 className='text-[28px] text-[#1C1C1C] '>Latest trending</h3>
        <h2 className='text-[32px] text-[#1C1C1C] font-bold mb-4'>
          Electronic items
        </h2>
        <button className='px-4 py-2 text-base text-[#1C1C1C] font-medium bg-white shadow rounded-md'>
          Learn more
        </button>
      </div>
    </div>
    <div className='relative'>
      <img src={carousel} alt='Banner' />
      <div className='absolute top-14 left-11'>
        <h3 className='text-[28px] text-[#1C1C1C] '>Latest trending</h3>
        <h2 className='text-[32px] text-[#1C1C1C] font-bold mb-4'>
          Electronic items
        </h2>
        <button className='px-4 py-2 text-base text-[#1C1C1C] font-medium bg-white shadow rounded-md'>
          Learn more
        </button>
      </div>
    </div>
    <div className='relative'>
      <img src={carousel} alt='Banner' />
      <div className='absolute top-14 left-11'>
        <h3 className='text-[28px] text-[#1C1C1C] '>Latest trending</h3>
        <h2 className='text-[32px] text-[#1C1C1C] font-bold mb-4'>
          Electronic items
        </h2>
        <button className='px-4 py-2 text-base text-[#1C1C1C] font-medium bg-white shadow rounded-md'>
          Learn more
        </button>
      </div>
    </div>
    <div className='relative'>
      <img src={carousel} alt='Banner' />
      <div className='absolute top-14 left-11'>
        <h3 className='text-[28px] text-[#1C1C1C] '>Latest trending</h3>
        <h2 className='text-[32px] text-[#1C1C1C] font-bold mb-4'>
          Electronic items
        </h2>
        <button className='px-4 py-2 text-base text-[#1C1C1C] font-medium bg-white shadow rounded-md'>
          Learn more
        </button>
      </div>
    </div>
  </Carousel>
</div>

  )
}

export default IntroCarousel;
