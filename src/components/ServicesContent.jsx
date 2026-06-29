/* eslint-disable react/prop-types */
const DARK = "#406C2A";
const MID_TINT = "rgba(64,108,42,0.18)";
const LIGHT_TINT = "rgba(64,108,42,0.12)";

const ServicesContent = ({
  image,
  name,
  info,
  list,
  row,
  imgPos = "center",
}) => {
  return (
    <article
      className="rounded-2xl border bg-white p-6 shadow-sm md:p-8"
      style={{ borderColor: MID_TINT }}
    >
      <div className={row}>
        {/* Image (desktop) */}
        <div className="hidden lg:block lg:basis-1/2">
          <div
            className="flex h-[320px] items-center justify-center overflow-hidden rounded-2xl shadow-sm"
            style={{ backgroundColor: "rgba(64,108,42,0.06)" }}
          >
            <img
              className="h-full w-full object-contain"
              style={{ objectPosition: imgPos }}
              src={image}
              alt={name}
              loading="lazy"
            />
          </div>
        </div>

        {/* Content */}
        <div className="lg:basis-1/2">
          <div className="text-center lg:text-left">
            <div
              className="mx-auto inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold lg:mx-0"
              style={{ backgroundColor: LIGHT_TINT, color: DARK }}
            >
              Service
            </div>

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
              {name}
            </h2>
          </div>

          <p className="mt-3 text-slate-700">{info}</p>

          {/* Image (mobile/tablet) */}
          <div className="mt-5 lg:hidden">
            <div
              className="flex h-64 items-center justify-center overflow-hidden rounded-2xl shadow-sm"
              style={{ backgroundColor: "rgba(64,108,42,0.06)" }}
            >
              <img
                className="h-full w-full object-contain"
                style={{ objectPosition: imgPos }}
                src={image}
                alt={name}
                loading="lazy"
              />
            </div>
          </div>

          {/* List */}
          <ul className="mt-6 space-y-2 text-slate-700">
            {list.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: DARK }}
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ServicesContent;
