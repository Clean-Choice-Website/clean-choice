import ContactInfo from "./components/ContactInfo";
import thankyoucheck from "./assets/thankyoucheck.png";
import { BarLoader } from "react-spinners";
import { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import application from "./assets/Employment.pdf";
import { scrollToTop } from "./utils/scrollToTop";
import Indeed from "./assets/indeed.png";
import { MoonLoader } from "react-spinners";
import { Helmet } from "react-helmet";

const Careers = () => {
  const [isLoading, setIsLoading] = useState(true);
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

    // Replace "YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", and "YOUR_USER_ID" with your actual values
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

    // Create a new image and set the source to CleaningImg
    const img = new Image();
    img.src = Indeed;
    img.onload = () => {
      // When the image is loaded, update the loading state to false
      setIsLoading(false);
    };
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
    <div>
      <Helmet>
        <title>
          Clean Choice Wisconsin Careers | Milwaukee Commercial Cleaning, Office
          Cleaning and Janitorial Careers
        </title>
        <meta
          name="description"
          content="Explore commercial cleaning and janitorial jobs at Clean Choice Wisconsin operating in Milwaukee and the surrounding areas. View our open positions to get started with a rewarding career in the cleaning industry."
        />
      </Helmet>
      {isLoading ? (
        <div className="mt-40 flex h-screen items-start justify-center">
          <MoonLoader color={"#497429"} />
        </div>
      ) : (
        <div>
          <ContactInfo />
          <div className="items-center bg-slate-100 py-8 md:flex md:flex-col md:justify-center md:align-top">
            <div className="md:ml-14a">
              <div className=" mx-auto w-80 text-center md:w-auto">
                <h1 className="mb-5 pt-10 text-4xl font-bold md:mt-0 md:text-5xl">
                  Start a Career with us today!
                </h1>
                <h2 className="text-xl font-semibold">
                  We are always hiring and are looking for passionate
                  individuals.
                </h2>
              </div>
              <div className="pt-4 text-center">
                <a
                  href="https://www.indeed.com/cmp/Clean-Choice,-LLC?_gl=1*gmat5r*_gcl_au*MTI4Nzc5MTg2Ny4xNjgxMDc0MTgw"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="rounded-md bg-[#2457A7] px-6 py-3 text-center font-bold text-white transition-all hover:bg-[#2440a7]">
                    <div className=" inline-flex gap-2">
                      Apply with Indeed{" "}
                      <img className="w-6" src={Indeed} alt="Indeed Icon" />
                    </div>
                  </button>
                </a>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-5 w-72 space-y-5 md:mx-14 md:w-96"
            >
              <h4 className="text-md text-center font-semibold">
                Download an application{" "}
                <a
                  href={application}
                  target="_blank"
                  rel="noreferrer"
                  className="text-logoGreen underline hover:text-logoGreenHover"
                >
                  here
                </a>{" "}
                and
                <br></br>
                email to{" "}
                <a
                  href="mailto:michelle@cleanchoicewi.com"
                  className="transition-all hover:text-logoGreen"
                >
                  michelle@cleanchoicewi.com
                </a>
                <br></br>
                <br></br>
                Contact us about available jobs
              </h4>
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
                // type="text"
                name="message"
                placeholder="What you are looking for"
                value={formData.message}
                onChange={handleChange}
                required
                className="h-32 w-full rounded-md border border-gray-300 p-2"
              />
              <div className="flex">
                <button
                  type="submit"
                  className={`w-full rounded-md bg-logoGreen px-6 font-bold text-white transition-all hover:bg-logoGreenHover ${
                    isSending ? "py-5" : "py-2"
                  }`}
                >
                  {isSending ? (
                    <BarLoader color="#fff" width={"100%"} height={3} />
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
              {errorMsg ? (
                <small className=" flex justify-center">
                  Oops there was an error, please try again.
                </small>
              ) : null}
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
                  Thanks for contacting us. We will be reaching out to you soon!
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
      )}
    </div>
  );
};

export default Careers;
