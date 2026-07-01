import { Helmet } from "react-helmet";
import { useEffect } from "react";
import ContactInfo from "./components/ContactInfo";
import { scrollToTop } from "./utils/scrollToTop";

const DARK = "#406C2A";
const MID_TINT = "rgba(64,108,42,0.18)";
const LIGHT_TINT = "rgba(64,108,42,0.12)";

const FORM_URL = "https://40s7vw.share-na2.hsforms.com/2vnsTJgLFQiK5iSSq8YUuVA";

const CommercialCleaning = () => {
  useEffect(() => {
    scrollToTop();
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

        <title>Commercial Cleaning Milwaukee WI | Clean Choice</title>
        <meta
          name="description"
          content="Commercial cleaning services for Milwaukee and southeastern Wisconsin businesses. Reliable crews, recurring service, deep cleans, floor care, and clear communication."
        />
      </Helmet>

      <ContactInfo />

      <main className="mx-auto max-w-screen-2xl px-6 py-12 md:px-10 md:py-16">
        <section
          className="rounded-2xl px-6 py-10 text-center text-white shadow-sm md:px-10"
          style={{ backgroundColor: DARK }}
        >
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Commercial Cleaning Services in Milwaukee
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-slate-100">
            Reliable commercial cleaning for offices, facilities, gyms, salons,
            retail spaces, and other businesses across the Greater Milwaukee
            Area.
          </p>
        </section>

        <section className="grid gap-8 py-12 lg:grid-cols-3">
          {[
            {
              title: "Recurring Cleaning",
              text: "Scheduled cleaning plans built around your hours, traffic levels, and facility needs.",
            },
            {
              title: "One-Time Deep Cleans",
              text: "Detailed cleaning for resets, move-ins, seasonal cleanups, events, and special projects.",
            },
            {
              title: "Floor & Carpet Care",
              text: "Floor scrubbing, hot water carpet extraction, and strip and wax services for high-traffic areas.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border bg-white p-6 shadow-sm"
              style={{ borderColor: MID_TINT }}
            >
              <div
                className="inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                style={{ backgroundColor: LIGHT_TINT, color: DARK }}
              >
                Service
              </div>
              <h2 className="mt-3 text-xl font-extrabold text-slate-900">
                {item.title}
              </h2>
              <p className="mt-2 text-slate-600">{item.text}</p>
            </div>
          ))}
        </section>

        <section
          className="rounded-2xl border bg-white p-8 shadow-sm"
          style={{ borderColor: MID_TINT }}
        >
          <h2 className="text-2xl font-extrabold text-slate-900">
            Built for consistent results
          </h2>
          <p className="mt-3 text-slate-700">
            Clean Choice creates straightforward cleaning plans that help your
            business stay clean, safe, and ready for employees, customers, and
            visitors. Our team focuses on reliability, clear communication, and
            consistent follow-through.
          </p>

          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              "Office cleaning",
              "Restroom cleaning",
              "Breakroom and kitchen cleaning",
              "Trash removal",
              "Dusting and surface cleaning",
              "Vacuuming, sweeping, and mopping",
              "High-touch point cleaning",
              "Special project cleaning",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-slate-700">
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: DARK }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="py-12 text-center">
          <div
            className="mx-auto max-w-3xl rounded-2xl border bg-white p-8 shadow-sm"
            style={{ borderColor: MID_TINT }}
          >
            <h2 className="text-2xl font-extrabold text-slate-900">
              Need commercial cleaning for your facility?
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-slate-600">
              Tell us about your space and we’ll recommend the right cleaning
              plan.
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

export default CommercialCleaning;
