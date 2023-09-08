import Profile from '../Profile/Profile';
import Bot from './Bots/Chatbots/Chatbots';
import Step1 from './Bots/NewBot/Step-1-onboarding';
import Step2 from './Bots/NewBot/Step-2-PDF';
// import Step3 from './Bots/NewBot/Step-3-done';
// import Newbot from NewBot'./Bots//NewBot';
import Inbox from './Inbox/Inbox';
import { Routes, Route } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <Routes>
      <Route path="chatbot" element={<Bot />} />
      {/* <Route path="newbot" element={<Newbot />} /> */}
      <Route path="/create-bot/onboarding" element={<Step1 />} />
      <Route path="/create-bot/pdf-upload" element={<Step2 />} />
      {/* <Route path="/create-bot/done" element={<Step3 />} /> */}
      <Route path="inbox" element={<Inbox />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
};

export default UserDashboard;
