import './App.css';
import HomePage from './Homepage/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './AboutUs';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/about' element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
