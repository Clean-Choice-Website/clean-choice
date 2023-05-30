import { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";

const JobModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    file: null, // New state for the uploaded file
  });

  const modalRef = useRef(null);

  const handleChange = (e) => {
    if (e.target.name === "file") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message, file } = formData;

    const formDataToSend = new FormData();
    formDataToSend.append("name", name);
    formDataToSend.append("email", email);
    formDataToSend.append("message", message);
    formDataToSend.append("file", file);

    // Replace "YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", and "YOUR_USER_ID" with your actual values
    emailjs
      .sendForm(
        "service_ge8matn",
        "template_nh0bluk",
        formDataToSend,
        "bD-Rm5YFO4MwTl9Py"
      )
      .then(() => {
        alert("Your message has been sent successfully!");
        closeModal();
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

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
    <div className="fixed left-0 top-0 z-40 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="relative max-w-md rounded-lg bg-white p-7">
        <h1 className="mb-1 mt-2 text-3xl font-bold">Job Apply</h1>
        <p className="mb-8">Interested in working with us?</p>
        <form onSubmit={handleSubmit} className="space-y-5">
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
          <input
            type="file"
            name="file"
            accept=".pdf"
            onChange={handleChange}
            className="py-2"
          />
          <div className="flex justify-start">
            <button
              type="submit"
              className="mr-4 rounded-sm bg-logoGreen px-6 py-2 font-bold text-white hover:bg-logoGreenHover"
            >
              Send Message
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="mr-2 text-black"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobModal;
