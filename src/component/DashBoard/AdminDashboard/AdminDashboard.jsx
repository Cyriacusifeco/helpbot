import { Route, Routes } from 'react-router-dom';
import Profile from '../Profile/Profile';
import Chatbot from '../Bots/Bot';

const AdminDashboard = () => {
  return (
    <Routes>
      <Route path="profile" element={<Profile />} />
      <Route path="chatbot" element={<Chatbot />} />
    </Routes>
  );
};

export default AdminDashboard;
