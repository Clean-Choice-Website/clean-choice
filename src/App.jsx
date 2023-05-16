import './App.css';
import HomePage from './HomePage';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/about' element={<h1>hi</h1>} />
      </Routes>
    </>
  );
}

export default App;
