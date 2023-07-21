import { useEffect } from "react";
import { scrollToTop } from "./utils/scrollToTop";
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

const Services = ({ openModal }) => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
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
          <div className="mx-8 flex flex-col gap-6 lg:mx-0">
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
          <p className="mb-6 font-bold">Have a Question regarding a service?</p>
          <button
            onClick={openModal}
            className="inline-block w-32 rounded bg-logoGreen py-3 text-center text-xl font-bold text-white transition-all hover:bg-logoGreenHover"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
