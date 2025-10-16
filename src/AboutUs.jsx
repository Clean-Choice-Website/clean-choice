import ContactInfo from "./components/ContactInfo";
import Alex from "./assets/Alex.jpeg";
import Team from "./assets/team.jpeg";
import Michelle from "./assets/MichelleAbout.png";
import { useEffect, useState } from "react";
import { scrollToTop } from "./utils/scrollToTop";
import { MoonLoader } from "react-spinners";
import { Helmet } from "react-helmet";
const circleDimensions = 350;

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    scrollToTop();

    const imagesToLoad = [Alex, Michelle];
    let loadedCount = 0;

    imagesToLoad.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount += 1;
        if (loadedCount === imagesToLoad.length) {
          setIsLoading(false);
        }
      };
    });
  }, []);

  return (
    <div>
      <Helmet>
        {/* Google Analytics tracking code */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16595064549"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16595064549');
          `}
        </script>
        <title>
          About Clean Choice WI | Milwaukee's Premier Cleaning Service
        </title>
        <meta
          name="description"
          content="Learn about Clean Choice Wisconsin, offering top-notch commercial and office cleaning services in Milwaukee, WI."
        />
      </Helmet>
      {isLoading ? (
        <div className="mt-40 flex h-screen items-start justify-center">
          <MoonLoader color={"#497429"} />
        </div>
      ) : (
        <div>
          <ContactInfo />
          <div className="mx-auto max-w-7xl">
            <section className="flex flex-col items-center justify-between py-4 md:items-start">
              <div className="mx-8 w-full py-4 md:mx-0">
                <h1 className="mx-8 rounded-md bg-logoGreen px-4 py-4 text-center text-xl font-bold text-white sm:px-0">
                  Meet the People Behind Clean Choice
                </h1>
              </div>
              <div className="flex w-full justify-center py-6">
                <img
                  className="w-2/3 max-w-5xl rounded-lg object-cover shadow-md"
                  src={Team}
                  alt="Clean Choice Team"
                />
              </div>
              <div className="md:flex md:max-w-7xl md:flex-row md:gap-4 md:pr-8">
                <div className="items-start">
                  <h2 className="text-center text-3xl font-bold md:mx-8 md:text-left">
                    Our Story
                  </h2>
                  <p className="px-8 py-2 font-bold">
                    Experience the Clean Choice advantage!
                  </p>
                  <p className="px-8 py-2 md:pr-4">
                    In January 2023, Michelle officially acquired Clean Choice
                    and quickly transformed it into a family-run business by
                    bringing two of her cousins on board to help manage the
                    company. Being family-run means we don’t just see this as a
                    business — it’s personal. Together, we combine our shared
                    values, years of experience, and attention to detail to
                    deliver consistent, high-quality cleaning services. Our
                    commitment to each other and to our clients ensures every
                    facility we clean is spotless and exceeds expectations.
                  </p>
                </div>
              </div>
            </section>
            <section className="flex flex-col items-center justify-between py-4 md:items-start">
              <h2 className="text-3xl font-bold md:mx-8">
                Our Mission & Promise
              </h2>
              <div className="items-start">
                <p className="px-8 py-2 font-bold">
                  We care about being your first choice and make it our goal to
                  provide exceptional customer service
                </p>
                <p className="px-8 py-2">
                  At Clean Choice, our mission is to be your first choice for
                  cleaning services and the most trusted premier cleaning
                  company in the greater Milwaukee area. We are committed to
                  providing consistent, top-quality cleaning that creates a safe
                  and healthy environment for your facility. Our promise is
                  simple: to exceed your expectations every time. With a focus
                  on reliability, attention to detail, and a commitment to
                  sustainability, you can trust Clean Choice to deliver
                  exceptional service while caring for your space and the people
                  within it. Experience the Clean Choice difference today—call
                  or email us to get started!
                </p>
              </div>
            </section>
            <section>
              <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-9 py-10 sm:px-16 md:flex-row md:pb-24 lg:py-10 lg:pb-32">
                <div className="relative flex h-64 justify-center md:w-1/2">
                  <svg
                    className="absolute -left-44 -top-24 hidden scale-75 md:-left-8 md:-top-0 md:block md:scale-75 lg:left-20 lg:scale-90"
                    height={`${circleDimensions}`}
                    width={`${circleDimensions}`}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0"
                      y="0"
                      width={`${circleDimensions}`}
                      height={`${circleDimensions}`}
                      rx="10"
                      ry="10"
                      fill="#497429"
                    />
                  </svg>

                  <img
                    className="absolute bottom-10 w-60 max-w-xs md:-left-10 md:-top-0 md:w-72 md:rounded lg:left-12 lg:w-80"
                    src={Michelle}
                    alt="Michelle Lee Picture"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex flex-col gap-6">
                    <h3 className="text-center text-4xl font-semibold md:text-left">
                      Michelle Lee
                    </h3>
                    <h4 className="text-center text-lg font-semibold md:text-left">
                      CEO/President
                    </h4>
                    <p className="font-light">
                      Michelle is a solution-oriented leader with dual degrees
                      in Electrical Engineering from MSOE and FHL University in
                      Northern Germany. Driven by her commitment to Milwaukee’s
                      growth and her passion for creating clean, healthy work
                      environments, Michelle took the helm of Clean Choice to
                      elevate its impact on local businesses. <br />
                      <br /> When she’s not leading the team, Michelle enjoys
                      spoiling her rescue dogs and camping with her family.
                      Under her guidance, Clean Choice continues to grow while
                      maintaining a focus on reliable, high-quality cleaning
                      services that help businesses shine.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-9 py-10 sm:px-16 md:flex-row lg:py-10 lg:pb-32">
                <div className="relative flex h-64 justify-center md:w-1/2">
                  <svg
                    className="absolute -left-44 -top-24 hidden scale-75 md:-left-8 md:-top-0 md:block md:scale-75 lg:left-20 lg:scale-90"
                    height={`${circleDimensions}`}
                    width={`${circleDimensions}`}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0"
                      y="0"
                      width={`${circleDimensions}`}
                      height={`${circleDimensions}`}
                      rx="10"
                      ry="10"
                      fill="#497429"
                    />
                  </svg>
                  <img
                    className="absolute bottom-10 w-60 max-w-xs md:-left-10 md:-top-0 md:w-72 md:rounded lg:left-12 lg:w-80"
                    src={Alex}
                    alt="Alex picture"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex flex-col gap-6">
                    <h3 className="text-center text-4xl font-semibold md:text-left">
                      Alex Bernt
                    </h3>
                    <h4 className="text-center text-lg font-semibold md:text-left">
                      Chief Operating Officer
                    </h4>
                    <p className="font-light">
                      Since taking over as COO of Clean Choice, Alex has been an
                      integral part of the company’s success. With a Business
                      Administration degree from Coe College and a Software
                      Engineering Certificate from Fullstack Academy, he brings
                      a versatile skill set to the team, including experience in
                      coaching, creating and managing websites, overseeing
                      e-commerce channels, and running a business. <br />
                      <br /> An avid CrossFit enthusiast, two-time Boston
                      Marathon finisher, and passionate tennis and pickleball
                      player, Alex brings energy and dedication to everything he
                      does. His leadership, technical expertise, and commitment
                      to excellence ensure Clean Choice delivers high-quality,
                      reliable cleaning services to every client.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <div className="m-8 flex flex-row items-center justify-center gap-6 md:mx-8 ">
              <a href="tel:+14143109206">
                <p className="inline-block w-32 rounded bg-gray-800 py-3 text-center text-xl font-bold text-white transition-all hover:bg-ButtonBlackHover">
                  Call Us
                </p>
              </a>
              <a href="mailto:info@cleanchoicewi.com">
                <p className="inline-block w-32 rounded bg-gray-800 py-3 text-center text-xl font-bold text-white transition-all hover:bg-ButtonBlackHover">
                  Email Us
                </p>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
