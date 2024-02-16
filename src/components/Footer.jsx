import "../App.css";
import linkedin from "../assets/linkedin.png";
import cleanChoice from "../assets/CleanChoice.png";
import { Link } from "react-router-dom";

function Footer({ openModal }) {
  return (
    <>
      <footer className="mx-auto flex max-w-7xl flex-col items-center justify-between px-16 py-8 md:flex-row md:px-8">
        <Link to="/">
          <div className="items-center gap-2 pb-4 md:flex">
            <img
              src={cleanChoice}
              alt="Clean Choice icon"
              className="w-36 sm:w-40 md:w-44"
            />
          </div>
        </Link>
        <div>
          <ul className="flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:text-left">
            <Link to="/about">
              <li className="text-md w-20 font-semibold transition-all hover:text-logoGreen md:w-20 lg:w-32 lg:text-lg">
                About Us
              </li>
            </Link>
            <Link to="/services">
              <li className="text-md w-20 font-semibold transition-all hover:text-logoGreen md:w-20 lg:w-32 lg:text-lg">
                Services
              </li>
            </Link>
            <Link to="/reviews">
              <li className="text-md w-20 font-semibold transition-all hover:text-logoGreen md:w-20 lg:w-32 lg:text-lg">
                Reviews
              </li>
            </Link>
            <div className="hidden md:block">
              <li className="text-md hidden text-center font-semibold transition-all hover:cursor-pointer hover:text-logoGreen md:block md:w-20 md:text-left lg:w-32 lg:text-lg">
                Follow Us
              </li>
              <ul className="hidden text-center text-xs md:block md:text-sm">
                <a
                  href="https://www.linkedin.com/company/cleanchoicellc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li className="ml-7">
                    <img src={linkedin} alt="Linkedin icon" className="w-6" />
                  </li>
                </a>
              </ul>
            </div>
            <div>
              <li
                onClick={openModal}
                className="text-md text-center font-semibold transition-all hover:cursor-pointer hover:text-logoGreen md:w-24 md:text-left lg:w-32 lg:text-lg"
              >
                Contact Us
              </li>
              <div>
                <ul className="flex flex-col items-center text-xs md:block md:text-sm">
                  <a
                    href="tel:+14143109206"
                    className="transition-all hover:text-logoGreen"
                  >
                    <li>(414) 310-9206</li>
                  </a>
                  <a
                    href="mailto:info@cleanchoicewi.com"
                    className="transition-all hover:text-logoGreen"
                  >
                    <li>info@cleanchoicewi.com</li>
                  </a>
                </ul>
              </div>
            </div>
            <ul className="flex md:hidden">
              <li className="px-1">
                <a
                  href="https://www.linkedin.com/company/cleanchoicellc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedin} alt="Linkedin icon" className="w-6" />
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
