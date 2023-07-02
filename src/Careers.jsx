import ContactInfo from "./components/ContactInfo";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import application from "./assets/Employment.pdf";
import { scrollToTop } from "./utils/scrollToTop";
import Indeed from "./assets/indeed.png";

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace "YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", and "YOUR_USER_ID" with your actual values
    emailjs
      .sendForm(
        "service_pm4gjbs",
        "template_1bkwyao",
        e.target,
        "0yFpo6v7S8OzZG-s5"
      )
      .then(() => {
        alert("Your message has been sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <ContactInfo />
      <div className="items-center bg-slate-100 py-8 md:flex md:flex-col md:justify-center md:align-top">
        <div className="md:ml-14a">
          <div className=" mx-auto w-80 text-center md:w-auto">
            <h1 className="mb-5 pt-10 text-4xl font-bold md:mt-0 md:text-5xl">
              Start a Career with us today!
            </h1>
            <h2 className="text-xl font-semibold">
              We are always hiring and are looking for passionate individuals.
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
            </a>
            <div className="">or</div>
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
              className="w-full rounded-md bg-logoGreen px-6 py-2 font-bold text-white transition-all hover:bg-logoGreenHover"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Careers;
