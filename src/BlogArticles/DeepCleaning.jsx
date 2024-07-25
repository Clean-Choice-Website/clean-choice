import Deep from "../assets/DeepCleaning.jpg";
import ContactInfo from "../components/ContactInfo";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { scrollToTop } from "../utils/scrollToTop";
import { MoonLoader } from "react-spinners";

const SpringDeepCleaning = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imagePromises = [
      new Promise((resolve) => {
        const img1 = new Image();
        img1.src = Deep;
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
          Revitalize Your Workspace: The Essential Guide to Spring Deep Cleaning
        </title>
        <meta
          name="description"
          content="Discover the best practices for a thorough spring deep cleaning to revitalize your workspace. Learn how professional cleaning can enhance productivity and create a healthier environment."
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
              src={Deep}
              alt="Deep Cleaning"
              className="mb-6 max-h-56 rounded-t-lg md:max-h-96"
            />
            <h1 className="mb-1 w-full text-left text-4xl font-bold">
              Revitalize Your Workspace: The Essential Guide to Spring Deep
              Cleaning
            </h1>
            <p className="mb-4 w-full text-left text-lg text-gray-600">
              Author: Clean Choice
            </p>
            <p className="mb-4 text-lg leading-7 text-gray-700">
              Spring is the perfect time to give your workspace a thorough deep
              cleaning. A fresh and clean environment not only boosts employee
              morale but also leaves a lasting impression on clients and
              visitors. Spring deep cleaning involves more than just routine
              cleaning tasks. It's about reaching those overlooked areas and
              ensuring every corner of your office is spotless.
            </p>
            <h2 className="mb-4 mt-8 w-full text-left text-3xl font-semibold">
              Benefits of Spring Deep Cleaning
            </h2>
            <p className="mb-4 text-lg leading-7 text-gray-700">
              A comprehensive spring cleaning can significantly improve the air
              quality in your office. Dust, allergens, and other pollutants can
              accumulate over time, affecting the health and well-being of your
              employees. By thoroughly cleaning carpets, upholstery, and
              high-touch surfaces, you can create a healthier work environment.
            </p>
            <p className="mb-4 text-lg leading-7 text-gray-700">
              Additionally, a deep clean can help prevent the spread of
              illnesses. Sanitizing and disinfecting frequently used areas
              reduces the risk of infections, leading to fewer sick days and
              increased productivity. Spring cleaning also extends the lifespan
              of office furniture and equipment, saving you money in the long
              run.
            </p>
            <p className="text-lg leading-7 text-gray-700">
              In conclusion, investing in a professional spring deep cleaning
              service is essential for maintaining a healthy, productive, and
              professional business environment. It not only enhances the
              appearance of your workspace but also demonstrates your commitment
              to the well-being of your employees and clients.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpringDeepCleaning;
