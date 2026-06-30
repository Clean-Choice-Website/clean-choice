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

const DARK = "#406C2A";
const MID_TINT = "rgba(64,108,42,0.18)";
const LIGHT_TINT = "rgba(64,108,42,0.12)";

const FORM_URL = "https://40s7vw.share-na2.hsforms.com/2vnsTJgLFQiK5iSSq8YUuVA";

const Services = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const sources = [
      CommercialCleaning,
      CleaningImg,
      FloorCare,
      ConstructionCleaning,
      Wax,
    ];

    Promise.all(
      sources.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve;
          })
      )
    ).then(() => {
      setIsLoading(false);
      scrollToTop();
    });
  }, []);

  return (
    <div className="bg-white">
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18284556626"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18284556626');
          `}
        </script>
        <title>Milwaukee Commercial Cleaning Services | Clean Choice WI</title>
        <meta
          name="description"
          content="Clean Choice Wisconsin provides commercial cleaning, one-time deep cleans, carpet cleaning, floor scrubbing, construction clean-up, and strip & wax services across Milwaukee and surrounding areas."
        />
      </Helmet>

      {isLoading ? (
        <div className="mt-40 flex h-screen items-start justify-center">
          <MoonLoader color={DARK} />
        </div>
      ) : (
        <>
          <ContactInfo />

          {/* Simple green header: ONE LINE ONLY */}
          <section className="py-10">
            <div className="mx-auto max-w-screen-2xl px-6 md:px-10">
              <div
                className="mx-auto max-w-5xl rounded-2xl px-6 py-6 text-center text-white shadow-sm"
                style={{ backgroundColor: DARK }}
              >
                <h1 className="text-2xl font-extrabold md:text-3xl">
                  Commercial Cleaning Services in the Greater Milwaukee Area
                </h1>
              </div>
            </div>
          </section>

          {/* Services Blocks */}
          <section className="pb-14 md:pb-16">
            <div className="mx-auto max-w-screen-2xl px-6 md:px-10">
              <div className="flex flex-col gap-10">
                <ServicesContent
                  image={CommercialCleaning}
                  name="Commercial Cleaning"
                  list={commercialList}
                  info={commercialInfo}
                  row={row}
                  imgPos="center 30%"
                />

                <ServicesContent
                  image={CleaningImg}
                  name="Carpet Cleaning & Floor Scrubbing"
                  list={carpetList}
                  info={carpetInfo}
                  row={rowReverse}
                  imgPos="center 35%"
                />

                <ServicesContent
                  image={FloorCare}
                  name="One-Time Deep Cleaning"
                  list={floorList}
                  info={floorInfo}
                  row={row}
                  imgPos="center 35%"
                />

                <ServicesContent
                  image={ConstructionCleaning}
                  name="Construction Cleaning"
                  list={constructionList}
                  info={constructionInfo}
                  row={rowReverse}
                  imgPos="center 30%"
                />

                <ServicesContent
                  image={Wax}
                  name="Strip & Wax"
                  list={waxList}
                  info={waxInfo}
                  row={row}
                  imgPos="center"
                />
              </div>

              {/* Bottom CTA (kept) */}
              <div className="mt-16">
                <div
                  className="mx-auto max-w-3xl rounded-2xl border bg-white p-8 text-center shadow-sm"
                  style={{ borderColor: MID_TINT }}
                >
                  <div
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                    style={{ backgroundColor: LIGHT_TINT, color: DARK }}
                  >
                    Get a Free Quote
                  </div>

                  <h3 className="mt-3 text-2xl font-extrabold text-slate-900">
                    Services tailored to your space
                  </h3>

                  <p className="mx-auto mt-2 max-w-2xl text-slate-600">
                    Tell us what you need and we’ll recommend the right plan.
                    Quotes are fast and free.
                  </p>

                  <div className="mt-6">
                    <a
                      href={FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl bg-[#406C2A] px-8 py-3 font-semibold text-white shadow-lg shadow-green-700/30 transition hover:bg-[#355622]"
                    >
                      Get a Free Quote
                    </a>
                  </div>

                  <p className="mt-4 text-base text-slate-700 md:text-lg">
                    Or call{" "}
                    <a
                      href="tel:4143109206"
                      className="font-bold text-[#406C2A] hover:underline"
                    >
                      (414) 310-9206
                    </a>{" "}
                    or email{" "}
                    <a
                      href="mailto:info@cleanchoicewi.com"
                      className="font-bold text-[#406C2A] hover:underline"
                    >
                      info@cleanchoicewi.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Services;
