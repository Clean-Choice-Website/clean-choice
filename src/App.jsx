import "./App.css";
import HomePage from "./Homepage/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./AboutUs";
import Services from "./Services";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
