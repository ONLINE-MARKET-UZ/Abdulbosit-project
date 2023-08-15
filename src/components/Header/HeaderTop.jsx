import Search from '../UI/Cards/Search'
import logo from '../assets/icons/logo-colored.svg'
import Profile from "../assets/icons/profile.svg"
import  Message  from "../assets/icons/message.svg"
import Orders from "../assets/icons/orders.svg"
import Cart from "../assets/icons/my cart.svg"

const HeaderTop = () => {
  return (
    <div className='flex mt-5 gap-[46px]'>
      <ul>
        <a href='#'>
          <img src={logo} alt='logo' />
        </a>
      </ul>

      <Search />

      <ul className='item flex items-center gap-5 ml-[11px]'>
        <li className='item-link flex flex-col items-center gap-1'>
            <img src={Profile} alt="" />
            <p>Profile</p>
        </li>
        <li className='item-link flex flex-col items-center gap-1'>
            <img src={Message} alt="" />
            <p>Message</p>
        </li>
        <li className='item-link flex flex-col items-center gap-1'>
            <img src={Orders} alt="" />
            <p>Orders</p>
        </li>
        <li className='item-link  flex flex-col items-center gap-1'>
            <img src={Cart} alt="" />
            <p>My cart</p>
        </li>
      </ul>
    </div>
  )
}

export default HeaderTop
