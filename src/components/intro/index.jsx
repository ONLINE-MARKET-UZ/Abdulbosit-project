import IntroCarousel from './IntroCarousel'

const index = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='intro_wrapper flex'>
          <div className='card w-full h-[400px] border-2 border-[#DEE2E7] bg-[#fff] rounded-md flex'>
            <ul className='text-[16px] font-[inter] font-medium text-[#505050] ml-[24px] mt-[31px]'>
              <li className='mb-[15px] hover:text-[#ba4c4c] cursor-pointer'>Automobiles</li>
              <li className='mb-[15px] hover:text-[#ba4c4c] cursor-pointer'>Clothes and wear</li>
              <li className='mb-[15px] hover:text-[#ba4c4c] cursor-pointer'>Home interiors</li>
              <li className='mb-[15px] hover:text-[#ba4c4c] cursor-pointer'>Computer and tech</li>
              <li className='mb-[15px] hover:text-[#ba4c4c] cursor-pointer'>Tools, equipments</li>
              <li className='mb-[15px] hover:text-[#ba4c4c] cursor-pointer'>Sports and outdoor</li>
              <li className='mb-[15px] hover:text-[#ba4c4c] cursor-pointer'>Animal and pets</li>
              <li className='mb-[15px] hover:text-[#ba4c4c] cursor-pointer'>Machinery tools</li>
              <li className='mb-[15px]   hover:text-[#ba4c4c] cursor-pointer'>More category</li>
            </ul> 
             <IntroCarousel />
          </div>
        
          <ul>
            <li>
              <div className='card'></div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default index
