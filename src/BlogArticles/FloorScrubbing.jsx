import FloorCare from "../assets/FloorCare.png";
import ContactInfo from "../components/ContactInfo";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { scrollToTop } from "../utils/scrollToTop";
import { MoonLoader } from "react-spinners";

const FloorScrubbing = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imagePromises = [
      new Promise((resolve) => {
        const img1 = new Image();
        img1.src = FloorCare;
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
          Shine On: The Importance of Regular Floor Scrubbing for Your Business
        </title>
        <meta
          name="description"
          content="Explore the significance of regular floor scrubbing for your business. Understand how maintaining clean and shiny floors can enhance safety and create a positive impression on clients and employees."
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
              src={FloorCare}
              alt="Floor Care"
              className="mb-6 max-h-56 rounded-t-lg md:max-h-96"
            />
            <h1 className="mb-1 w-full text-left text-4xl font-bold">
              Shine On: The Importance of Regular Floor Scrubbing for Your
              Business
            </h1>
            <p className="mb-4 w-full text-left text-lg text-gray-600">
              Author: Clean Choice
            </p>
            <p className="mb-4 text-lg leading-7 text-gray-700">
              Floors are one of the most heavily used surfaces in any business.
              They endure constant foot traffic, spills, and dirt accumulation,
              which can make them look dull and worn over time. Regular floor
              scrubbing is essential to maintain the shine and cleanliness of
              your floors, ensuring a safe and attractive environment for
              employees and visitors.
            </p>
            <h2 className="mb-4 mt-8 w-full text-left text-3xl font-semibold">
              The Benefits of Regular Floor Scrubbing
            </h2>
            <p className="mb-4 text-lg leading-7 text-gray-700">
              Regular floor scrubbing removes dirt, grime, and stains that can
              build up and damage the floor's surface. This not only enhances
              the appearance of your floors but also extends their lifespan.
              Clean and well-maintained floors create a positive impression,
              reflecting the professionalism and attention to detail of your
              business.
            </p>
            <p className="mb-4 text-lg leading-7 text-gray-700">
              Furthermore, regular scrubbing helps maintain a safe environment.
              Slippery or dirty floors can pose a hazard, leading to slips and
              falls. By keeping your floors clean and properly maintained, you
              reduce the risk of accidents and promote a safer workspace.
            </p>
            <p className="text-lg leading-7 text-gray-700">
              In conclusion, regular floor scrubbing is an essential part of
              maintaining a clean and professional business environment. It
              ensures your floors remain in top condition, enhances the overall
              appearance of your workspace, and promotes safety. Trust Clean
              Choice to provide reliable and thorough floor scrubbing services
              tailored to your needs.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloorScrubbing;
