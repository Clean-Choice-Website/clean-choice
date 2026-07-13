import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { scrollToTop } from "./utils/scrollToTop";
import ContactInfo from "./components/ContactInfo";

const DARK = "#406C2A";
const MID_TINT = "rgba(64,108,42,0.18)";
const LIGHT_TINT = "rgba(64,108,42,0.12)";

const ThankYou = () => {
  useEffect(() => {
    scrollToTop();

    // Ensure the Google data layer exists.
    window.dataLayer = window.dataLayer || [];

    // Use the existing global gtag function when available.
    // Otherwise, create the standard queueing function.
    window.gtag =
      window.gtag ||
      function gtag() {
        window.dataLayer.push(arguments);
      };

    // Fire the Google Ads lead conversion event.
    window.gtag("event", "conversion", {
      send_to: "AW-18284556626/1aMACLvk7MccENLi4I5E",
      value: 1.0,
      currency: "USD",
    });
  }, []);

  return (
    <div className="bg-white">
      <Helmet>
        <title>Thank You | Clean Choice WI</title>

        <meta
          name="description"
          content="Thank you for contacting Clean Choice WI. We received your request and will follow up as soon as possible."
        />

        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <ContactInfo />

      <main className="mx-auto max-w-screen-lg px-6 py-16 text-center md:px-10 md:py-24">
        <div
          className="mx-auto max-w-3xl rounded-2xl border bg-white p-8 shadow-sm md:p-10"
          style={{ borderColor: MID_TINT }}
        >
          <div
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
            style={{ backgroundColor: LIGHT_TINT, color: DARK }}
          >
            Request received
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Thank you for requesting a quote.
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            We received your information and will follow up as soon as possible.
          </p>

          <p className="mt-5 text-base text-slate-700 md:text-lg">
            Need immediate help? Call{" "}
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

          <div className="mt-8">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-[#406C2A] px-6 py-3 font-semibold text-white shadow-lg shadow-green-700/30 transition hover:bg-[#355622]"
            >
              Back to Home
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThankYou;
