import "./App.css";
import { useState } from "react";
import HomePage from "./Homepage/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Careers from "./Careers";
import { Routes, Route } from "react-router-dom";
import ContactModal from "./components/ContactModal";
import Reviews from "./Reviews";

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
      </Routes>
      <Footer />
      {showModal && <ContactModal closeModal={closeModal} />}
    </>
  );
}

export default App;
