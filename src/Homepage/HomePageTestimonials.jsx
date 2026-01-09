/* eslint-disable react/prop-types */
import { useMemo, useState, useEffect } from "react";

const DARK = "#406C2A";
const MID_TINT = "rgba(64,108,42,0.18)";

const HomePageTestimonials = () => {
  const reviews = useMemo(
    () => [
      {
        name: "29ten Salon",
        role: "Google Review",
        quote:
          "Clean Choice went above and beyond in cleaning our salon! We were in need of a deep clean and we know that is no small feat in an environment where there is hair everywhere! Michelle and Alex were extremely responsive and knowledgeable. They completed a walkthrough of our space ahead of time and asked questions about what our goals were. They showed up on time and ready to work the day of our clean and were extremely detail-oriented. We have gotten so many compliments on how clean and fresh our space is in the new year. They have exceptional customer service and we would absolutely recommend reaching out to them to clean your business, as well!",
      },
      {
        name: "Mike Ryan",
        role: "Google Review",
        quote:
          "Great team of professionals that communicate well, keep on schedule, do a great job deep cleaning (I had them work on construction clean-up), and offer a competitive price. Will definitely use them again!",
      },
      {
        name: "Michael Hamerlind",
        role: "Google Review",
        quote:
          "Michelle and her team at Clean Choice have been a professional and reliable partner for our Milwaukee based company. Always engaged with prompt and resolute communication. Would recommend!",
      },
      {
        name: "Jon Zelie",
        role: "Google Review",
        quote:
          "Clean Choice is a solid pick for a cleaning service. Michelle and her team are easy to deal with, super reliable, and committed to quality.",
      },
      {
        name: "Michelle Laycock",
        role: "Google Review",
        quote:
          "We are happy with the cleaning service we are receiving at 9840 S 27th St. The floors and bathrooms look good on Monday mornings and the rooms smell fresh. Thank you!",
      },
      {
        name: "Kate Schmitt",
        role: "Google Review",
        quote:
          "Clean Choice cleans our downtown offices. Their thorough services leave our workspaces looking top-notch every day! I especially love their attentive customer service. They are quick to respond to any sort of request! Would recommend!",
      },
      {
        name: "javier avila",
        role: "Google Review",
        quote:
          "I’ve been working with this company for 1 year and 6 months and have been extremely happy with the service I’ve received.",
      },
      {
        name: "Kathy Young",
        role: "Google Review",
        quote: "⭐️⭐️⭐️⭐️⭐️",
      },
      {
        name: "Joe Roubik",
        role: "Google Review",
        quote:
          "Clean Choice is an exceptional cleaning company. They take care of everything we need with professionalism and efficiency. I highly recommend them for special projects and regular cleaning. I could not be happier with the results.",
      },
      {
        name: "Frank Colavita",
        role: "Google Review",
        quote:
          "We are a gym located in Greendale, and we recently enlisted Clean Choice to clean our facility. Michelle and Alex were easy to work with, maintaining clear communication throughout. We were particularly impressed by the thoroughness of their work, especially in the bathrooms. The sinks were previously covered with water stains and are now spotless. We highly recommend Clean Choice to anyone in need of top-notch cleaning services!",
      },
    ],
    []
  );

  const [page, setPage] = useState(0);
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 768 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalPages = Math.max(1, Math.ceil(reviews.length / perView));
  const start = page * perView;
  const visible = reviews.slice(start, start + perView);

  const prevPage = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const nextPage = () => setPage((p) => (p + 1) % totalPages);

  return (
    <section
      id="reviews"
      className="border-y border-slate-200 py-16 md:py-20"
      style={{
        background: "linear-gradient(180deg, rgba(64,108,42,0.10), #ffffff)",
      }}
    >
      <div className="mx-auto max-w-screen-2xl px-6 md:px-10">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
            Our customers love what we do
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-slate-700">
            Real feedback from businesses across Milwaukee and the surrounding
            suburbs.
          </p>
        </div>

        <div className="mt-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((r, i) => (
              <figure
                key={`${r.name}-${i}`}
                className="rounded-2xl border bg-white p-6 shadow-sm"
                style={{ borderColor: MID_TINT }}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      backgroundColor: "rgba(64,108,42,0.12)",
                      color: DARK,
                    }}
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

                <blockquote className="mt-3 text-slate-800">
                  “{r.quote}”
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
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-sm text-slate-600">{r.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* manual controls */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={prevPage}
              className="h-10 w-10 rounded-full border bg-white hover:bg-[rgba(64,108,42,0.06)]"
              style={{ borderColor: MID_TINT }}
              aria-label="Previous reviews"
            >
              ‹
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }).map((_, i) => (
                <span
                  key={i}
                  className={`h-2.5 w-2.5 rounded-full ${
                    i === page ? "bg-[#406C2A]" : "bg-[rgba(64,108,42,0.28)]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              className="h-10 w-10 rounded-full border bg-white hover:bg-[rgba(64,108,42,0.06)]"
              style={{ borderColor: MID_TINT }}
              aria-label="Next reviews"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageTestimonials;
