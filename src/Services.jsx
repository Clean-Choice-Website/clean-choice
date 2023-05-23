import phone from "./assets/phone.svg";
import email from "./assets/email.svg";
import pin from "./assets/pin.png";
import CleaningImg from "./assets/CommercialCleaning_Header.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <div className="flex w-full flex-col items-center justify-center gap-3 bg-slate-200 py-6 text-sm sm:flex-row sm:gap-7 md:gap-16 md:text-base lg:gap-32">
        <div className="flex items-center gap-2 font-bold">
          <img src={phone} alt="Phone icon" className="w-6" />
          <a href="tel:4143109206">(414)310-9206</a>
        </div>
        <div className="flex items-center gap-2 font-bold">
          <img src={email} alt="Email icon" className="w-7" />
          <p>michelle@cleanchoicewi.com</p>
        </div>
        <div className="flex items-center gap-2 font-bold">
          <img src={pin} alt="Map pin icon" className="w-6" />
          <p>Greendale, WI</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl">
        <section className="flex flex-col items-center justify-between py-4 md:items-start">
          <h1 className="mt-4 text-3xl font-bold md:mx-8">Our Services</h1>
          <div className="mx-8 w-full py-4 md:mx-0">
            <p className="mx-8 rounded-md bg-lime-300 py-4 text-center text-xl font-bold text-white">
              Serving Waukesha and Milwaukee Counties for over 25 years
            </p>
          </div>
          <div className="md:mb-12 md:flex md:max-w-7xl md:flex-row md:items-center md:gap-4">
            <div className="md:ml-8 md:mt-2">
              <img
                className="hidden md:block md:w-auto lg:w-auto"
                src={CleaningImg}
                alt="Cleaning Image"
              />
            </div>
            <div className="md:mr-8">
              <div className="my-4 text-center md:mt-2 md:px-8 md:text-left">
                <h3 className="font-bold">General Cleaning</h3>
              </div>
              <div className="items-start">
                <p className="px-8 py-2 md:pr-4">
                  Our environmentally repsonsible approach focuses on the proper
                  training and use of cleaning solutions as well as proper
                  disposal of any harsh detergents or cleaning compounds. Below
                  are some of the ways we achieve this level of clean:
                </p>
                <div className="mx-8 mt-2">
                  <div>
                    <img
                      className="w-auto md:hidden md:w-60 lg:w-96"
                      src={CleaningImg}
                      alt="Cleaning Image"
                    />
                  </div>
                  <div>
                    <ul className="ml-4 mt-4 list-disc">
                      <li className="mb-2">
                        This service includes this cool stuff that takes about a
                        sentence at least
                      </li>
                      <li className="mb-2">
                        This service includes this cool stuff that takes about a
                        sentence at least
                      </li>
                      <li>
                        This service includes this cool stuff that takes about a
                        sentence at least
                      </li>
                    </ul>
                    <div className="mx-auto mt-4 text-center md:mx-0 md:text-left">
                      <Link>
                        <p className="inline-block rounded bg-gray-800 px-8 py-4 text-center font-bold text-white sm:text-2xl">
                          Get Quote
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:mb-12 md:flex md:max-w-7xl md:flex-row md:items-center md:gap-4">
            <div className="md:ml-8 md:mt-2">
              <img
                className="hidden md:block md:w-auto lg:w-auto"
                src={CleaningImg}
                alt="Cleaning Image"
              />
            </div>
            <div className="md:mr-8">
              <div className="my-4 text-center md:mt-2 md:px-8 md:text-left">
                <h3 className="font-bold">Commercial Cleaning</h3>
              </div>
              <div className="items-start">
                <p className="px-8 py-2 md:pr-4">
                  Our environmentally repsonsible approach focuses on the proper
                  training and use of cleaning solutions as well as proper
                  disposal of any harsh detergents or cleaning compounds. Below
                  are some of the ways we achieve this level of clean:
                </p>
                <div className="mx-8 mt-2">
                  <div>
                    <img
                      className="w-auto md:hidden md:w-60 lg:w-96"
                      src={CleaningImg}
                      alt="Cleaning Image"
                    />
                  </div>
                  <div>
                    <ul className="ml-4 mt-4 list-disc">
                      <li className="mb-2">
                        This service includes this cool stuff that takes about a
                        sentence at least
                      </li>
                      <li className="mb-2">
                        This service includes this cool stuff that takes about a
                        sentence at least
                      </li>
                      <li>
                        This service includes this cool stuff that takes about a
                        sentence at least
                      </li>
                    </ul>
                    <div className="mx-auto mt-4 text-center md:mx-0 md:text-left">
                      <Link>
                        <p className="inline-block rounded bg-gray-800 px-8 py-4 text-center font-bold text-white sm:text-2xl">
                          Get Quote
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex md:max-w-7xl md:flex-row md:items-center md:gap-4">
            <div className="md:ml-8 md:mt-2">
              <img
                className="hidden md:block md:w-auto lg:w-auto"
                src={CleaningImg}
                alt="Cleaning Image"
              />
            </div>
            <div className="md:mr-8">
              <div className="my-4 text-center md:mt-2 md:px-8 md:text-left">
                <h3 className="font-bold">Floor Care {"&"} Tile Re-waxing</h3>
              </div>
              <div className="items-start">
                <p className="px-8 py-2 md:pr-4">
                  Our environmentally repsonsible approach focuses on the proper
                  training and use of cleaning solutions as well as proper
                  disposal of any harsh detergents or cleaning compounds. Below
                  are some of the ways we achieve this level of clean:
                </p>
                <div className="mx-8 mt-2">
                  <div>
                    <img
                      className="w-auto md:hidden md:w-60 lg:w-96"
                      src={CleaningImg}
                      alt="Cleaning Image"
                    />
                  </div>
                  <div>
                    <ul className="ml-4 mt-4 list-disc">
                      <li className="mb-2">
                        This service includes this cool stuff that takes about a
                        sentence at least
                      </li>
                      <li className="mb-2">
                        This service includes this cool stuff that takes about a
                        sentence at least
                      </li>
                      <li>
                        This service includes this cool stuff that takes about a
                        sentence at least
                      </li>
                    </ul>
                    <div className="mx-auto mt-4 text-center md:mx-0 md:text-left">
                      <Link>
                        <p className="inline-block rounded bg-gray-800 px-8 py-4 text-center font-bold text-white sm:text-2xl">
                          Get Quote
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="m-8 flex flex-col items-center justify-center md:mx-8 md:justify-start">
          <p className="mb-6 font-bold">Have a Question regarding a service?</p>
          <Link>
            <p className="inline-block w-32 rounded bg-lime-300 py-2 text-center text-xl font-bold text-white">
              Contact Us
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
