/* eslint-disable react/prop-types */
const DARK = "#406C2A";
const MID_TINT = "rgba(64,108,42,0.18)";
const LIGHT_TINT = "rgba(64,108,42,0.12)";

const FORM_URL = "https://40s7vw.share-na2.hsforms.com/2vnsTJgLFQiK5iSSq8YUuVA";

const HomePageHero = ({ heroImage, heroImageLandscape }) => {
  return (
    <section
      id="home"
      className="relative flex min-h-[540px] flex-col items-center justify-center overflow-hidden bg-white py-20 md:flex-row md:py-28"
    >
      {/* Left text */}
      <div className="max-w-xl px-6 text-center md:text-left">
        <div
          className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold"
          style={{
            borderColor: MID_TINT,
            backgroundColor: LIGHT_TINT,
            color: DARK,
          }}
        >
          Greater Milwaukee Area • Fully Insured & Bonded
        </div>

        <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl">
          A Cleaner, Brighter Workspace{" "}
          <span style={{ color: DARK }}>Every Day</span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-700 md:mx-0">
          Dependable commercial cleaning for southeastern Wisconsin businesses.
          Our experienced and fully trained crews keep your space spotless,
          safe, and ready for your team and clients.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
          {/* Primary CTA — form opens in new tab */}
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-[#406C2A] px-6 py-3 font-semibold text-white shadow-lg shadow-green-700/30 transition hover:bg-[#355622]"
          >
            Get a Free Quote
          </a>

          {/* Secondary CTA — services page, same tab */}
          <a
            href="/services"
            className="inline-flex items-center rounded-xl border-2 border-[#406C2A] px-6 py-3 font-semibold text-[#406C2A] transition hover:border-[#355622] hover:bg-[#406C2A] hover:text-white"
          >
            See Our Services
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3 md:justify-start">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: DARK }}
          />
          <span className="h-px w-40 bg-[rgba(15,23,42,0.15)]" />
          <span className="text-sm font-semibold" style={{ color: DARK }}>
            5-Star Reviews
          </span>
        </div>
      </div>

      {/* Right image */}
      <div className="relative z-10 mt-10 max-w-md md:ml-10 md:mt-0 md:max-w-lg">
        <div
          className="absolute -inset-3 -z-10 rounded-3xl blur-xl"
          style={{
            background: `linear-gradient(135deg, ${LIGHT_TINT}, rgba(64,108,42,0.24))`,
          }}
        />
        <div className="overflow-hidden rounded-2xl shadow-2xl shadow-slate-900/10 ring-1 ring-emerald-200/60">
          <picture>
            <source media="(min-width: 768px)" srcSet={heroImageLandscape} />
            <img
              src={heroImage}
              alt="Clean office workspace"
              className="h-[320px] w-full object-cover md:h-[420px]"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default HomePageHero;
