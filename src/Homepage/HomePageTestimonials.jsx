import Testimonial from "../components/Testimonial";
import Button from "../components/Button";
import wavebg from "../assets/wavebg.png";

const HomePageTestimonials = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 ">
        <img
          className="h-full w-full object-cover"
          src={wavebg}
          alt="Woman wiping down a table"
        />
      </div>
      <div className="relative flex flex-col items-center gap-6 px-6 py-20 lg:flex-row-reverse lg:px-10">
        <div className="flex flex-col gap-6 text-center lg:ml-6 lg:w-1/2 lg:items-start lg:px-6 lg:text-left">
          <h3 className="text-4xl font-bold lg:w-96 lg:text-5xl">
            Our Customers love what we do
          </h3>
          <p className="lg:w-3/4 lg:text-lg">
            With over 20+ years in business, we pride ourselves on customer
            service and satisfaction.
          </p>
          <div className="hidden lg:block">
            <Button to={"reviews"}>Read More</Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 lg:w-1/2">
          <Testimonial name="Brandon N.">
            Good service and friendly staff. Staff is very friendly, punctual
            and thorough!
          </Testimonial>
          <Testimonial name="James H.">
            Smooth execution of office carpet cleaning. I highly recommend Clean
            Choice for office carpet cleaning. Timely, accurate, high quality
            service, professionally executed with no impact on daily operations.
          </Testimonial>
          <Testimonial name="Kevin C.">
            Plant Supervisor. Very easy people to work with and very
            accommodating... Thanks for the Great service. I will definitely
            recommend and use again...
          </Testimonial>
        </div>
        <div className="lg:hidden">
          <Button to="reviews">Read More</Button>
        </div>
      </div>
    </section>
  );
};

export default HomePageTestimonials;
