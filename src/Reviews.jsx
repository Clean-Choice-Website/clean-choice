// import Testimonial from './components/Testimonial';

import Review from './components/Review';
import StarIcon from './components/StarIcon';

const Reviews = () => {
  return (
    <div className=' bg-slate-100 pb-8'>
      <div className='mb-12 flex flex-col  items-center bg-green-700 py-5'>
        <h1 className='mb-1 text-center text-3xl font-semibold text-white'>
          Testimonials
        </h1>
        <div className='flex gap-1'>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
      </div>
      <div className='mx-4 flex flex-col gap-4'>
        {/* {Array.from({ length: 10 }).map((_, idx) => (
          <Testimonial key={idx}>
            Lorem ipsum dolor sit amet consect etur, adipisicing elit. Non,
            deleniti consectetur nihil quaerat soluta explicabo enim{' '}
            </Testimonial>
        ))} */}
      </div>
      <div className='flex flex-col gap-6'>
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
};

export default Reviews;
