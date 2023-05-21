/* eslint-disable react/prop-types */
import check from '../assets/checkIcon.svg';
import { useState } from 'react';

const ServiceBullet = ({ serviceName, children }) => {
  const [expandDescription, setExpandDescription] = useState(false);

  const shortDescription =
    children.length > 100 ? children.slice(0, 101) : children;

  return (
    <li className='mx-auto flex items-center gap-3'>
      <img className='w-8' src={check} alt='check mark icon' />
      <div className=''>
        <p className='text-lg font-bold'>{serviceName}</p>
        <p>
          {expandDescription ? children : shortDescription}{' '}
          <span>
            <button
              onClick={() => setExpandDescription((prev) => !prev)}
              className='underline'
            >
              {expandDescription ? 'collapse' : 'read more...'}
            </button>
          </span>
        </p>
      </div>
    </li>
  );
};

export default ServiceBullet;
