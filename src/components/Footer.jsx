import "../App.css";
import twitter from "../assets/twitter-sign.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import cleanChoice from "../assets/CleanChoice.png";
import { Link } from "react-router-dom";

function Footer({ openModal }) {
  return (
    <>
      <footer className="mx-auto flex max-w-7xl flex-col items-center justify-between px-16 py-8 md:flex-row md:px-8">
        <Link to="/">
          <div className="md: flex items-center gap-2 pb-4">
            <img
              src={cleanChoice}
              alt="Clean Choice icon"
              className="w-36 sm:w-40 md:w-44"
            />
          </div>
        </Link>
        <div>
          <ul className="flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:gap-6 md:text-left">
            <Link to="/about">
              <li className="text-md w-20 font-bold md:w-20 lg:w-32 lg:text-lg">
                About Us
              </li>
            </Link>
            <Link to="/services">
              <li className="text-md w-20 font-bold md:w-20 lg:w-32 lg:text-lg">
                Services
              </li>
            </Link>
            <Link to="/reviews">
              <li className="text-md w-20 font-bold md:w-20 lg:w-32 lg:text-lg">
                Reviews
              </li>
            </Link>
            <div>
              <li
                onClick={openModal}
                className="text-md text-center font-bold hover:cursor-pointer md:w-24 md:text-left lg:w-32 lg:text-lg"
              >
                Contact Us
              </li>
              <div>
                <ul className="flex flex-col items-center text-xs md:block md:text-sm">
                  <li>(414) 310-9206</li>
                  <li>michelle@cleanchoicewi.com</li>
                </ul>
              </div>
            </div>
            <ul className="flex md:hidden">
              <li className="px-1">
                <a
                  href="https://twitter.com/CleanChoiceWI"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={twitter} alt="Twitter icon" className="w-6" />
                </a>
              </li>
              <li className="px-1">
                <a
                  href="https://www.facebook.com/profile.php?id=100063456492630"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={facebook} alt="Facebook icon" className="w-6" />
                </a>
              </li>
              <li className="px-1">
                <a
                  href="https://www.linkedin.com/in/michelle-roubik-lee/"
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
