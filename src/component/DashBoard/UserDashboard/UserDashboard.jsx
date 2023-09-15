import Profile from '../Profile/Profile';
<<<<<<< HEAD
import Bot from './Bots/Chatbots/Chatbots';
import Step1 from './Bots/NewBot/Step-1-onboarding';
import Step2 from './Bots/NewBot/Step-2-PDF';
import Step3 from './Bots/NewBot/Step-3-done';
// import Newbot from NewBot'./Bots//NewBot';
=======
import Bot from './Bots/Bot';
>>>>>>> 94e56a626a050d6b90cf00c79ebc6454f7138216
import Inbox from './Inbox/Inbox';
import { Routes, Route } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <Routes>
      <Route path="chatbot" element={<Bot />} />
<<<<<<< HEAD
      {/* <Route path="newbot" element={<Newbot />} /> */}
      <Route path="/create-bot/onboarding" element={<Step1 />} />
      <Route path="/create-bot/pdf-upload" element={<Step2 />} />
      <Route path="/create-bot/done" element={<Step3 />} />
=======
>>>>>>> 94e56a626a050d6b90cf00c79ebc6454f7138216
      <Route path="inbox" element={<Inbox />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
};

export default UserDashboard;
