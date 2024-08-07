import "./App.css";
import { useState } from "react";
import HomePage from "./Homepage/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Careers from "./Careers";
import { Routes, Route, Link } from "react-router-dom";
import ContactModal from "./components/ContactModal";
import Reviews from "./Reviews";
import Blog from "./Blog";
import EssentialCleaning from "./BlogArticles/EssentialCleaning";
import CarpetCleaning from "./BlogArticles/CarpetCleaning";
import AirportCleaning from "./BlogArticles/AirportCleaning";
import SpringDeepCleaning from "./BlogArticles/DeepCleaning";
import FloorScrubbing from "./BlogArticles/FloorScrubbing";
import WhyChooseUs from "./BlogArticles/WhyCleanChoice";

function NotFound() {
  return (
    <div className="mx-4 mt-32 flex h-screen flex-col items-center justify-start gap-12 text-xl sm:mx-8 md:text-4xl">
      <h1 className="text-center">404 - Not Found</h1>
      <p className="text-center">
        The page you are looking for does not exist.
      </p>
      <p className="text-center">
        Go back to the{" "}
        <Link
          to="/"
          className="text-logoGreen underline hover:text-logoGreenHover"
        >
          homepage
        </Link>
      </p>
    </div>
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar openModal={openModal} />
      <Routes>
        <Route exact path="/" element={<HomePage openModal={openModal} />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route
          exact
          path="/services"
          element={<Services openModal={openModal} />}
        />
        <Route exact path="/careers" element={<Careers />} />
        <Route exact path="/reviews" element={<Reviews />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route
          exact
          path="/essential-cleaning"
          element={<EssentialCleaning />}
        />
        <Route exact path="/carpet-cleaning" element={<CarpetCleaning />} />
        <Route exact path="/deep-cleaning" element={<SpringDeepCleaning />} />
        <Route exact path="/floor-scrubbing" element={<FloorScrubbing />} />
        <Route exact path="/why-clean-choice" element={<WhyChooseUs />} />
        <Route exact path="/airport-cleaning" element={<AirportCleaning />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer openModal={openModal} />
      {showModal && <ContactModal closeModal={closeModal} />}
    </>
  );
}

export default App;
