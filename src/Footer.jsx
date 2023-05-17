import "./App.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center justify-between bg-slate-100 px-16 py-8 sm:flex-row">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img
              src="https://cleanchoicewi.com/wp-content/uploads/2015/07/Med-Final.png"
              className="w-36 sm:w-40 md:w-44"
            />
          </div>
        </Link>
        <div>
          <ul className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
            <Link to="/about">
              <li className="text-md w-20 font-bold hover:text-green-600 md:w-20 md:text-lg lg:w-24 xl:w-36">
                About Us
              </li>
            </Link>
            <div>
              <li className="text-md w-20 font-bold md:w-20 md:text-lg lg:w-24 xl:w-36">
                Services
              </li>
              {/* <div>
                  <ul className="text-xs md:text-sm">
                    <Link to="/GeneralCleaning">
                      <li>General Cleaning</li>
                    </Link>
                    <Link to="/CommercialCleaning">
                      <li>Commercial Cleaning</li>
                    </Link>
                    <Link to="/FloorCare">
                      <li>Floor Care {`&`} Tile Re-Waxing</li>
                    </Link>
                  </ul>
                </div> */}
            </div>
            <Link to="/reviews">
              <li className="text-md w-20 font-bold hover:text-green-600 md:w-20 md:text-lg lg:w-24 xl:w-36">
                Reviews
              </li>
            </Link>
            <div>
              <Link to="/contact">
                <li className="text-md text-center font-bold hover:text-green-600 sm:text-left md:w-20 md:text-lg lg:w-24 xl:w-36">
                  Contact Us
                </li>
              </Link>
              <div>
                <ul className="flex flex-col items-center text-xs sm:block md:text-sm">
                  <li>(414) 310-9206</li>
                  <li>michelle@cleanchoicewi.com</li>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
