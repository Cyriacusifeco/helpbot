import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../NavBar/NavBar';
import Signup from '../Auth/Signup';
import Home from '../HomePage/Home'
import './App.css';

export default function App() {
  return (
    <>
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route  path="/About" element={<Signup />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}
