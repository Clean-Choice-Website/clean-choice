import ContactInfo from "./components/ContactInfo";
import CleaningImg from "./assets/AboutUs.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { scrollToTop } from "./utils/scrollToTop";

const AboutUs = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <ContactInfo />
      <div className="mx-auto max-w-7xl">
        <section className="flex flex-col items-center justify-between py-4 md:items-start">
          <h1 className="mt-4 text-3xl font-bold md:mx-8">About Us</h1>
          <div className="mx-8 w-full py-4 md:mx-0">
            <p className="mx-8 rounded-md bg-logoGreen py-4 text-center text-xl font-bold text-white">
              Serving Waukesha and Milwaukee Counties for over 25 years
            </p>
          </div>
          <div className="pr-8 md:flex md:max-w-7xl md:flex-row md:gap-4">
            <div className="items-start">
              <p className="px-8 py-2 md:pr-4">
                Our environmentally repsonsible approach focuses on the proper
                training and use of cleaning solutions as well as proper
                disposal of any harsh detergents or cleaning compounds. Below
                are some of the ways we achieve this level of clean:
              </p>
              <p className="px-8 py-2 md:pr-4">
                All of our cleaners are employees and trained to provide only
                the very best in quality cleaning services for your company.
              </p>
              <p className=" px-8 py-2 md:pr-4">
                Commercial Cleaning is usually done after business hours and or
                on weekends. We can also accommodate your daytime cleaning
                needs.
              </p>
            </div>
            <img
              className="hidden md:block md:w-72"
              src={CleaningImg}
              alt="Cleaning Image"
            />
          </div>
        </section>
        <section className="flex flex-col items-center justify-between py-4 md:items-start">
          <h1 className=" text-3xl font-bold md:mx-8">Our Mission</h1>
          <div className="items-start">
            <p className="px-8 py-2 font-bold">
              We care about being your first choice and make it our goal to
              provide exceptional customer service
            </p>
            <p className="px-8 py-2">
              Clean choice focuses on providing the best janitorial services
              that help reduce contaminants harming our earth and promote
              sustainability. Our envirionmentally responsible approach focuses
              on the proper training and use of cleaning solutions, as well as
              proper disposal of any harsh detergents / cleaning compounds.
            </p>
          </div>
        </section>
        <section className="flex flex-col items-center justify-between py-4 md:items-start">
          <h1 className=" text-3xl font-bold md:mx-8">Our Promise</h1>
          <div className="items-start">
            <p className="px-8 py-2 font-bold">
              Feel confident that Clean Choice can exceed your expectations and
              truly be <q>Your First Choice</q> in regards to all of your
              cleaning needs.
            </p>
            <p className="px-8 py-2">
              Clean choice focuses on providing the best janitorial services
              that help reduce contaminants harming our earth and promote
              sustainability. Our envirionmentally responsible approach focuses
              on the proper training and use of cleaning solutions, as well as
              proper disposal of any harsh detergents / cleaning compounds.
            </p>
          </div>
        </section>
        <div className="m-8 flex flex-row items-center justify-center gap-6 md:mx-8 md:justify-start">
          <a href="tel:+14143109206">
            <p className="inline-block w-32 rounded bg-gray-800 py-3 text-center text-xl font-bold text-white hover:bg-ButtonBlackHover">
              Call Us
            </p>
          </a>
          <a href="mailto:michelle@cleanchoicewi.com">
            <p className="inline-block w-32 rounded bg-gray-800 py-3 text-center text-xl font-bold text-white hover:bg-ButtonBlackHover">
              Email Us
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
