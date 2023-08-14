import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../NavBar/NavBar'
import Signup from '../Auth/Signup'
import SignIn from '../Auth/SignIn'
import Home from '../HomePage/Home'
import Admin from '../Dashboard/NavBar/Admin'
import '../App/App.css';

export default function App() {
  return (
    
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Admin />} />
        </Routes>
      </div>
    </Router>
    
  );
}
