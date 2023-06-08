import { useEffect, useState } from 'react';
// import emailjs from 'emailjs-com';
import Review from './components/Review';
import StarIcon from './components/StarIcon';
import { scrollToTop } from './utils/scrollToTop';

const Reviews = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace "YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", and "YOUR_USER_ID" with your actual values
    // emailjs
    //   .sendForm(
    //     'service_ge8matn',
    //     'template_nh0bluk',
    //     e.target,
    //     'bD-Rm5YFO4MwTl9Py'
    //   )
    //   .then(() => {
    //     alert('Your message has been sent successfully!');
    //   })
    //   .catch((error) => {
    //     console.error('Error sending message:', error);
    //   });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

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
      <div className='mt-16 text-center'>
        <h1 className='mb-3 mt-2 text-3xl font-bold'>Leave A Review</h1>
        {/* <p className='mb-4'>We are here for you! How can we help?</p> */}
        <form onSubmit={handleSubmit} className='mx-4 space-y-5'>
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            value={formData.name}
            onChange={handleChange}
            required
            className='w-full rounded-md border border-gray-300 p-2'
          />
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            value={formData.email}
            onChange={handleChange}
            required
            className='w-full rounded-md border border-gray-300 p-2'
          />
          <textarea
            name='message'
            placeholder='Your Message'
            value={formData.message}
            onChange={handleChange}
            required
            className='h-32 w-full rounded-md border border-gray-300 p-2'
          ></textarea>
          <div className='flex justify-start'>
            <button
              type='submit'
              className='mr-4 rounded-sm bg-logoGreen px-6 py-2 font-bold text-white hover:bg-logoGreenHover'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
