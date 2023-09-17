import { Link } from 'react-router-dom';
import './Chatbots.css';

const Bot = () => {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <div className="sm:flex sm:justify-between sm:items-center mb-8">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
              My chatbot🤖
            </h1>
          </div>
          <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
            {/* <!-- Create Bot button --> */}
            <Link to="/dashboard/create-bot/onboarding" className="btn-1 btn">
              <svg
                className="w-4 h-4 fill-current opacity-50 shrink-0"
                viewBox="0 0 16 16"
              >
                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"></path>
              </svg>
              <span className="hidden xs:block ml-2">Create Bot</span>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {/* Card 1 */}
          <div className="col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
            <div className="flex flex-col h-full p-5">
              <header>
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-rose-500">
                    <svg
                      className="w-9 h-9 fill-current text-rose-50"
                      viewBox="0 0 36 36"
                    ></svg>
                  </div>
                </div>
              </header>
              <div className="grow mt-2">
                <Link
                  className="inline-flex text-slate-800 hover:text-slate-900 mb-1"
                  to="/chatbot.settings-theme"
                  id="bot.id %"
                >
                  <h2 className="text-xl leading-snug font-semibold">
                    HelpBot
                  </h2>
                </Link>
              </div>
              <footer className="mt-5">
                <div className="text-sm font-medium text-slate-500 mb-2">
                  {/*{ bot.created_at }*/}
                  Date created: 16th September, 2023
                </div>
                <div className="flex justify-end items-center">
                  <Link
                    className="text-sm font-medium bot-a underline hover:no-underline"
                    to="/dashboard/chatbot/settings-theme"
                    id="bot.id"
                  >
                    Open -&gt;
                  </Link>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Bot;
