import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from '../Auth/Signup';
import LogIn from '../Auth/LogIn';
import AcctInfo from '../Auth/AcctInfo';
import Home from '../HomePage/Home';
import NotFound from '../NotFound';
// import Profile from '../DashBoard/Profile/Profile';
import Dashboard from '../DashBoard/DashBoard';
import '../App/App.css';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Switch>
            <Route path="/signup" exact component={<Signup />} />
            <Route path="/signup/account-info" component={<AcctInfo />} />
          </Switch>

          <Route path="/dashboard/*" element={<Dashboard />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/profile" element={<Profile />} /> */}
          {/* <Route path="/dashboard/*" element={<Dashboard />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
