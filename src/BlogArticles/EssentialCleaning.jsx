import Clean from "../assets/EssentialCleaning.jpg";
import ContactInfo from "../components/ContactInfo";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { scrollToTop } from "../utils/scrollToTop";
import { MoonLoader } from "react-spinners";

const EssentialCleaning = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imagePromises = [
      new Promise((resolve) => {
        const img1 = new Image();
        img1.src = Clean;
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
        <title>Why Commercial Cleaning is Essential for Businesses</title>
        <meta
          name="description"
          content="Understand the importance of commercial cleaning for businesses. Learn how a clean environment enhances productivity, ensures health and safety, and leaves a positive impression on clients and employees."
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
              src={Clean}
              alt="General Cleaning"
              className="mb-6 max-h-56 rounded-t-lg md:max-h-96"
            />
            <h1 className="mb-1 w-full text-left text-4xl font-bold">
              Why Commercial Cleaning is Essential for Businesses
            </h1>
            <p className="mb-4 w-full text-left text-lg text-gray-600">
              Author: Clean Choice
            </p>
            <p className="mb-4 text-lg leading-7 text-gray-700">
              Maintaining a clean and hygienic environment is crucial for any
              business. It not only ensures the health and safety of employees
              and clients but also enhances the overall productivity and image
              of the company. A spotless workspace fosters a professional
              atmosphere, making a positive impression on clients and visitors.
              Moreover, regular cleaning reduces the spread of illnesses,
              leading to fewer sick days and a healthier workforce.
            </p>
            <h2 className="mb-4 mt-8 w-full text-left text-3xl font-semibold">
              The Importance of Deep Cleaning Services
            </h2>
            <p className="mb-4 text-lg leading-7 text-gray-700">
              Commercial cleaning goes beyond the regular dusting and mopping.
              It involves deep cleaning services that reach every nook and
              cranny of the workplace. This includes sanitizing high-touch
              areas, cleaning carpets, upholstery, and maintaining restrooms to
              the highest standards of hygiene. Professional cleaning services
              use advanced techniques and eco-friendly products to ensure that
              the workplace is not only clean but also safe for everyone.
            </p>
            <p className="mb-4 text-lg leading-7 text-gray-700">
              Investing in commercial cleaning services is a smart business
              decision. It extends the lifespan of office furniture and
              equipment by preventing dust buildup and wear and tear. A clean
              environment also boosts employee morale, as it shows that the
              company values their well-being. In the long run, maintaining a
              pristine workplace can lead to increased employee satisfaction and
              retention.
            </p>
            <p className="text-lg leading-7 text-gray-700">
              In conclusion, commercial cleaning is essential for creating a
              healthy, productive, and professional business environment. It
              reflects positively on the company's commitment to excellence and
              care for its people and clients. Choosing a reliable commercial
              cleaning service can make a significant difference in the success
              and reputation of your business.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EssentialCleaning;
