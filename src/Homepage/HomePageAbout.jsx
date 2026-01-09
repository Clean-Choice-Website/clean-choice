/* eslint-disable react/prop-types */
const DARK = "#406C2A";
const DARKER = "#355622";
const MID_TINT = "rgba(64,108,42,0.18)";
const LIGHT_TINT = "rgba(64,108,42,0.12)";

const HomePageAbout = ({ aboutImage, alexImage }) => {
  return (
    <section
      id="about"
      className="relative py-16 md:py-20"
      style={{ backgroundColor: DARKER, color: "white" }}
    >
      <div className="mx-auto max-w-screen-2xl px-6 md:px-10">
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
            About Clean Choice
          </h2>

          <p className="mt-3 text-slate-100">
            Clean Choice is a local, family-run commercial cleaning partner
            focused on reliability, clear communication, and consistent results.
            We build straightforward cleaning plans that fit your hours, your
            budget, and your standards.
          </p>

          <div className="mt-5">
            <a
              href="/about"
              className="inline-flex items-center rounded-xl border-2 border-white bg-[#406C2A] px-5 py-2.5 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:border-[#f0f0f0] hover:shadow-lg"
            >
              Learn More About Us
            </a>
          </div>
        </div>

        {/* Michelle */}
        <div className="mt-10 grid items-start gap-6 md:grid-cols-[180px,1fr] md:items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src={aboutImage}
              alt="Michelle Lee, CEO and Owner of Clean Choice"
              className="h-40 w-40 rounded-2xl object-cover shadow-md ring-2 ring-white md:h-44 md:w-44"
            />
          </div>

          <div
            className="rounded-2xl border bg-white p-5 shadow-sm"
            style={{ borderColor: MID_TINT }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-bold text-slate-900">Michelle Lee</h3>
              <span
                className="rounded-full px-3 py-1 text-sm font-semibold"
                style={{ backgroundColor: LIGHT_TINT, color: DARK }}
              >
                CEO & Owner
              </span>
            </div>

            <p className="mt-2 text-slate-700">
              Michelle is a solution-oriented leader with dual degrees in
              Electrical Engineering from MSOE and FH Lübeck University in
              Germany, bringing a sharp eye for detail and process to every
              operation. Her hands-on leadership and commitment to Milwaukee’s
              business community ensure consistent, high-quality results for
              every client.
            </p>
          </div>
        </div>

        {/* Alex */}
        <div className="mt-6 grid items-start gap-6 md:grid-cols-[180px,1fr] md:items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src={alexImage}
              alt="Alex Bernt, COO of Clean Choice"
              className="h-40 w-40 rounded-2xl object-cover shadow-md ring-2 ring-white md:h-44 md:w-44"
            />
          </div>

          <div
            className="rounded-2xl border bg-white p-5 shadow-sm"
            style={{ borderColor: MID_TINT }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-bold text-slate-900">Alex Bernt</h3>
              <span
                className="rounded-full px-3 py-1 text-sm font-semibold"
                style={{ backgroundColor: LIGHT_TINT, color: DARK }}
              >
                COO & Director of Marketing
              </span>
            </div>

            <p className="mt-2 text-slate-700">
              Alex holds a degree in Business Administration from Coe College
              along with a Software Engineering certificate from Fullstack
              Academy, blending operational leadership with technical expertise.
              A two-time Boston Marathon finisher, he brings discipline,
              consistency, and high standards to everything Clean Choice does.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageAbout;
