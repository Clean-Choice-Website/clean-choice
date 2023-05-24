import "../App.css";
import downArrow from "../assets/downArrow.svg";
import menuIcon from "../assets/menuIcon.svg";
import { Link } from "react-router-dom";
import ServicesDropDown from "./ServicesDropDown";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
// import logoNoText from "../assets/logo-no-text.png";
import clearchoicevertical from "../assets/cleanchoicevertical.png";

function Navbar() {
  const [showServices, setShowServices] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white drop-shadow-sm">
      <nav className="top-0 z-10 flex items-center justify-between px-9 py-6">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img
              src={clearchoicevertical}
              alt="Clean Choice logo"
              className="w-60
            "
            />
            {/*    */}
          </div>
        </Link>
        {/* Menu icon Button */}
        <button
          onClick={() => setShowMenu((prev) => !prev)}
          className="block md:hidden"
        >
          <img src={menuIcon} alt="menu dropdown icon" className="w-10" />
        </button>
        {/* Nav links */}
        <div className="hidden md:block">
          <ul className="flex gap-8">
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <div
              className="relative flex items-center gap-1"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <li>Services</li>
              <img src={downArrow} alt="Down Arrow" className="w-5" />
              {showServices && <ServicesDropDown />}
            </div>
            <Link to="/reviews">
              <li>Reviews</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
      </nav>
      {/* Mobile Nav */}
      {showMenu && <MobileNavbar setShowMenu={setShowMenu} />}
    </header>
  );
}

export default Navbar;
