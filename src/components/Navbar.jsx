import '../App.css';
import downArrow from '../assets/downArrow.svg';
import menuIcon from '../assets/menuIcon.svg';
import { Link } from 'react-router-dom';
import ServicesDropDown from './ServicesDropDown';
import { useState } from 'react';
import MobileNavbar from './MobileNavbar';
import logoNoText from '../assets/logo-no-text.png';

function Navbar() {
  const [showServices, setShowServices] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <nav className='flex items-center justify-between px-9 py-6'>
        <Link to='/'>
          <div className='flex items-center gap-2'>
            {/* <img src="https://cleanchoicewi.com/wp-content/uploads/2015/07/Med-Final.png" /> */}
            <img src={logoNoText} alt='Clean Choice logo' className='w-20' />
            <h1 className='text-xl font-bold'>CLEAN CHOICE</h1>
          </div>
        </Link>
        {/* Menu icon Button */}
        <button
          onClick={() => setShowMenu((prev) => !prev)}
          className='block md:hidden'
        >
          <img src={menuIcon} alt='menu dropdown icon' className='w-10' />
        </button>
        {/* Nav links */}
        <div className='hidden md:block'>
          <ul className='flex gap-8'>
            <Link to='/about'>
              <li className='hover:text-green-600'>About Us</li>
            </Link>
            <div
              className='relative flex items-center gap-1'
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <li>Services</li>
              <img src={downArrow} alt='Down Arrow' className='w-5' />
              {showServices && <ServicesDropDown />}
            </div>
            <Link to='/reviews'>
              <li>Reviews</li>
            </Link>
            <Link to='/contact'>
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
      </nav>
      {/* Mobile Nav */}
      {showMenu && <MobileNavbar setShowMenu={setShowMenu} />}
    </header>
  );
}

export default Navbar;
