import { useEffect } from "react";
import { scrollToTop } from "./utils/scrollToTop";
import CleaningImg from "./assets/CommercialCleaning_Header.png";
import CommercialCleaning from "./assets/CommercialCleaning.png";
import FloorCare from "./assets/FloorCare.png";
import ContactInfo from "./components/ContactInfo";
import ServicesContent from "./components/ServicesContent";

const Services = ({ openModal }) => {
  const commercialList = [
    "This service includes this cool stuff and is about at least a sentence",
    "This service includes this cool stuff and is about at least a sentence",
    "This service includes this cool stuff and is about at least a sentence",
  ];
  const carpetList = [
    "This service includes this cool stuff and is about at least a sentence",
    "This service includes this cool stuff and is about at least a sentence",
    "This service includes this cool stuff and is about at least a sentence",
  ];
  const FloorList = [
    "This service includes this cool stuff and is about at least a sentence",
    "This service includes this cool stuff and is about at least a sentence",
    "This service includes this cool stuff and is about at least a sentence",
  ];
  const commercialInfo =
    "Our environmentally responsible approach focuses on the proper training and use of cleaning solutions as well as proper disposal of any harsh detergents or cleaning compounds. Below are some of the ways we achieve this level of clean:";
  const carpetInfo =
    "Our environmentally responsible approach focuses on the proper training and use of cleaning solutions as well as proper disposal of any harsh detergents or cleaning compounds. Below are some of the ways we achieve this level of clean:";
  const floorInfo =
    "Our environmentally responsible approach focuses on the proper training and use of cleaning solutions as well as proper disposal of any harsh detergents or cleaning compounds. Below are some of the ways we achieve this level of clean:";
  const row =
    "mb-4 md:mb-12 md:flex md:max-w-7xl md:flex-row md:items-center lg:gap-6";
  const rowReverse =
    "mb-4 md:mb-12 md:flex md:max-w-7xl md:flex-row-reverse md:items-center lg:gap-6";

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <ContactInfo />
      <div className="mx-auto max-w-7xl">
        <section className="mx-8 flex flex-col items-center justify-between py-4 lg:items-start">
          <h1 className="mt-4 text-3xl font-bold">Our Services</h1>
          <div className="w-full py-4 md:mx-0 lg:pb-10">
            <p className="rounded-md bg-logoGreen py-4 text-center text-xl font-bold text-white">
              Serving Waukesha and Milwaukee Counties for over 25 years
            </p>
          </div>
          <div className="mx-8 flex flex-col gap-6 md:mx-12 lg:mx-0">
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
              list={FloorList}
              info={floorInfo}
              row={row}
            />
          </div>
        </section>
        <div className="mb-4 flex flex-col items-center justify-center md:mx-8 md:mt-6 md:justify-start">
          <p className="mb-6 font-bold">Have a Question regarding a service?</p>
          <button
            onClick={openModal}
            className="inline-block w-32 rounded bg-logoGreen py-3 text-center text-xl font-bold text-white hover:bg-logoGreenHover"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
