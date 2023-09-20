import Profile from '../Profile/Profile';
import Bot from './Bots/Bot';
import Inbox from './Inbox/Inbox';
import { Routes, Route } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <Routes>
      <Route path="chatbot" element={<Bot />} />
      <Route path="inbox" element={<Inbox />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
};

export default UserDashboard;
