import "./App.css";
import { useState } from "react";
import HomePage from "./Homepage/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./AboutUs";
import Services from "./Services";
import { Routes, Route } from "react-router-dom";
import ContactModal from "./components/ContactModal";

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
        <Route exact path="/services" element={<Services />} />
      </Routes>
      <Footer />
      {showModal && <ContactModal closeModal={closeModal} />}
    </>
  );
}

export default App;
