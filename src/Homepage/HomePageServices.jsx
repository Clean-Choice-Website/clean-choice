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
                Hiring a professional commercial cleaner ensures a pristine and
                inviting workspace that leaves a lasting impression on clients
                and employees alike, promoting a positive and productive
                environment.
              </ServiceBullet>
              <ServiceBullet serviceName="Carpet Cleaning">
                We use hot water extraction technology and premium carpet
                cleaning chemicals to deliver outstanding results. Our expert
                team ensures deep cleaning, leaving your carpets fresh,
                stain-free, and looking like new again.
              </ServiceBullet>
              <ServiceBullet serviceName="Floor Care & Tile Re-waxing">
                With our expertise in floor care, we'll revitalize your floors,
                bringing back their natural luster and leaving them looking as
                good as new. Expertly strip away old floor finishes, dirt, and
                grime, then apply high-quality wax for a long-lasting, brilliant
                shine that transforms your floors.
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
