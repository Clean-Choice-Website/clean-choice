import { useEffect, useState } from "react";
// import emailjs from 'emailjs-com';
import Review from "./components/Review";
import StarIcon from "./components/StarIcon";
import { scrollToTop } from "./utils/scrollToTop";
import { BarLoader } from "react-spinners";

const Reviews = () => {
  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sentSuccessfully, setSentSuccessfully] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending((prev) => !prev);

    setTimeout(() => {
      setIsSending((prev) => !prev);
      setSentSuccessfully(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 1900);

    // clearTimeout(fakeWait);

    // Replace "YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", and "YOUR_USER_ID" with your actual values
    // emailjs
    //   .sendForm(
    //     "service_pm4gjbs",
    //     "template_1bkwyao",
    //     e.target,
    //     "0yFpo6v7S8OzZG-s5"
    //   )
    //   .then(() => {
    //     alert('Your message has been sent successfully!');
    //   })
    //   .catch((error) => {
    //     console.error('Error sending message:', error);
    //   });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className=" bg-slate-100 pb-8">
      <div className="mb-12 flex flex-col  items-center bg-logoGreen py-5">
        <h1 className="mb-1 text-center text-3xl font-semibold text-white">
          Testimonials
        </h1>
        <div className="flex gap-1">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
      </div>
      <div className="mx-4 flex flex-col gap-4">
        {/* {Array.from({ length: 10 }).map((_, idx) => (
          <Testimonial key={idx}>
            Lorem ipsum dolor sit amet consect etur, adipisicing elit. Non,
            deleniti consectetur nihil quaerat soluta explicabo enim{' '}
            </Testimonial>
        ))} */}
      </div>
      <div className="flex flex-col gap-6">
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
              className={`mr-4 rounded-sm bg-logoGreen px-6 font-bold text-white hover:bg-logoGreenHover ${
                isSending ? "py-5" : "py-2"
              }`}
            >
              {isSending ? (
                <BarLoader color="#fff" width={56} height={3} />
              ) : (
                "Submit"
              )}
            </button>
            {sentSuccessfully ? <small>Message sent.</small> : null}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
