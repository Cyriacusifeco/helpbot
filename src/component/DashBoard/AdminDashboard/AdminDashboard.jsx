import { Route, Routes } from 'react-router-dom';
import Profile from '../Profile/Profile';

const AdminDashboard = () => {
  return (
    <Routes>
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
};

export default AdminDashboard;
