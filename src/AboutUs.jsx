import ContactInfo from "./components/ContactInfo";
import CleaningImg from "./assets/AboutUs.png";
import { useEffect, useState } from "react";
import { scrollToTop } from "./utils/scrollToTop";
import { MoonLoader } from "react-spinners";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    scrollToTop();

    // Create a new image and set the source to CleaningImg
    const img = new Image();
    img.src = CleaningImg;
    img.onload = () => {
      // When the image is loaded, update the loading state to false
      setIsLoading(false);
    };
  }, []);

  return (
    <div>
      <Helmet>
        {/* Google Analytics tracking code */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1CGBG1QG79"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-1CGBG1QG79');
          `}
        </script>
        <title>
          Clean Choice Wisconsin About Us | Milwaukee Commercial Cleaning,
          Office Cleaning and Janitorial Services
        </title>
        <meta
          name="description"
          content="Learn about Clean Choice Wisconsin. A commercial cleaning, office cleaning and janitorial services company that operates in the Milwaukee, Wisconsin area."
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
                <h1 className="mx-8 rounded-md bg-logoGreen py-4 text-center text-xl font-bold text-white">
                  Professional Commercial Cleaning, Office Cleaning and
                  Janitorial Services
                </h1>
              </div>
              <div className="md:flex md:max-w-7xl md:flex-row md:gap-4 md:pr-8">
                <div className="items-start">
                  <h1 className="text-center text-3xl font-bold md:mx-8 md:text-left">
                    About Us
                  </h1>
                  <p className="px-8 py-2 font-bold">
                    Experience the Clean Choice advantage!
                  </p>
                  <p className="px-8 py-2 md:pr-4">
                    With over a decade of trusted service, our loyal clientele
                    knows they can rely on us. Our skilled and motivated
                    cleaners uphold the highest standards, delivering top-notch
                    and consistent services. We put our clients first, offering
                    a 24/7 phone line, environmentally responsible practices,
                    and personalized proposals, ensuring absolute satisfaction
                    with every meticulously cleaned facility.
                  </p>
                </div>
                <img
                  className="hidden align-top md:block md:h-64 lg:h-52"
                  src={CleaningImg}
                  alt="Cleaning Image"
                />
              </div>
            </section>
            <section className="flex flex-col items-center justify-between py-4 md:items-start">
              <h1 className="text-3xl font-bold md:mx-8">Our Mission</h1>
              <div className="items-start">
                <p className="px-8 py-2 font-bold">
                  We care about being your first choice and make it our goal to
                  provide exceptional customer service
                </p>
                <p className="px-8 py-2">
                  Our mission is to make Clean Choice the first choice and most
                  trusted premier cleaning business in the greater Milwaukee
                  area. We will provide a safe and healthy environment for our
                  customers through our consistent, top quality cleaning
                  services.
                </p>
              </div>
            </section>
            <section className="flex flex-col items-center justify-between py-4 md:items-start">
              <h1 className=" text-3xl font-bold md:mx-8">Our Promise</h1>
              <div className="items-start">
                <p className="px-8 py-2 font-bold">
                  Feel confident that Clean Choice can exceed your expectations
                  and truly be <q>Your First Choice</q> in regards to all of
                  your cleaning needs.
                </p>
                <p className="px-8 py-2">
                  At Clean Choice, our focus is on providing exceptional
                  janitorial services with an environmentally responsible
                  approach. With our commitment to cleanliness and
                  sustainability, you can trust us to deliver the highest
                  quality of service while caring for your facilities and the
                  well-being of those within.
                </p>
              </div>
            </section>
            <div className="m-8 flex flex-row items-center justify-center gap-6 md:mx-8 md:justify-start">
              <a href="tel:+14143109206">
                <p className="inline-block w-32 rounded bg-gray-800 py-3 text-center text-xl font-bold text-white transition-all hover:bg-ButtonBlackHover">
                  Call Us
                </p>
              </a>
              <a href="mailto:michelle@cleanchoicewi.com">
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
