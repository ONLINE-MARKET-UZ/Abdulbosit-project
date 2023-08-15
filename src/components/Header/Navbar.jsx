import { Input, Button, Space, Select } from 'antd'
import menu from '../assets/icons/menu.svg'
const Navbar = () => {
  return (
    <nav className='mt-[24px] mb-5'>
      <hr />

      <ul className='mt-[17px] flex gap-[25px] mb-[16px] items-center'>
        <li className='text-[16px] font-[inter]'>
          <span className='flex font-[inter] '>
            <img src={menu} alt='menu' />
            All category
          </span>
        </li>
        <li className='text-[16px] font-medium font-[inter]'>Hot offers</li>
        <li className='text-[16px] font-medium font-[inter]'>Gift boxes</li>
        <li className='text-[16px] font-medium font-[inter]'>Projects</li>
        <li className='text-[16px] font-medium font-[inter]'>Menu item</li>
        <li>
            <select className='border-none text-[16px] w-12 font-[inter] bg-[#F7FAFC]'>
              <option selected>Help</option>
              <option value='US'>United States</option>
            </select>
        </li>

        <div className='sort flex ml-[275px] gap-[32px]'>
          <div>
            <select className='border-none text-[16px] font-medium w-22 font-[inter] bg-[#F7FAFC]'>
              <option selected>English, USD</option>
              <option value='US'>United States</option>
            </select>
          </div>

          <div>
            <select className='border-none text-[16px] font-medium w-20 font-[inter] bg-[#F7FAFC]'>
              <option selected>Ship to🏳️‍⚧️</option>
              <option value='US'>United States</option>
            </select>
          </div>
        </div>
      </ul>
        <hr />
    </nav>
  
  )
}

export default Navbar
