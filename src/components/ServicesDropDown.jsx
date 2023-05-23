import { Link } from "react-router-dom";

const ServicesDropDown = () => {
  return (
    <div className="absolute top-6 z-10 w-48 border-2 bg-white">
      <ul>
        <Link to="/services">
          <li>General Cleaning</li>
        </Link>
        <Link to="/services">
          <li>Commercial Cleaning</li>
        </Link>
        <Link to="/services">
          <li>Floor Care {`&`} Tile Re-Waxing</li>
        </Link>
      </ul>
    </div>
  );
};

export default ServicesDropDown;
