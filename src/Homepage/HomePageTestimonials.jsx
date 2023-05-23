import Testimonial from '../components/Testimonial';
import Button from '../components/Button';

const HomePageTestimonials = () => {
  return (
    <section>
      <div className='flex w-full flex-col items-center gap-6 px-6 py-20 lg:flex-row-reverse lg:px-10'>
        <div className='flex flex-col gap-6 text-center lg:ml-6 lg:w-1/2 lg:items-start lg:px-6 lg:text-left'>
          <h3 className='text-4xl font-bold lg:w-96  lg:text-5xl'>
            Our Customers love what we do
          </h3>
          <p className='lg:w-3/4 lg:text-lg'>
            With over 20+ years in business, we pride ourselves on customer
            service and satisfaction.
          </p>
          <div className='hidden lg:block'>
            <Button>Read more</Button>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-5 lg:w-1/2'>
          <Testimonial>
            This was the best cleaning service {`I've`} ever had. Michelle and
            her team were amazing!!!
          </Testimonial>
          <Testimonial>
            This was the best cleaning service {`I've`} ever had. Michelle and
            her team were amazing!!!
          </Testimonial>
          <Testimonial>
            This was the best cleaning service {`I've`} ever had. Michelle and
            her team were amazing!!!
          </Testimonial>
        </div>
        <div className='lg:hidden'>
          <Button to='testimonials'>Read More</Button>
        </div>
      </div>
    </section>
  );
};

export default HomePageTestimonials;
