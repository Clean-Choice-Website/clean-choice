const DARK = "#406C2A";
const MID_TINT = "rgba(64,108,42,0.18)";
const LIGHT_TINT = "rgba(64,108,42,0.12)";

const FORM_URL = "https://40s7vw.share-na2.hsforms.com/2vnsTJgLFQiK5iSSq8YUuVA";

const ContactOwner = () => {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-screen-xl px-6 md:px-10">
        <div
          className="mx-auto max-w-3xl rounded-2xl border bg-white p-6 text-center shadow-sm"
          style={{ borderColor: MID_TINT }}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
            style={{ backgroundColor: LIGHT_TINT, color: DARK }}
          >
            Direct contact
          </div>

          <h3 className="mt-3 text-lg font-semibold">
            Have a question? Contact us
          </h3>

          <p className="mt-1 text-sm text-slate-600">
            Request a free quote or reach out directly — we&apos;ll respond as
            soon as possible.
          </p>

          {/* Primary CTA */}
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

          {/* Contact details — emphasized */}
          <div className="mt-5">
            <p className="text-base text-slate-700 md:text-lg">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactOwner;
