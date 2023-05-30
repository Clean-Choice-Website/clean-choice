/* eslint-disable react/prop-types */
import '../App.css';
import downArrow from '../assets/downArrow.svg';
import menuIcon from '../assets/menuIcon.svg';
import { Link } from 'react-router-dom';
import ServicesDropDown from './ServicesDropDown';
import { useState } from 'react';
import MobileNavbar from './MobileNavbar';
import clearchoicevertical from '../assets/cleanchoicevertical.png';

function Navbar({ openModal }) {
  const [showServices, setShowServices] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className='sticky top-0 z-20 bg-white drop-shadow-sm'>
      <nav className='top-0 z-10 flex items-center justify-between px-9 py-6'>
        <Link to='/'>
          <div className='flex items-center gap-2'>
            <img
              src={clearchoicevertical}
              alt='Clean Choice logo'
              className='w-60'
            />
            {/*    */}
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
        <div className='ml-auto hidden items-center gap-8 md:flex'>
          <Link to='/about'>
            <li className='list-none font-medium'>About Us</li>
          </Link>
          <div
            className='relative flex items-center gap-1'
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <li className='list-none font-medium'>Services</li>
            <img src={downArrow} alt='Down Arrow' className='w-5' />
            {showServices && <ServicesDropDown />}
          </div>
          <Link to='/reviews'>
            <li className='list-none font-medium'>Reviews</li>
          </Link>
          <Link to='/careers'>
            <li className='list-none font-medium'>Careers</li>
          </Link>
          <button onClick={openModal}>
            <li className='list-none font-medium'>Contact Us</li>
          </button>

          <button
            onClick={openModal}
            className='rounded-sm bg-logoGreen  p-2 px-5 font-medium text-white hover:bg-logoGreenHover'
          >
            Get a Quote
          </button>
        </div>
      </nav>
      {/* Mobile Nav */}
      {showMenu && <MobileNavbar setShowMenu={setShowMenu} />}
    </header>
  );
}

export default Navbar;
