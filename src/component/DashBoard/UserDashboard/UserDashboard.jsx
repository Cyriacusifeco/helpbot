import Profile from '../Profile/Profile';
import Bot from './Bots/Chatbots/Chatbots';
import Step1 from './Bots/NewBot/Step-1-onboarding';
import Step2 from './Bots/NewBot/Step-2-PDF';
import Step3 from './Bots/NewBot/Step-3-done';
import Settings from './Bots/Settings';
import Theme from './Bots/Settings-theme';
import SettingsData from './Bots/Settings-data';
import ChatWidget from '../../Widget/ChatWidget';
import Inbox from './Inbox/Inbox';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

const UserDashboard = () => {
  const navigate = useNavigate();
  if (Cookies.get('logIn')){
    console.log('Logged In')
  } else {
    navigate('/LogIn')
  }
  return (
    <Routes>
      <Route path="chatbot" element={<Bot />} />
      <Route path="widget" element={<ChatWidget />} />
      <Route path="/create-bot/onboarding" element={<Step1 />} />
      <Route path="/create-bot/pdf-upload" element={<Step2 />} />
      <Route path="/create-bot/done" element={<Step3 />} />
      <Route path="/chatbot/settings" element={<Settings />} />
      <Route path="/chatbot/settings-theme" element={<Theme />} />
      <Route path="/chatbot/settings-data" element={<SettingsData />} />
      <Route path="inbox" element={<Inbox />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
};

export default UserDashboard;
