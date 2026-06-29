import ContactInfo from "./components/ContactInfo";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { scrollToTop } from "./utils/scrollToTop";

const DARK = "#406C2A";
const MID_TINT = "rgba(64,108,42,0.18)";
const LIGHT_TINT = "rgba(64,108,42,0.12)";

const PrivacyPolicy = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="bg-white">
      <Helmet>
        <title>Privacy Policy | Clean Choice WI</title>
        <meta
          name="description"
          content="Read the Clean Choice privacy policy to learn how we collect, use, and protect information submitted through our website and quote forms."
        />
      </Helmet>

      <ContactInfo />

      <main className="mx-auto max-w-screen-lg px-6 py-12 md:px-10 md:py-16">
        <div
          className="rounded-2xl border bg-white p-6 shadow-sm md:p-10"
          style={{ borderColor: MID_TINT }}
        >
          <div
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
            style={{ backgroundColor: LIGHT_TINT, color: DARK }}
          >
            Privacy Policy
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Privacy Policy
          </h1>

          <p className="mt-2 text-slate-600">
            <strong>Effective Date:</strong> June 29, 2026
          </p>

          <div className="mt-8 space-y-8 text-slate-700">
            <section>
              <p>
                Clean Choice (&quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;) values your privacy and is committed to
                protecting the information you share with us. This Privacy
                Policy explains what information we collect, how we use it, and
                the choices you have regarding your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                Information We Collect
              </h2>
              <p className="mt-3">
                When you contact us or request a quote, we may collect
                information including:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Name",
                  "Company name",
                  "Email address",
                  "Phone number",
                  "Business address",
                  "Information about your facility and cleaning needs",
                  "Any additional information you choose to provide",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: DARK }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                We may also automatically collect certain information when you
                visit our website, including your IP address, browser type,
                pages visited, and general website usage through cookies and
                analytics tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                How We Use Your Information
              </h2>
              <p className="mt-3">We use the information we collect to:</p>
              <ul className="mt-4 space-y-2">
                {[
                  "Respond to inquiries and quote requests",
                  "Provide commercial cleaning proposals and services",
                  "Communicate with you regarding your request or account",
                  "Improve our website and customer experience",
                  "Measure the effectiveness of our advertising and marketing efforts",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: DARK }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                Cookies and Analytics
              </h2>
              <p className="mt-3">
                Our website may use cookies and similar technologies to improve
                your browsing experience and understand how visitors use our
                website.
              </p>
              <p className="mt-3">
                We may use services such as Google Analytics, Google Ads, and
                HubSpot to measure website traffic, advertising performance, and
                lead generation. These services may collect information about
                your interaction with our website in accordance with their own
                privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                Information Sharing
              </h2>
              <p className="mt-3">
                We do not sell or rent your personal information.
              </p>
              <p className="mt-3">
                We may share your information with trusted service providers
                that help us operate our business, including website hosting,
                customer relationship management (CRM) platforms, analytics
                providers, and marketing tools. These providers are only
                permitted to use your information as necessary to perform
                services on our behalf.
              </p>
              <p className="mt-3">
                We may also disclose information when required by law or to
                protect our legal rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                Data Security
              </h2>
              <p className="mt-3">
                We take reasonable measures to protect the information you
                provide from unauthorized access, disclosure, or misuse. While
                no method of electronic transmission or storage is completely
                secure, we strive to use commercially reasonable safeguards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                Your Choices
              </h2>
              <p className="mt-3">You may contact us at any time to:</p>
              <ul className="mt-4 space-y-2">
                {[
                  "Request access to your information",
                  "Correct inaccurate information",
                  "Request deletion of your information",
                  "Ask questions about how your information is used",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: DARK }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">Contact Us</h2>
              <p className="mt-3">
                If you have any questions about this Privacy Policy or how your
                information is handled, please contact us:
              </p>
              <div
                className="mt-4 rounded-2xl border p-5"
                style={{ borderColor: MID_TINT, backgroundColor: LIGHT_TINT }}
              >
                <p className="font-bold text-slate-900">Clean Choice</p>
                <p className="mt-2">
                  Email:{" "}
                  <a
                    href="mailto:info@cleanchoicewi.com"
                    className="font-semibold text-[#406C2A] hover:underline"
                  >
                    info@cleanchoicewi.com
                  </a>
                </p>
                <p className="mt-1">
                  Website:{" "}
                  <a
                    href="https://cleanchoicewi.com"
                    className="font-semibold text-[#406C2A] hover:underline"
                  >
                    https://cleanchoicewi.com
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                Changes to This Policy
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated effective date.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
