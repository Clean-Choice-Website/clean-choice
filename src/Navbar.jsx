import './App.css';
import downArrow from './assets/downArrow.svg';
import menuIcon from './assets/menuIcon.svg';
import { Link } from 'react-router-dom';
import ServicesDropDown from './ServicesDropDown';
import { useState } from 'react';

function Navbar() {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <>
      <nav className='flex items-center justify-between px-12 py-6'>
        <Link to='/'>
          <div className='flex items-center gap-2'>
            {/* <img src="https://cleanchoicewi.com/wp-content/uploads/2015/07/Med-Final.png" /> */}
            <h1 className='text-4xl'>C</h1>
            <h1>CLEAN CHOICE</h1>
          </div>
        </Link>
        <button className='block'>
          <img src={menuIcon} alt='menu dropdown icon' className='w-8' />
        </button>
        <div className='hidden md:block'>
          <ul className='flex gap-8'>
            <Link to='/about'>
              <li className='hover:text-green-600'>About Us</li>
            </Link>
            <div
              className='relative flex items-center gap-1'
              onMouseEnter={() => setShowDropDown(true)}
              onMouseLeave={() => setShowDropDown(false)}
            >
              <li>Services</li>
              <img src={downArrow} alt='Down Arrow' className='w-5' />
              {showDropDown && <ServicesDropDown />}
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
    </>
  );
}

export default Navbar;
