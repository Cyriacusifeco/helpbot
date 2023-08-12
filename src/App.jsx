import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Startup from './Startup';
import Signup from './Signup';
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Startup/>} />
          <Route  path="/About" element={<Signup />} />
        </Routes>
      </div>
      
    </Router>
  );
}
