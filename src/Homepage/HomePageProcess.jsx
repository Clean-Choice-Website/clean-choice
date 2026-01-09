/* eslint-disable react/prop-types */
const DARK = "#406C2A";
const MID_TINT = "rgba(64,108,42,0.18)";

const ArrowRight = () => (
  <svg
    width="64"
    height="24"
    viewBox="0 0 64 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto"
  >
    <path
      d="M0 12h52"
      stroke="rgba(64,108,42,0.35)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M52 4l8 8-8 8"
      stroke="rgba(64,108,42,0.55)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ArrowDown = () => (
  <svg
    width="24"
    height="64"
    viewBox="0 0 24 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto"
  >
    <path
      d="M12 0v52"
      stroke="rgba(64,108,42,0.35)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M4 52l8 8 8-8"
      stroke="rgba(64,108,42,0.55)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const CheckMark = ({ size = 28 }) => (
  <svg
    width={size}
    height={(size * 24) / 28}
    viewBox="0 0 28 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto"
  >
    <path
      d="M3 13l6 6L25 3"
      stroke="rgba(64,108,42,0.7)"
      strokeWidth={size >= 48 ? 3.5 : 3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HomePageProcess = () => {
  return (
    <section id="process" className="relative py-16 md:py-20">
      {/* subtle dotted texture */}
      <div
        className="opacity-35 absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(rgba(64,108,42,0.08) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="mx-auto max-w-screen-2xl px-6 md:px-10">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
            Our process
          </h2>
          <p className="mt-2 text-slate-600">
            A clear path from walkthrough to consistent quality.
          </p>
        </div>

        <div className="relative mx-auto mt-10 max-w-5xl">
          {/* horizontal connector on desktop */}
          <div
            className="absolute left-6 right-6 top-8 hidden h-1 rounded-full md:block"
            style={{ backgroundColor: "rgba(64,108,42,0.22)" }}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              [
                "1",
                "Schedule a walk-through",
                "We learn your space, priorities, and schedule.",
              ],
              [
                "2",
                "Custom plan & quote",
                "Clear scope, frequency options, and start date.",
              ],
              [
                "3",
                "Execution & quality checks",
                "Trained crews with ongoing inspections and feedback.",
              ],
            ].map(([num, title, desc], i) => (
              <div key={num} className="relative">
                {/* timeline node */}
                <div
                  className="absolute left-1/2 top-7 z-10 hidden h-5 w-5 -translate-x-1/2 place-items-center rounded-full ring-4 ring-white md:grid"
                  style={{ backgroundColor: DARK }}
                />
                {/* card */}
                <div
                  className="flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm"
                  style={{ borderColor: MID_TINT }}
                >
                  <div
                    className="mb-2 grid h-9 w-9 place-items-center rounded-xl font-extrabold text-white"
                    style={{ backgroundColor: DARK }}
                  >
                    {num}
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-slate-600">{desc}</p>
                  <div className="flex-1" />
                  <div className="mt-4 hidden min-h-[24px] items-center justify-end md:flex">
                    {i < 2 ? <ArrowRight /> : <CheckMark />}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* mobile connectors — bigger final checkmark */}
          <div className="mt-6 space-y-6 md:hidden">
            <div className="flex justify-center">
              <ArrowDown />
            </div>
            <div className="flex justify-center">
              <CheckMark size={64} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageProcess;
