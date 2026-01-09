/* eslint-disable react/prop-types */
const DARK = "#406C2A";
const MID_TINT = "rgba(64,108,42,0.18)";

const HomePageWhyChoose = () => {
  return (
    <section
      id="why-choose"
      className="relative py-16 md:py-20"
      style={{ backgroundColor: DARK, color: "white" }}
    >
      <div className="mx-auto max-w-screen-xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
            Why choose Clean Choice?
          </h2>
          <p className="mt-2 text-emerald-100">
            Clear communication, consistent results, and crews that treat your
            space like their own.
          </p>
        </div>

        {/* vertical features with left connector line */}
        <div className="relative mx-auto mt-10 max-w-3xl">
          <div
            className="absolute bottom-0 left-5 top-0 w-px"
            style={{ backgroundColor: "rgba(255,255,255,0.35)" }}
          />
          <div className="space-y-6">
            {[
              [
                "Reliable schedules",
                "We show up on time with the same trained team and a clear checklist.",
                "✅",
              ],
              [
                "Quality checks",
                "Supervisors perform routine inspections and respond quickly to feedback.",
                "🔍",
              ],
              [
                "Simple communication",
                "One point of contact and fast responses via email, call, or text.",
                "💬",
              ],
              [
                "Full service",
                "From recurring office care to post-construction and floor maintenance.",
                "🧰",
              ],
            ].map(([title, desc, icon]) => (
              <div key={title} className="relative pl-12">
                <div
                  className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-xl text-xl"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.15)",
                    color: "white",
                  }}
                >
                  {icon}
                </div>
                <div
                  className="rounded-2xl border bg-white p-5 shadow-sm"
                  style={{ borderColor: MID_TINT, color: "#0f172a" }}
                >
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-slate-700">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageWhyChoose;
