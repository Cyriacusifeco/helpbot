import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from '../Auth/Signup';
import LogIn from '../Auth/LogIn';
import AcctInfo from '../Auth/AcctInfo';
import Home from '../HomePage/Home';
import NotFound from '../NotFound';
// import Admin from '../Dashboard/NavBar/Admin';
import Dashboard from '../DashBoard/DashBoard';
import '../App/App.css';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account-info" element={<AcctInfo />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
