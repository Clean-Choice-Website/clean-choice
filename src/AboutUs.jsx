import phone from "./assets/phone.svg";
import email from "./assets/email.svg";
import pin from "./assets/pin.png";
import { Link } from "react-router-dom";

const AboutUs = () => {
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
        <section className="flex flex-col items-center justify-between py-4">
          <h1 className=" text-3xl font-bold">About Us</h1>
          <div className="mx-8 py-4">
            <p className="rounded-md bg-lime-300 px-8 py-4 text-center text-xl font-bold text-white">
              Serving Waukesha and Milwaukee Counties for over 25 years
            </p>
          </div>
          <div className="items-start text-xs">
            <p className="px-8 py-2">
              Our environmentally repsonsible approach focuses on the proper
              training and use of cleaning solutions as well as proper disposal
              of any harsh detergents or cleaning compounds. Below are some of
              the ways we achieve this level of clean:
            </p>
            <p className="px-8 py-2">
              All of our cleaners are employees and trained to provide only the
              very best in quality cleaning services for your company.
            </p>
            <p className=" px-8 py-2">
              Commercial Cleaning is usually done after business hours and or on
              weekends. We can also accommodate your daytime cleaning needs.
            </p>
          </div>
        </section>
        <section className="flex flex-col items-center justify-between py-4">
          <h1 className=" text-3xl font-bold">Our Mission</h1>
          <div className="items-start text-xs">
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
        <section className="flex flex-col items-center justify-between py-4">
          <h1 className=" text-3xl font-bold">Our Promise</h1>
          <div className="items-start text-xs">
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
        <div className="flex flex-row items-center justify-center gap-6">
          <Link>
            <p className="inline-block w-32 rounded bg-gray-800 py-3 text-center text-xl font-bold text-white">
              Call Us
            </p>
          </Link>
          <Link>
            <p className="inline-block w-32 rounded bg-gray-800 py-3 text-center text-xl font-bold text-white">
              Email Us
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
