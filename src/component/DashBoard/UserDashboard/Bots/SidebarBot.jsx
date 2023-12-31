import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRoute } from '@fortawesome/free-solid-svg-icons';
import { faFileClipboard } from '@fortawesome/free-regular-svg-icons';
import './Settings.css';

const SidebarBot = () => {
  <div className="flex flex-nowrap overflow-x-scroll no-scrollbar md:block md:overflow-auto px-3 py-6 border-b md:border-b-0 md:border-r border-slate-200 min-w-60 md:space-y-3">
    {/* <!-- Group 1 --> */}
    <div>
      <div className="text-xs font-semibold text-slate-400 uppercase mb-3">
        ChatBot Settings
      </div>
      <ul className="flex flex-nowrap md:block mr-3 md:mr-0">
        <li className="mr-0.5 md:mr-0 md:mb-0.5">
          <Link
            className="flex items-center px-2.5 py-2 rounded whitespace-nowrap"
            to="/dashboard/chatbot/settings-theme"
          >
            <FontAwesomeIcon icon={faFileClipboard}></FontAwesomeIcon>
            <span className="text-sm font-medium {% if request.resolver_match.view_name == 'chatbot.settings-theme' %}text-slate-600 hover:text-slate-700 text-indigo-500{% endif %}">
              Try & Share
            </span>
          </Link>
        </li>
        <li className="mr-0.5 md:mr-0 md:mb-0.5">
          <Link
            className="flex items-center px-2.5 py-2 rounded whitespace-nowrap {% if request.resolver_match.view_name == 'chatbot.settings' %}bg-indigo-50{% endif %}"
            to="/dashboard/chatbot/settings"
          >
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            <span className="text-sm font-medium">General Settings</span>
          </Link>
        </li>
        <li className="mr-0.5 md:mr-0 md:mb-0.5">
          <FontAwesomeIcon icon={faRoute}></FontAwesomeIcon>
        </li>
        {/* <li className="mr-0.5 md:mr-0 md:mb-0.5">
          <Link
            className="flex items-center px-2.5 py-2 rounded whitespace-nowrap {% if request.resolver_match.view_name == 'chatbot.settings-history' %}bg-indigo-50{% endif %}"
            to="/dashboard/chatbot/settings-history"
          >
            <FontAwesomeIcon icon={faPowerOff}></FontAwesomeIcon>
            <span className="text-sm font-medium {% if request.resolver_match.view_name == 'chatbot.settings-history' %}text-slate-600 hover:text-slate-700 text-indigo-500{% endif %}">
              History
            </span>
          </Link>
        </li> */}
      </ul>
    </div>
  </div>;
};
export default SidebarBot;
