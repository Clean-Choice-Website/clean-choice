import { useEffect, useState } from "react";
import { scrollToTop } from "./utils/scrollToTop";
import { MoonLoader } from "react-spinners";
import {
  commercialList,
  carpetList,
  floorList,
  commercialInfo,
  carpetInfo,
  floorInfo,
  row,
  rowReverse,
  waxList,
  waxInfo,
  constructionList,
  constructionInfo,
} from "./utils/services";
import CleaningImg from "./assets/CommercialCleaning_Header.png";
import ConstructionCleaning from "./assets/ConstructionCleaning.jpeg";
import CommercialCleaning from "./assets/CommercialCleaning.png";
import Wax from "./assets/floorStripAndWax.png";
import FloorCare from "./assets/FloorCare.png";
import ContactInfo from "./components/ContactInfo";
import ServicesContent from "./components/ServicesContent";
import { Helmet } from "react-helmet";

const Services = ({ openModal }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imagePromises = [
      new Promise((resolve) => {
        const img1 = new Image();
        img1.src = CommercialCleaning;
        img1.onload = resolve;
      }),
      new Promise((resolve) => {
        const img2 = new Image();
        img2.src = CleaningImg;
        img2.onload = resolve;
      }),
      new Promise((resolve) => {
        const img3 = new Image();
        img3.src = FloorCare;
        img3.onload = resolve;
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
        <title>Milwaukee Commercial Cleaning Services | Clean Choice WI</title>
        <meta
          name="description"
          content="Clean Choice Wisconsin: Commercial cleaning, carpet cleaning, floor scrubbing, office cleaning in Milwaukee, WI."
        />
      </Helmet>
      {isLoading ? (
        <div className="mt-40 flex h-screen items-start justify-center">
          <MoonLoader color={"#497429"} />
        </div>
      ) : (
        <div>
          <ContactInfo />
          <div className="mx-auto max-w-screen-sm lg:max-w-7xl">
            <section className="mx-8 flex flex-col items-center justify-between py-4 lg:items-start">
              <h2 className="mt-4 text-3xl font-bold">Our Services</h2>
              <div className="w-full py-4 md:mx-0 lg:pb-10">
                <h1 className="rounded-md bg-logoGreen px-4 py-4 text-center text-xl font-bold text-white lg:px-0">
                  Trusted Commercial Cleaning Services in Milwaukee and
                  Surrounding Areas.
                </h1>
              </div>
              <div className="flex flex-col gap-6 lg:mx-0">
                <ServicesContent
                  image={CommercialCleaning}
                  name={"Commercial Cleaning"}
                  list={commercialList}
                  info={commercialInfo}
                  row={row}
                />
                <ServicesContent
                  image={CleaningImg}
                  name={"Carpet Cleaning & Floor Scrubbing"}
                  list={carpetList}
                  info={carpetInfo}
                  row={rowReverse}
                />
                <ServicesContent
                  image={FloorCare}
                  name={"One-Time Deep Cleaning"}
                  list={floorList}
                  info={floorInfo}
                  row={row}
                />
                <ServicesContent
                  image={ConstructionCleaning}
                  name={"Construction Cleaning"}
                  list={constructionList}
                  info={constructionInfo}
                  row={rowReverse}
                />
                <ServicesContent
                  image={Wax}
                  name={"Strip and Wax"}
                  list={waxList}
                  info={waxInfo}
                  row={row}
                />
              </div>
            </section>
            <div className="mb-4 flex flex-col items-center justify-center md:mx-8 md:mt-6 md:justify-start">
              <p className="mb-6 font-bold">
                Have a Question regarding a service?
              </p>
              <button
                onClick={openModal}
                className="inline-block w-32 rounded bg-logoGreen py-3 text-center text-xl font-bold text-white transition-all hover:bg-logoGreenHover"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
