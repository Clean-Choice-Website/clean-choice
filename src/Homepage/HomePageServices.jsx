import ServiceBullet from "../components/ServiceBullet";
import Button from "../components/Button";

const HomePageServices = ({ mopping }) => {
  return (
    <section className=" bg-gray-50">
      <div className="mx-auto max-w-6xl">
        <div className="mx-4 max-w-5xl md:ml-8 lg:mx-20">
          <h3 className="py-12 text-center text-5xl font-bold md:ml-10 md:text-left">
            Our Services
          </h3>
          <div className="flex items-center gap-20">
            <ul className="flex w-full flex-col gap-6 md:w-2/3">
              <ServiceBullet serviceName="Commercial Cleaning">
                Customized commercial cleaning services are designed to fit
                seamlessly into your business schedule. Recurring cleaning
                ensures a pristine and inviting workspace that leaves a lasting
                impression on clients and employees alike.
              </ServiceBullet>
              <ServiceBullet serviceName="Carpet Cleaning & Floor Scrubbing">
                Our carpet cleaning process uses hot water extraction technology
                and premium chemicals to get your carpets fresh, stain-free, and
                looking like new again. Our meticulous floor scrubbing process
                effectively tackles stubborn dirt and grime that regular mopping
                can't handle.
              </ServiceBullet>
              <ServiceBullet serviceName="One-Time Deep Cleaning">
                Our deep cleaning service revitalizes your facility leaving it
                refreshed and renewed. With our flexibility and no long term
                contracts, we can create a budgeted plan tailored to your
                specific needs.
              </ServiceBullet>
            </ul>
            <div className="hidden md:block md:w-1/2 lg:w-1/3">
              <img
                className="w-full rounded"
                src={mopping}
                alt="Man mopping a white tile floor"
              />
            </div>
          </div>
          <div className="flex justify-center py-12 md:ml-10 md:justify-start">
            <Button to={"services"}>All Services</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageServices;
