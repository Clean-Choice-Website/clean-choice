import Airport from "../assets/Airport.jpg";
import ContactInfo from "../components/ContactInfo";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { scrollToTop } from "../utils/scrollToTop";
import { MoonLoader } from "react-spinners";

const AirportCleaning = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imagePromises = [
      new Promise((resolve) => {
        const img1 = new Image();
        img1.src = Airport;
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
          Keeping the Skies Clean: The Critical Role of Airport Cleaning
          Services
        </title>
        <meta
          name="description"
          content="Uncover the critical role of professional airport cleaning services. Learn how maintaining high standards of cleanliness ensures safety and a pleasant experience for travelers and staff."
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
              src={Airport}
              alt="Airplane"
              className="mb-6 max-h-56 rounded-t-lg md:max-h-96"
            />
            <h1 className="mb-1 w-full text-left text-4xl font-bold">
              Keeping the Skies Clean: The Critical Role of Airport Cleaning
              Services
            </h1>
            <p className="mb-4 w-full text-left text-lg text-gray-600">
              Author: Clean Choice
            </p>
            <p className="mb-4 text-lg leading-7 text-gray-700">
              Airports are bustling hubs of activity, welcoming millions of
              travelers from around the world. With such high foot traffic,
              maintaining cleanliness and hygiene is paramount. Professional
              airport cleaning services play a crucial role in ensuring a safe,
              clean, and pleasant environment for passengers and staff alike.
            </p>
            <h2 className="mb-4 mt-8 w-full text-left text-3xl font-semibold">
              The Challenges of Airport Cleaning
            </h2>
            <p className="mb-4 text-lg leading-7 text-gray-700">
              Airport cleaning requires specialized knowledge and expertise to
              handle the unique challenges of such a large and busy facility.
              From maintaining restrooms and waiting areas to cleaning terminals
              and runways, every aspect of the airport must be meticulously
              cleaned and maintained. Professional cleaning teams use advanced
              equipment and techniques to ensure the highest standards of
              cleanliness and safety.
            </p>
            <p className="mb-4 text-lg leading-7 text-gray-700">
              In addition to regular cleaning, airports also require effective
              sanitation and disinfection protocols to prevent the spread of
              germs and diseases. High-touch areas, such as check-in counters,
              security checkpoints, and seating areas, must be frequently
              disinfected to protect the health of passengers and staff.
            </p>
            <p className="text-lg leading-7 text-gray-700">
              In conclusion, professional airport cleaning services are
              essential for maintaining a clean and safe environment in one of
              the busiest public spaces. By ensuring the highest standards of
              cleanliness, these services help enhance the travel experience and
              ensure the well-being of everyone who passes through the airport.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AirportCleaning;
