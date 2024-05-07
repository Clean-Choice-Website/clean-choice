/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import thankyoucheck from "./assets/thankyoucheck.png";
import { BarLoader } from "react-spinners";
import emailjs from "emailjs-com";
import Review from "./components/Review";
import StarIcon from "./components/StarIcon";
import { scrollToTop } from "./utils/scrollToTop";
import { Helmet } from "react-helmet";
import ContactInfo from "./components/ContactInfo";

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

  const closeModal = () => {
    setSentSuccessfully(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        setFormData({
          name: "",
          email: "",
          message: "",
        });
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <div className="bg-slate-100 pb-8">
      <Helmet>
        {/* Google Analytics tracking code */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1CGBG1QG79"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-1CGBG1QG79');
          `}
        </script>
        <title>
          Clean Choice Wisconsin Reviews | Milwaukee Commercial Cleaning, Office
          Cleaning and Janitorial Services
        </title>
        <meta
          name="description"
          content="Customer reviews of Clean Choice Wisconsin. Hear what those that use our services for their commercial cleaning, office cleaning and janitorial needs have to say about the company or leave your own review."
        />
      </Helmet>
      <ContactInfo />
      <div className="mb-12 flex flex-col  items-center bg-logoGreen py-5">
        <h1 className="mb-1 text-center text-3xl font-semibold text-white">
          Reviews
        </h1>
        <div className="flex gap-1">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <Review name="Jet In MKE">
          We are a FBO at Mitchell airport and have been using Clean Choice for
          over a year. They are very professional and pay attention to detail.
          Their staff is friendly and communicate well with us. They are also
          flexible as aircraft sometimes modify our plans. I would highly
          recommend this service to anyone looking. Michelle the owner checks in
          regularly so we can update any services. We appreciate her above and
          beyond attitude.
        </Review>
        <Review name="Peak Performance Fitness Facility">
          We are a gym located in Greendale, and we recently enlisted Clean
          Choice to clean our facility. Michelle and Alex were easy to work
          with, maintaining clear communication throughout. We were particularly
          impressed by the thoroughness of their work, especially in the
          bathrooms. The sinks were previously covered with water stains and are
          now spotless. We highly recommend Clean Choice to anyone in need of
          top-notch cleaning services!
        </Review>
        <Review name={"Brandon Neddef"}>
          {`Good service and friendly staff. Staff is very friendly, punctual and thorough!`}
        </Review>
        <Review name="Kevin Coubal">
          Plant Supervisor. Very easy people to work with and very
          accommodating... Thanks for the Great service. I will definitely
          recommend and use again...
        </Review>
        <Review name={"Lisa Turnacliff"}>
          Clean Choice has done a good job. They are reliable and follow up with
          an concerns or questions that arise. I like the open communication
          between myself, the cleaners and Chad, the owner. I would recommend
          Clean Choice to anyone who is in the market for a new cleaning
          company.
        </Review>
        <Review name={"Jackie Hall"}>
          Great Service, easy to work with and everyone is very friendly! Chad,
          the owner, is very attentive and helpful. He is easy to work with and
          always making sure his workers are doing a good job. Chad always looks
          to make things easier and more efficient for his employees to be able
          to do their job better. Clean Choice also did our carpet cleaning.
          They come twice a week to clean and do a great job. I highly recommend
          Clean Choice for your custodial needs.
        </Review>
        <Review name={"James Hendley"}>
          Smooth execution of office carpet cleaning. I highly recommend Clean
          Choice for office carpet cleaning. Timely, accurate, high quality
          service, professionally executed with no impact on daily operations.
        </Review>
        <Review name={"Janet Rortvedt"}>
          Ridgestone Bank has been with Clean Choice since 2011. The thing I
          enjoy the most is that Chad, the owner, is very involved and EXTREMELY
          responsive when we have a concern or question. There has been
          occasional turn over of the on site cleaning staff and things can be
          missed when a new cleaner begins - talking with Chad clears any of our
          concerns as soon as we voice them.
        </Review>
        <Review name={"Jody Giacomini"}>
          Clean Choice is always receptive to any needs. Clean choice is always
          receptive to any needs, requirements, or changes that we have needed
          in the past. They strive to provide quality employees for our cleaning
          needs. We have a very challenging work environment and they are very
          good about understanding this dynamic. We have been very pleased, in
          the past, and the improvements are evident of late as well.
        </Review>
        <Review name={"Kathy K."}>
          Did a great job. Did a great job in our manufacturing facility. Very
          reasonably priced.
        </Review>
        <Review name={"Luann Nevius"}>
          Clean Choice does a great job keeping our office clean. Clean Choice
          does a great job keeping our office clean.
        </Review>
        <Review name={"April Blok"}>
          Clean Choice has been such a great company to have clean our offices.
          Full Review: Clean Choice has been such a great company to have clean
          our offices. Chad & Mike both go above and beyond to check in and make
          sure that we are happy with the services that are being provided.
          Clean Choice has also been a great help with our company, as we are a
          General Contractor. We had one of our cleaning companies back out on a
          job, and Chad was able to step in last minute to be able to fulfill
          the services that we needed.
        </Review>
        <Review name={"Kris Nelson"}>
          We are a small, independent, private school and we were looking for
          quality cleaning on a budget. Chad at Clean Choice has provided that
          to us. From stripping and waxing our CVT flooring and making them
          shine, to getting out years of old stains from our carpets, we
          couldn't be more pleased. Chad is very responsive to all of our needs
          and responds quickly to any concerns that may arise. He has also gone
          above and beyond to help do other things around the school as well
          (from helping replace lighting, to fixing doors and other maintenance
          items). Thank you, Chad and Company for being such a great resource
          for us!
        </Review>
      </div>
      <div className="mt-16 text-center">
        <h1 className="mb-3 mt-2 text-3xl font-bold">Leave A Review</h1>
        {/* <p className='mb-4'>We are here for you! How can we help?</p> */}
        <form
          onSubmit={handleSubmit}
          className="mx-4 max-w-2xl space-y-5 md:mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 p-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 p-2"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="h-32 w-full rounded-md border border-gray-300 p-2"
          ></textarea>
          <div className="flex justify-start">
            <button
              type="submit"
              disabled={isSending}
              className={`mr-4 rounded-sm bg-logoGreen px-6 font-bold text-white transition-all hover:bg-logoGreenHover ${
                isSending ? "py-5" : "py-2"
              }`}
            >
              {isSending ? (
                <BarLoader color="#fff" width={56} height={3} />
              ) : (
                "Submit"
              )}
            </button>
            {errorMsg ? (
              <small>Oops there was an error, please try again.</small>
            ) : null}
          </div>
        </form>
      </div>

      {/* Successful review sent modal */}
      {sentSuccessfully && (
        <div className="fixed left-0 top-0 z-40 flex h-full w-full items-center justify-center bg-black bg-opacity-50 text-center">
          <div
            ref={modalRef}
            className="relative mx-3 max-w-lg rounded-lg bg-white p-7 sm:mx-0"
          >
            <div className="mb-4 flex justify-center">
              {/* Apply Tailwind CSS classes to adjust the size of the confirmation icon */}
              <img
                src={thankyoucheck}
                alt="Confirmation Icon"
                className="h-12 w-12"
              />
            </div>
            <h1 className="mb-4 text-3xl font-bold">Thank You!</h1>
            <p className="mb-10">
              Thanks for leaving a review. Your feedback helps us get better!
            </p>
            <button
              type="button"
              onClick={closeModal}
              className="rounded-sm bg-logoGreen px-6 py-2 font-bold text-white hover:bg-logoGreenHover"
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
