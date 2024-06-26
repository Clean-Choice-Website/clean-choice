import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
import pin from "../assets/pin.png";

const ContactInfo = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3 bg-slate-200 py-6 text-sm sm:flex-row sm:gap-7 md:gap-16 md:text-base lg:gap-32">
      <div className="flex items-center gap-2 font-bold">
        <img src={phone} alt="Phone icon" className="w-6" />
        <a href="tel:+14143109206">(414)310-9206</a>
      </div>
      <div className="flex items-center gap-2 font-bold">
        <img src={email} alt="Email icon" className="w-7" />
        <a href="mailto:info@cleanchoicewi.com">
          <p>info@cleanchoicewi.com</p>
        </a>
      </div>
      <div className="flex items-center gap-2 font-bold">
        <img src={pin} alt="Map pin icon" className="w-6" />
        <p>Milwaukee, WI</p>
      </div>
    </div>
  );
};

export default ContactInfo;
