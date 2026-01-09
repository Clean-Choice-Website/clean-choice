import ContactInfo from "./components/ContactInfo";
import Alex from "./assets/Alex.jpeg";
import Team from "./assets/Team.jpeg";
import Michelle from "./assets/MichelleAbout.png";
import { useEffect, useState } from "react";
import { scrollToTop } from "./utils/scrollToTop";
import { MoonLoader } from "react-spinners";
import { Helmet } from "react-helmet";

const DARK = "#406C2A";
const DARKER = "#355622";
const MID_TINT = "rgba(64,108,42,0.18)";
const LIGHT_TINT = "rgba(64,108,42,0.12)";

const circleDimensions = 350;

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    scrollToTop();

    const imagesToLoad = [Alex, Michelle, Team];
    let loadedCount = 0;

    imagesToLoad.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount += 1;
        if (loadedCount === imagesToLoad.length) setIsLoading(false);
      };
      img.onerror = () => {
        // don’t block the page forever if one image fails
        loadedCount += 1;
        if (loadedCount === imagesToLoad.length) setIsLoading(false);
      };
    });
  }, []);

  return (
    <div className="bg-white">
      <Helmet>
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
        <title>
          About Clean Choice WI | Milwaukee's Premier Cleaning Service
        </title>
        <meta
          name="description"
          content="Learn about Clean Choice Wisconsin, offering top-notch commercial and office cleaning services in Milwaukee, WI."
        />
      </Helmet>

      {isLoading ? (
        <div className="mt-40 flex h-screen items-start justify-center">
          <MoonLoader color={DARK} />
        </div>
      ) : (
        <>
          <ContactInfo />

          <div className="mx-auto max-w-screen-2xl px-6 md:px-10">
            {/* Header */}
            <section className="flex flex-col items-center justify-between py-6 md:items-start">
              <div className="w-full py-4">
                <h1
                  className="rounded-2xl px-6 py-5 text-center text-2xl font-extrabold text-white shadow-sm md:text-3xl"
                  style={{ backgroundColor: DARK }}
                >
                  Meet the People Behind Clean Choice
                </h1>
              </div>

              <div className="flex w-full justify-center py-6">
                <img
                  className="w-full max-w-5xl rounded-2xl object-cover shadow-md ring-1"
                  style={{ borderColor: MID_TINT }}
                  src={Team}
                  alt="Clean Choice Team"
                />
              </div>

              <div className="w-full md:flex md:max-w-7xl md:flex-row md:gap-6 md:pr-8">
                <div className="items-start">
                  <h2 className="text-center text-3xl font-extrabold md:text-left">
                    Our Story
                  </h2>
                  <p className="mt-2 font-semibold text-slate-800">
                    Experience the Clean Choice advantage!
                  </p>
                  <p className="mt-2 text-slate-700">
                    In January 2023, Michelle officially acquired Clean Choice
                    and quickly transformed it into a family-run business by
                    bringing two of her cousins on board to help manage the
                    company. Being family-run means we don’t just see this as a
                    business — it’s personal. Together, we combine our shared
                    values, years of experience, and attention to detail to
                    deliver consistent, high-quality cleaning services. Our
                    commitment to each other and to our clients ensures every
                    facility we clean is spotless and exceeds expectations.
                  </p>
                </div>
              </div>
            </section>

            {/* Mission */}
            <section className="flex flex-col items-center justify-between py-8 md:items-start">
              <h2 className="text-3xl font-extrabold">Our Mission & Promise</h2>
              <div className="mt-2">
                <p className="font-semibold text-slate-800">
                  We care about being your first choice and make it our goal to
                  provide exceptional customer service.
                </p>
                <p className="mt-2 text-slate-700">
                  At Clean Choice, our mission is to be your first choice for
                  cleaning services and the most trusted premier cleaning
                  company in the greater Milwaukee area. We are committed to
                  providing consistent, top-quality cleaning that creates a safe
                  and healthy environment for your facility. Our promise is
                  simple: to exceed your expectations every time. With a focus
                  on reliability, attention to detail, and a commitment to
                  sustainability, you can trust Clean Choice to deliver
                  exceptional service while caring for your space and the people
                  within it.
                </p>
              </div>
            </section>

            {/* Leaders */}
            <section>
              {/* Michelle */}
              <div className="mx-auto flex max-w-6xl flex-col items-center justify-center py-10 md:flex-row md:pb-24 lg:pb-28">
                <div className="relative flex h-64 justify-center md:w-1/2">
                  <svg
                    className="absolute -left-44 -top-24 hidden scale-75 md:-left-8 md:-top-0 md:block md:scale-75 lg:left-20 lg:scale-90"
                    height={circleDimensions}
                    width={circleDimensions}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0"
                      y="0"
                      width={circleDimensions}
                      height={circleDimensions}
                      rx="18"
                      ry="18"
                      fill={DARK}
                    />
                  </svg>

                  <img
                    className="absolute bottom-10 w-60 max-w-xs rounded-2xl object-cover shadow-md ring-1 md:-left-10 md:-top-0 md:w-72 lg:left-12 lg:w-80"
                    style={{ borderColor: MID_TINT }}
                    src={Michelle}
                    alt="Michelle Lee"
                  />
                </div>

                <div className="w-full md:w-1/2">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-center text-4xl font-extrabold md:text-left">
                      Michelle Lee
                    </h3>
                    <h4 className="text-center text-lg font-semibold text-slate-700 md:text-left">
                      CEO / President
                    </h4>

                    <div className="text-slate-700">
                      <p>
                        Michelle is a solution-oriented leader with dual degrees
                        in Electrical Engineering from MSOE and FHL University
                        in Northern Germany. Driven by her commitment to
                        Milwaukee’s growth and her passion for creating clean,
                        healthy work environments, she took the helm of Clean
                        Choice to elevate its impact on local businesses.
                      </p>
                      <p className="mt-3">
                        When she’s not leading the team, Michelle enjoys
                        spoiling her rescue dogs and camping with her family.
                        Under her guidance, Clean Choice continues to grow while
                        maintaining a focus on reliable, high-quality cleaning
                        services that help businesses shine.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alex */}
              <div className="mx-auto flex max-w-6xl flex-col items-center justify-center py-10 md:flex-row lg:pb-28">
                <div className="relative flex h-64 justify-center md:w-1/2">
                  <svg
                    className="absolute -left-44 -top-24 hidden scale-75 md:-left-8 md:-top-0 md:block md:scale-75 lg:left-20 lg:scale-90"
                    height={circleDimensions}
                    width={circleDimensions}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0"
                      y="0"
                      width={circleDimensions}
                      height={circleDimensions}
                      rx="18"
                      ry="18"
                      fill={DARK}
                    />
                  </svg>

                  <img
                    className="absolute bottom-10 w-60 max-w-xs rounded-2xl object-cover shadow-md ring-1 md:-left-10 md:-top-0 md:w-72 lg:left-12 lg:w-80"
                    style={{ borderColor: MID_TINT }}
                    src={Alex}
                    alt="Alex Bernt"
                  />
                </div>

                <div className="w-full md:w-1/2">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-center text-4xl font-extrabold md:text-left">
                      Alex Bernt
                    </h3>
                    <h4 className="text-center text-lg font-semibold text-slate-700 md:text-left">
                      Chief Operating Officer
                    </h4>

                    <div className="text-slate-700">
                      <p>
                        Since taking over as COO of Clean Choice, Alex has been
                        an integral part of the company’s success. With a
                        Business Administration degree from Coe College and a
                        Software Engineering Certificate from Fullstack Academy,
                        he brings a versatile skill set to the team.
                      </p>
                      <p className="mt-3">
                        An avid CrossFit enthusiast and two-time Boston Marathon
                        finisher, Alex brings energy and dedication to
                        everything he does. His leadership, technical expertise,
                        and commitment to excellence ensure Clean Choice
                        delivers high-quality, reliable cleaning services to
                        every client.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="py-10 text-center">
              <div
                className="mx-auto max-w-3xl rounded-2xl border bg-white p-6 shadow-sm"
                style={{ borderColor: MID_TINT }}
              >
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ backgroundColor: LIGHT_TINT, color: DARK }}
                >
                  Get in touch
                </div>

                <h3 className="mt-3 text-xl font-extrabold text-slate-900">
                  Ready to talk about cleaning?
                </h3>

                <p className="mt-1 text-slate-600">
                  Call or email us and we’ll respond as soon as possible.
                </p>

                <p className="mt-4 text-base text-slate-700 md:text-lg">
                  Call{" "}
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

                <div className="mt-6">
                  <a
                    href="https://40s7vw.share-na2.hsforms.com/2vnsTJgLFQiK5iSSq8YUuVA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-[#406C2A] px-8 py-3 font-semibold text-white shadow-lg shadow-green-700/30 transition hover:bg-[#355622]"
                  >
                    Get a Free Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AboutUs;
