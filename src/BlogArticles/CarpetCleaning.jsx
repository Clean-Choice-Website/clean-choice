import Carpet from "../assets/CarpetCleaning.jpg";
import ContactInfo from "../components/ContactInfo";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { scrollToTop } from "../utils/scrollToTop";
import { MoonLoader } from "react-spinners";

const CarpetCleaning = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imagePromises = [
      new Promise((resolve) => {
        const img1 = new Image();
        img1.src = Carpet;
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
          Extend the Life of Your Carpets: The Benefits of Professional Carpet
          Cleaning
        </title>
        <meta
          name="description"
          content="Learn how professional carpet cleaning can extend the life of your carpets and maintain a clean, healthy environment. Discover the benefits of regular carpet maintenance for your business."
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
              src={Carpet}
              alt="Carpet Cleaning"
              className="mb-6 max-h-56 rounded-t-lg md:max-h-96"
            />
            <h1 className="mb-1 w-full text-left text-4xl font-bold">
              Extend the Life of Your Carpets: The Benefits of Professional
              Carpet Cleaning
            </h1>
            <p className="mb-4 w-full text-left text-lg text-gray-600">
              Author: Clean Choice
            </p>
            <p className="mb-4 text-lg leading-7 text-gray-700">
              Carpets are a significant investment for any business, providing
              comfort and aesthetic appeal. However, they also require regular
              maintenance to stay in top condition. Professional carpet cleaning
              is essential for extending the life of your carpets and ensuring a
              clean and healthy environment.
            </p>
            <h2 className="mb-4 mt-8 w-full text-left text-3xl font-semibold">
              Why Professional Carpet Cleaning is Important
            </h2>
            <p className="mb-4 text-lg leading-7 text-gray-700">
              Over time, carpets can accumulate dirt, dust, and allergens that
              are not always visible to the naked eye. Regular vacuuming helps,
              but it doesn't remove all the embedded particles. Professional
              carpet cleaning uses advanced equipment and techniques to deep
              clean carpets, removing dirt and contaminants that regular
              cleaning cannot.
            </p>
            <p className="mb-4 text-lg leading-7 text-gray-700">
              Additionally, professional cleaning helps eliminate stains and
              odors, restoring the carpet's original appearance and freshness.
              This not only improves the aesthetics of your workspace but also
              contributes to a healthier indoor environment. Clean carpets
              reduce the risk of allergies and respiratory issues among
              employees and visitors.
            </p>
            <p className="text-lg leading-7 text-gray-700">
              In conclusion, investing in professional carpet cleaning is a
              smart decision for any business. It preserves the longevity of
              your carpets, enhances the overall cleanliness of your workspace,
              and promotes a healthier environment. Trust Clean Choice to
              provide top-quality carpet cleaning services that meet your needs.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarpetCleaning;
