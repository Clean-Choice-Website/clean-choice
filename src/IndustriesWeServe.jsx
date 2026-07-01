import { Helmet } from "react-helmet";
import { useEffect } from "react";
import ContactInfo from "./components/ContactInfo";
import { scrollToTop } from "./utils/scrollToTop";

const DARK = "#406C2A";
const MID_TINT = "rgba(64,108,42,0.18)";
const LIGHT_TINT = "rgba(64,108,42,0.12)";

const FORM_URL = "https://40s7vw.share-na2.hsforms.com/2vnsTJgLFQiK5iSSq8YUuVA";

const IndustriesWeServe = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const industries = [
    "Office buildings",
    "Gyms and fitness facilities",
    "Salons and retail spaces",
    "Manufacturing facilities",
    "Schools and education facilities",
    "Medical and professional offices",
    "Construction and renovation sites",
    "Commercial properties",
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Industries We Serve | Clean Choice WI</title>
        <meta
          name="description"
          content="Clean Choice provides commercial cleaning for offices, gyms, salons, schools, retail spaces, construction sites, and businesses across the Greater Milwaukee Area."
        />
      </Helmet>

      <ContactInfo />

      <main className="mx-auto max-w-screen-2xl px-6 py-12 md:px-10 md:py-16">
        <section
          className="rounded-2xl px-6 py-10 text-center text-white shadow-sm md:px-10"
          style={{ backgroundColor: DARK }}
        >
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Industries We Serve
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-slate-100">
            Commercial cleaning solutions for businesses and facilities across
            the Greater Milwaukee Area.
          </p>
        </section>

        <section className="py-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-2xl border bg-white p-6 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                style={{ borderColor: MID_TINT }}
              >
                <div
                  className="mx-auto inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ backgroundColor: LIGHT_TINT, color: DARK }}
                >
                  Industry
                </div>
                <h2 className="mt-3 text-lg font-extrabold text-slate-900">
                  {industry}
                </h2>
              </div>
            ))}
          </div>
        </section>

        <section
          className="rounded-2xl border bg-white p-8 shadow-sm"
          style={{ borderColor: MID_TINT }}
        >
          <h2 className="text-2xl font-extrabold text-slate-900">
            Cleaning plans built around your business
          </h2>
          <p className="mt-3 text-slate-700">
            Every facility has different traffic patterns, priorities, and
            cleaning standards. Clean Choice works with each client to build a
            practical cleaning plan that supports the way their business
            operates.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Flexible schedules",
                text: "Cleaning plans can be built around your operating hours and facility needs.",
              },
              {
                title: "Clear communication",
                text: "We keep communication simple, responsive, and focused on solving problems quickly.",
              },
              {
                title: "Consistent quality",
                text: "Our goal is reliable service that helps your space look clean and professional every day.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-5"
                style={{ backgroundColor: LIGHT_TINT }}
              >
                <h3 className="font-extrabold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 text-center">
          <div
            className="mx-auto max-w-3xl rounded-2xl border bg-white p-8 shadow-sm"
            style={{ borderColor: MID_TINT }}
          >
            <h2 className="text-2xl font-extrabold text-slate-900">
              Have a facility that needs reliable cleaning?
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-slate-600">
              Send us a few details and we’ll help determine the best cleaning
              approach for your space.
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
          </div>
        </section>
      </main>
    </div>
  );
};

export default IndustriesWeServe;
