/* eslint-disable react/prop-types */
import { useState, useEffect, useRef, useMemo } from "react";
import thankyoucheck from "./assets/thankyoucheck.png";
import { BarLoader } from "react-spinners";
import emailjs from "emailjs-com";
import Review from "./components/Review";
import StarIcon from "./components/StarIcon";
import { scrollToTop } from "./utils/scrollToTop";
import { Helmet } from "react-helmet";
import ContactInfo from "./components/ContactInfo";

const DARK = "#406C2A";
const DARKER = "#355622";
const MID_TINT = "rgba(64,108,42,0.18)";
const LIGHT_TINT = "rgba(64,108,42,0.12)";

const Reviews = () => {
  const [isSending, setIsSending] = useState(false);
  const modalRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sentSuccessfully, setSentSuccessfully] = useState(false);

  const reviews = useMemo(
    () => [
      {
        name: "29ten Salon",
        quote:
          "Clean Choice went above and beyond in cleaning our salon! We were in need of a deep clean and we know that is no small feat in an environment where there is hair everywhere! Michelle and Alex were extremely responsive and knowledgeable. They completed a walkthrough of our space ahead of time and asked questions about what our goals were. They showed up on time and ready to work the day of our clean and were extremely detail-oriented. We have gotten so many compliments on how clean and fresh our space is in the new year. They have exceptional customer service and we would absolutely recommend reaching out to them to clean your business, as well!",
      },
      {
        name: "Mike Ryan",
        quote:
          "Great team of professionals that communicate well, keep on schedule, do a great job deep cleaning (I had them work on construction clean-up), and offer a competitive price. Will definitely use them again!",
      },
      {
        name: "Michael Hamerlind",
        quote:
          "Michelle and her team at Clean Choice have been a professional and reliable partner for our Milwaukee based company. Always engaged with prompt and resolute communication. Would recommend!",
      },
      {
        name: "Jon Zelie",
        quote:
          "Clean Choice is a solid pick for a cleaning service. Michelle and her team are easy to deal with, super reliable, and committed to quality.",
      },
      {
        name: "Michelle Laycock",
        quote:
          "We are happy with the cleaning service we are receiving at 9840 S 27th St. The floors and bathrooms look good on Monday mornings and the rooms smell fresh. Thank you!",
      },
      {
        name: "Kate Schmitt",
        quote:
          "Clean Choice cleans our downtown offices. Their thorough services leave our workspaces looking top-notch every day! I especially love their attentive customer service. They are quick to respond to any sort of request! Would recommend!",
      },
      {
        name: "javier avila",
        quote:
          "I’ve been working with this company for 1 year and 6 months and have been extremely happy with the service I’ve received.",
      },
      {
        name: "Kathy Young",
        quote: "5-star Google review.",
      },
      {
        name: "Joe Roubik",
        quote:
          "Clean Choice is an exceptional cleaning company. They take care of everything we need with professionalism and efficiency. I highly recommend them for special projects and regular cleaning. I could not be happier with the results.",
      },
      {
        name: "Frank Colavita",
        quote:
          "We are a gym located in Greendale, and we recently enlisted Clean Choice to clean our facility. Michelle and Alex were easy to work with, maintaining clear communication throughout. We were particularly impressed by the thoroughness of their work, especially in the bathrooms. The sinks were previously covered with water stains and are now spotless. We highly recommend Clean Choice to anyone in need of top-notch cleaning services!",
      },
    ],
    []
  );

  const closeModal = () => setSentSuccessfully(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMsg(false);

    emailjs
      .sendForm(
        "service_pm4gjbs",
        "template_1bkwyao",
        e.target,
        "0yFpo6v7S8OzZG-s5"
      )
      .then(() => {
        setIsSending(false);
        setSentSuccessfully(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setErrorMsg(true);
        setIsSending(false);
        setSentSuccessfully(false);
        console.error("Error sending message:", error);
      });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  // close modal on outside click
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) closeModal();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="bg-white">
      <Helmet>
        {/* Google Analytics tracking code */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16595064549"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16595064549');
          `}
        </script>

        <title>
          Customer Reviews | Clean Choice WI | Milwaukee Cleaning Services
        </title>
        <meta
          name="description"
          content="Read customer reviews of Clean Choice Wisconsin. See what clients say about our commercial and office cleaning services or leave your own review."
        />
      </Helmet>

      <ContactInfo />

      {/* Header */}
      <div
        className="border-b py-10"
        style={{
          background: `linear-gradient(135deg, ${DARK}, ${DARKER})`,
          borderColor: MID_TINT,
        }}
      >
        <div className="mx-auto max-w-screen-2xl px-6 text-center md:px-10">
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Reviews
          </h1>

          <div className="mt-3 flex justify-center gap-1">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>

          <p className="mx-auto mt-3 max-w-2xl text-slate-100">
            Real Google reviews from businesses across Milwaukee and the
            surrounding suburbs.
          </p>
        </div>
      </div>

      {/* Reviews list */}
      <section
        className="py-14 md:py-16"
        style={{
          background: "linear-gradient(180deg, rgba(64,108,42,0.08), #ffffff)",
        }}
      >
        <div className="mx-auto max-w-screen-2xl px-6 md:px-10">
          <div className="grid gap-6">
            {reviews.map((r) => (
              <Review key={r.name} name={r.name}>
                {r.quote}
              </Review>
            ))}
          </div>

          {/* Leave a review */}
          <div className="mt-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Leave a Review
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-slate-600">
                Have feedback to share? Send us a quick note and we’ll follow
                up.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 max-w-2xl space-y-4 rounded-2xl border bg-white p-6 shadow-sm"
              style={{ borderColor: MID_TINT }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border bg-white p-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                style={{ borderColor: MID_TINT }}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border bg-white p-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                style={{ borderColor: MID_TINT }}
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="h-32 w-full rounded-xl border bg-white p-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                style={{ borderColor: MID_TINT }}
              />

              <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex items-center justify-center rounded-xl bg-[#406C2A] px-6 py-3 font-semibold text-white shadow-lg shadow-green-700/30 transition hover:bg-[#355622] disabled:opacity-70"
                >
                  {isSending ? (
                    <BarLoader color="#fff" width={56} height={3} />
                  ) : (
                    "Submit"
                  )}
                </button>

                {errorMsg ? (
                  <small className="text-sm font-semibold text-rose-600">
                    Oops — there was an error. Please try again.
                  </small>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Successful review sent modal */}
      {sentSuccessfully && (
        <div className="fixed left-0 top-0 z-40 flex h-full w-full items-center justify-center bg-black/50 px-4 text-center">
          <div
            ref={modalRef}
            className="relative w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl"
          >
            <div className="mb-4 flex justify-center">
              <img
                src={thankyoucheck}
                alt="Confirmation Icon"
                className="h-12 w-12"
              />
            </div>

            <h3 className="mb-3 text-3xl font-extrabold text-slate-900">
              Thank You!
            </h3>
            <p className="mb-8 text-slate-600">
              Thanks for leaving a review. Your feedback helps us get better!
            </p>

            <button
              type="button"
              onClick={closeModal}
              className="inline-flex items-center justify-center rounded-xl bg-[#406C2A] px-6 py-3 font-semibold text-white transition hover:bg-[#355622]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
