/* eslint-disable react/prop-types */
import "../App.css";
import menuIcon from "../assets/menuIcon.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import clearchoicevertical from "../assets/cleanchoicevertical.png";

function Navbar({ openModal }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-white drop-shadow-sm">
      <nav className="top-0 z-10 flex items-center justify-between px-3 py-6 sm:px-9 md:px-4">
        <Link to="/">
          <div
            className="flex items-center gap-2"
            onClick={() => setShowMenu(false)}
          >
            <img
              src={clearchoicevertical}
              alt="Clean Choice logo"
              className="w-48 lg:w-60"
            />
            {/*    */}
          </div>
        </Link>
        {/* Menu icon Button */}
        <button
          onClick={() => setShowMenu((prev) => !prev)}
          className="block md:hidden"
        >
          <img
            src={menuIcon}
            alt="menu dropdown icon"
            data-label="menu-icon"
            className="w-10"
          />
        </button>
        {/* Nav links */}
        <div className="ml-auto hidden items-center gap-8 md:flex md:gap-5 xl:gap-8">
          <Link to="/about">
            <li className="list-none font-medium transition-all hover:text-logoGreen">
              About Us
            </li>
          </Link>
          <Link to="/services">
            <li className="list-none font-medium transition-all hover:text-logoGreen">
              Services
            </li>
          </Link>
          <Link to="/reviews">
            <li className="list-none font-medium transition-all hover:text-logoGreen">
              Reviews
            </li>
          </Link>
          <Link to="/careers">
            <li className="list-none font-medium transition-all hover:text-logoGreen">
              Careers
            </li>
          </Link>
          <Link to="/blog">
            <li className="list-none font-medium transition-all hover:text-logoGreen">
              Blog
            </li>
          </Link>
          {/* <button
            onClick={openModal}
            className="rounded-sm bg-logoGreen p-2 px-5 font-medium text-white transition-all hover:bg-logoGreenHover"
          >
            Get a Quote
          </button> */}
          <a
            href="https://clienthub.getjobber.com/client_hubs/56b487ed-d4dd-4556-a387-aba7135c7983/public/work_request/new?source=social_media"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-logoGreen p-2 px-5 font-medium text-white transition-all hover:bg-logoGreenHover"
          >
            Get a Quote
          </a>
        </div>
      </nav>
      {/* Mobile Nav */}
      {showMenu && (
        <MobileNavbar setShowMenu={setShowMenu} openModal={openModal} />
      )}
    </header>
  );
}

export default Navbar;
