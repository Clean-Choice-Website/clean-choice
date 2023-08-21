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
} from "./utils/services";
import CleaningImg from "./assets/CommercialCleaning_Header.png";
import CommercialCleaning from "./assets/CommercialCleaning.png";
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
        <title>
          Clean Choice WI Services | Commercial Cleaning, Carpet Cleaning and
          Floor Care & Tile Re-waxing
        </title>
        <meta
          name="description"
          content="Clean Choice WI offers commercial cleaning, carpet cleaning, and floor care & tile re-waxing services primarily operating out of the Milwaukee, WI area."
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
              <h1 className="mt-4 text-3xl font-bold">Our Services</h1>
              <div className="w-full py-4 md:mx-0 lg:pb-10">
                <p className="rounded-md bg-logoGreen px-4 py-4 text-center text-xl font-bold text-white lg:px-0">
                  Serving Waukesha and Milwaukee Counties for over 10 years
                </p>
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
                  name={"Carpet Cleaning"}
                  list={carpetList}
                  info={carpetInfo}
                  row={rowReverse}
                />
                <ServicesContent
                  image={FloorCare}
                  name={"Floor Care & Tile Re-waxing"}
                  list={floorList}
                  info={floorInfo}
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
