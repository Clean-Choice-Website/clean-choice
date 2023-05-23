/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Button = ({ to, children }) => {
  console.log('children', children);

  return (
    <Link to={`/${to}`}>
      <p className='w-52 rounded bg-gray-800 py-4 text-center text-2xl font-bold text-white lg:inline-block'>
        {children}
      </p>
    </Link>
  );
};

export default Button;
