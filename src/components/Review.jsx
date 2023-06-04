import defaultUser from '../assets/default-user.png';

const Review = () => {
  return (
    <div className='mx-auto flex max-w-5xl justify-center'>
      <div className='mx-4 max-w-[320px] rounded bg-white p-3 shadow-md md:mx-6 md:flex md:w-auto md:max-w-none md:flex-row-reverse md:items-center md:px-7 md:py-6'>
        <p className='mb-4 text-sm font-light text-gray-700 md:mb-0 md:w-2/3'>
          Lorem ipsum dolor sit amet consect etur, adipisicing elit. Non,
          deleniti consectetur nihil quaerat soluta explicabo enim Lorem ipsum
          dolor sit amet consect etur, adipisicing elit. Non, deleniti
          consectetur nihil quaerat soluta explicabo enim{' '}
        </p>
        <div className='flex justify-between md:w-1/3 md:flex-row-reverse md:items-center md:justify-end md:gap-4'>
          <div className=''>
            <p className='text-lg font-semibold text-green-800'>Ian Nathan</p>
            <p className='text-sm text-gray-500'>Customer</p>
          </div>
          <img className='w-12 md:h-12' src={defaultUser} alt='User icon' />
        </div>
      </div>
    </div>
  );
};

export default Review;
