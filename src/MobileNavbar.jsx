import { Link } from 'react-router-dom';
import downArrow from './assets/downArrow.svg';
import phone from './assets/phone.svg';
import { useState } from 'react';

const MobileNavbar = ({ setShowMenu }) => {
  const [showServices, setShowServices] = useState(false);

  return (
    <div className='absolute z-20 h-[calc(100vh_-_100px)] w-full border bg-black bg-opacity-50'>
      <div className=' z-20 w-full border-t-2 border-gray-400 bg-slate-100'>
        <ul className='mx-4 pb-2 text-xl'>
          <Link to='/about'>
            <li
              onClick={() => setShowMenu(false)}
              className='border-b border-gray-300 py-4'
            >
              About Us
            </li>
          </Link>
          <button
            onClick={() => setShowServices((prev) => !prev)}
            className='flex w-full basis-full items-center justify-between border-b border-gray-300 text-left'
          >
            <li className='w-full py-4'>Services</li>
            <img src={downArrow} alt='Down Arrow' className='w-7' />
          </button>

          {showServices && (
            <div className=''>
              <Link to='GeneralCleaning'>
                <li className='border-b border-gray-300 px-5 py-4 text-lg'>
                  General Cleaning
                </li>
              </Link>
              <Link>
                <li className='border-b border-gray-300 px-5 py-4 text-lg'>
                  Commercial Cleaning
                </li>
              </Link>
              <Link>
                <li className='border-b border-gray-300 px-5 py-4 text-lg'>
                  Floor Care & Tile Re-Waxing
                </li>
              </Link>
            </div>
          )}
          <Link>
            <li className='border-b border-gray-300 py-4'>Reviews</li>
          </Link>
          <Link>
            <li className='border-b border-gray-300 py-4'>Contact</li>
          </Link>
          <li className='flex justify-center gap-2 border-b border-gray-300 py-4 text-slate-500'>
            <img src={phone} alt='Phone icon' className='w-6' />
            <a href='tel:4143109206'>(414)310-9206</a>
          </li>
        </ul>
        <Link>
          <div className='m-2 flex justify-center'>
            <p className='mb-3 w-full rounded border-2 border-white bg-green-700 px-8 py-2 text-center text-lg font-bold text-white'>
              Get a Quote
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavbar;
