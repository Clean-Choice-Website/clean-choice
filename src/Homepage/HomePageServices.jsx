// src/pages/HomePageServices.jsx
/* eslint-disable react/prop-types */
const DARK = "#406C2A";
const MID_TINT = "rgba(64,108,42,0.18)";
const LIGHT_TINT = "rgba(64,108,42,0.12)";

const FORM_URL = "https://40s7vw.share-na2.hsforms.com/2vnsTJgLFQiK5iSSq8YUuVA";

const HomePageServices = ({ commercialImg, constructionImg, floorImg }) => {
  return (
    <section id="services" className="py-16 md:py-20">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-10">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
            Services tailored to your space
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-slate-600">
            Reliable recurring cleaning, one-time deep cleans, detailed
            post-construction cleanup, and optional floor care that keeps
            high-traffic areas looking their best.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Recurring Office Cleaning",
              desc: "Scheduled visits with clear checklists, consistent crews, and simple communication.",
              icon: "🗓️",
              img: commercialImg,
              imgPos: "center 40%",
            },
            {
              title: "One-Time Deep Cleans",
              desc: "Perfect for resets, move-ins, events, or seasonal cleanups. Add-ons include floor scrubbing and hot water carpet extraction.",
              icon: "✨",
              img: floorImg,
              imgPos: "center 50%",
            },
            {
              title: "Post-Construction Cleaning",
              desc: "Dust, debris, and residue removed so your space is move-in ready after renovation.",
              icon: "🏗️",
              img: constructionImg,
              imgPos: "center 20%",
            },
          ].map((s) => (
            <a
              key={s.title}
              href="/services"
              className="group h-full rounded-2xl border bg-white p-6 shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2"
              style={{ borderColor: MID_TINT }}
              aria-label={`View details for ${s.title}`}
            >
              <div className="mb-4 overflow-hidden rounded-xl">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  style={{ objectPosition: s.imgPos }}
                  loading="lazy"
                />
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="grid h-10 w-10 place-items-center rounded-xl text-xl"
                  style={{ backgroundColor: LIGHT_TINT, color: DARK }}
                >
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {s.title}
                </h3>
              </div>

              <p className="mt-2 text-slate-600">{s.desc}</p>

              <div
                className="mt-4 text-sm font-semibold"
                style={{ color: DARK }}
              >
                Learn more →
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-[#406C2A] px-6 py-3 font-semibold text-white shadow-lg shadow-green-700/30 transition hover:bg-[#355622] focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePageServices;
