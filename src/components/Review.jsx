/* eslint-disable react/prop-types */
const Review = ({ children, name }) => {
  return (
    <div className='mx-auto w-full max-w-5xl'>
      <div className='flex min-h-[150px] justify-center md:mx-0'>
        <div className='mx-4 max-w-[450px] rounded bg-white p-3 shadow-md md:mx-6 md:flex md:w-full md:max-w-none md:flex-row-reverse md:items-center md:px-7 md:py-6'>
          <p className='mb-4 text-sm font-light text-gray-700 md:mb-0 md:w-2/3'>
            {children}
          </p>
          <div className='flex justify-between md:w-1/3 md:flex-row-reverse md:items-center md:justify-end md:gap-4'>
            <div className=''>
              <p className='text-lg font-semibold text-green-800'>{name}</p>
              <p className='text-sm text-gray-500'>Customer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
