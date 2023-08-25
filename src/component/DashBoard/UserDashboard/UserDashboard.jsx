import Profile from './../Profile/Profile';
import { Routes, Route } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <Routes>
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
};

export default UserDashboard;
