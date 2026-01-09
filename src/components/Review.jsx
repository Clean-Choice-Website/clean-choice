/* eslint-disable react/prop-types */
const DARK = "#406C2A";
const MID_TINT = "rgba(64,108,42,0.18)";
const LIGHT_TINT = "rgba(64,108,42,0.12)";

const Review = ({ children, name }) => {
  return (
    <figure
      className="w-full rounded-2xl border bg-white p-6 shadow-sm"
      style={{ borderColor: MID_TINT }}
    >
      <div className="flex items-center justify-between">
        <div
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
          style={{ backgroundColor: LIGHT_TINT, color: DARK }}
        >
          Google reviews
        </div>

        <div
          className="flex items-center gap-1 text-amber-500"
          aria-hidden="true"
        >
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
      </div>

      {/* 👇 This min-height is what prevents “square” cards on short reviews */}
      <blockquote className="mt-3 min-h-[96px] text-slate-800 md:min-h-0">
        “{children}”
      </blockquote>

      <figcaption className="mt-4 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-100">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="text-slate-400"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 12c2.761 0 5-2.686 5-6s-2.239-6-5-6-5 2.686-5 6 2.239 6 5 6zm0 2c-4.418 0-8 2.239-8 5v3h16v-3c0-2.761-3.582-5-8-5z" />
          </svg>
        </div>

        <div>
          <div className="font-semibold text-slate-900">{name}</div>
          <div className="text-sm text-slate-600">Google Review</div>
        </div>
      </figcaption>
    </figure>
  );
};

export default Review;
