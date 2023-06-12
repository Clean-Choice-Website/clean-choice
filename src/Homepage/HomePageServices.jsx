import mopping from "../assets/mopping.jpg";
import ServiceBullet from "../components/ServiceBullet";
import Button from "../components/Button";

const HomePageServices = () => {
  return (
    <section className=" bg-gray-50">
      <div className="mx-auto max-w-6xl">
        <div className="mx-4 max-w-5xl md:mx-20">
          <h3 className="py-12 text-center text-5xl font-bold md:text-left">
            Our Services
          </h3>
          <div className="flex items-center gap-20">
            <ul className="flex w-full flex-col gap-6 md:w-2/3">
              <ServiceBullet serviceName="Commercial Cleaning">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                quos quo inventore enim saepe debitis accusantium reprehenderit
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                quos quo inventore enim saepe debitis accusantium reprehenderit
              </ServiceBullet>
              <ServiceBullet serviceName="Carpet Cleaning">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                quos quo inventore enim saepe debitis accusantium reprehenderit
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                quos quo inventore enim saepe debitis accusantium reprehenderit
              </ServiceBullet>
              <ServiceBullet serviceName="Floor Care & Tile Re-waxing">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                quos quo inventore enim saepe debitis accusantium reprehenderit
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                quos quo inventore enim saepe debitis accusantium reprehenderit
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
