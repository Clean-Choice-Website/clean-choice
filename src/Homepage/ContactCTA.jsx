// src/pages/ContactCTA.jsx
const DARK = "#406C2A";
const MID_TINT = "rgba(64,108,42,0.18)";

const FORM_URL = "https://40s7vw.share-na2.hsforms.com/2vnsTJgLFQiK5iSSq8YUuVA";

const ContactCTA = () => {
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-10">
        <div
          className="mx-auto max-w-3xl rounded-2xl border bg-white p-8 text-center shadow-xl"
          style={{ borderColor: MID_TINT }}
        >
          <h3 className="text-2xl font-extrabold">Get a Free Quote</h3>
          <p className="mx-auto mt-2 max-w-2xl text-slate-600">
            Answer a few quick questions about your facility and we&apos;ll
            follow up as soon as possible.
          </p>

          <div className="mt-6">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-[#406C2A] px-6 py-3 font-semibold text-white shadow-lg shadow-green-700/30 transition hover:bg-[#355622]"
            >
              Open Quote Form in New Tab
            </a>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Prefer to reach out directly? Email{" "}
            <a
              href="mailto:info@cleanchoicewi.com"
              className="font-semibold"
              style={{ color: DARK }}
            >
              info@cleanchoicewi.com
            </a>{" "}
            or call us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
