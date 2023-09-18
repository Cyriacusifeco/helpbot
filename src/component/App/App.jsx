import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from '../Auth/Signup';
import LogIn from '../Auth/LogIn';
import AcctInfo from '../Auth/AcctInfo';
import Home from '../HomePage/Home';
import NotFound from '../NotFound';
import ChatWidget from '../Widget/ChatWidget';
import Dashboard from '../DashBoard/DashBoard';
import '../App/App.css';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/signup/account-info" element={<AcctInfo />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          {/* <Route path="/dashboard/*" element={<Dashboard />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <ChatWidget />
    </div>
  );
}
