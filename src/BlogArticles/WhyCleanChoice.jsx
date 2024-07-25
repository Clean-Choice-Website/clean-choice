import WhyUs from "../assets/CommercialCleaning.png";
import ContactInfo from "../components/ContactInfo";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { scrollToTop } from "../utils/scrollToTop";
import { MoonLoader } from "react-spinners";

const WhyChooseUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imagePromises = [
      new Promise((resolve) => {
        const img1 = new Image();
        img1.src = WhyUs;
        img1.onload = resolve;
      }),
    ];

    Promise.all(imagePromises).then(() => {
      setIsLoading(false);
      scrollToTop();
    });
  }, []);

  return (
    <div>
      <Helmet>
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
          Discover the Difference: Why Our Commercial Cleaning Services Stand
          Out
        </title>
        <meta
          name="description"
          content="Find out what sets our commercial cleaning services apart. Learn about our commitment to quality, reliability, and customer satisfaction that makes us the top choice for businesses."
        />
      </Helmet>
      {isLoading ? (
        <div className="mt-40 flex h-screen items-start justify-center">
          <MoonLoader color={"#497429"} />
        </div>
      ) : (
        <div>
          <ContactInfo />
          <div className="mx-auto flex max-w-5xl flex-col items-center p-6">
            <img
              src={WhyUs}
              alt="Clean Office"
              className="mb-6 max-h-56 rounded-t-lg md:max-h-96"
            />
            <h1 className="mb-1 w-full text-left text-4xl font-bold">
              Discover the Difference: Why Our Commercial Cleaning Services
              Stand Out
            </h1>
            <p className="mb-4 w-full text-left text-lg text-gray-600">
              Author: Clean Choice
            </p>
            <p className="mb-4 text-lg leading-7 text-gray-700">
              Choosing the right commercial cleaning service can make a
              significant difference in the cleanliness and maintenance of your
              business. At Clean Choice, we pride ourselves on providing
              top-notch cleaning services that set us apart from the
              competition. Here's why our services stand out.
            </p>
            <h2 className="mb-4 mt-8 w-full text-left text-3xl font-semibold">
              Our Commitment to Quality and Reliability
            </h2>
            <p className="mb-4 text-lg leading-7 text-gray-700">
              At Clean Choice, we understand that a clean and well-maintained
              environment is crucial for the success of your business. That's
              why we go above and beyond to deliver high-quality cleaning
              services that meet your specific needs. Our team of experienced
              and trained professionals uses the latest cleaning techniques and
              eco-friendly products to ensure your workspace is spotless and
              safe.
            </p>
            <p className="mb-4 text-lg leading-7 text-gray-700">
              We take pride in our attention to detail and commitment to
              customer satisfaction. Our comprehensive cleaning plans are
              tailored to address the unique requirements of each client,
              ensuring that every corner of your office is thoroughly cleaned.
              From regular maintenance to one-time deep cleans, we provide a
              wide range of services to keep your business looking its best.
            </p>
            <p className="text-lg leading-7 text-gray-700">
              In conclusion, choosing Clean Choice for your commercial cleaning
              needs means partnering with a company that values quality,
              reliability, and customer satisfaction. Experience the difference
              with our professional cleaning services and see how we can help
              your business shine.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhyChooseUs;
