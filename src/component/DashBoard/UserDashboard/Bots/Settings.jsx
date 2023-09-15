import { Link } from 'react-router-dom';
import SidebarBot from './SidebarBot';

const Settings = () => {
  <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
    <div className="mb-8">
      {/* Bot Title */}
      <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
        {/*{ bot.name }*/}: general settings✨
      </h1>
      <ul className="inline-flex flex-wrap text-sm font-medium">
        <li className="flex items-center">
          <a
            className="text-slate-500 hover:text-indigo-500"
            href="{% url 'index' %}"
          >
            Home
          </a>
          <svg
            className="h-4 w-4 fill-current text-slate-400 mx-3"
            viewBox="0 0 16 16"
          >
            <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z"></path>
          </svg>
        </li>
        <li className="flex items-center">
          <a className="text-slate-500 hover:text-indigo-500">
            General Settings
          </a>
        </li>
      </ul>
    </div>
    <div className="bg-white shadow-lg rounded-sm mb-8">
      <div className="flex flex-col md:flex-row md:-mr-px">
        <SidebarBot />
        {/* Main panel */}
        <div className="grow">
          <form
            method="post"
            action="{% url 'chatbot.settings.update' bot.id %}"
          >
            <div className="p-6 space-y-6">
              {/* <!-- Business Profile --> */}
              <section>
                <h3 className="text-xl leading-snug text-slate-800 font-bold mb-1">
                  General Settings
                </h3>
                <div className="text-sm">
                  This is your general bot settings such as name and id
                </div>
                <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
                  <div className="sm:w-1/3">
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      className="form-input w-full"
                      type="text"
                      value="{{ bot.name }}"
                    />
                  </div>
                  <div className="sm:w-1/3">
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="business-id"
                    >
                      Bot ID
                    </label>
                    <input
                      id="business-id"
                      className="form-input w-full disabled"
                      type="text"
                      value="{{ bot.id }}"
                      disabled
                    />
                  </div>
                </div>
              </section>

              {/* <!-- Enhanced privacy --> */}
              <section>
                <h3 className="text-xl leading-snug text-slate-800 font-bold mb-1">
                  ِCustom Context
                </h3>
                <div className="text-sm">
                  You can change your bot initial context / prompt from here.
                  also you can change the bot response language.
                </div>
                <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
                  <div className="sm:w-1/3">
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="name"
                    >
                      Manual context
                    </label>
                    <textarea
                      name="prompt_message"
                      className="form-input w-full promptMessage"
                      id="promptMessage"
                      rows="10"
                    >
                      {/*{ bot.prompt_message }*/}
                    </textarea>
                  </div>
                  <span style="margin-left: 1rem; margin-right: 1rem;">
                    ✨or ✨
                  </span>
                  <div className="sm:w-1/3">
                    <div className="1-click-box">
                      <div className="m-1.5">
                        {/* <!-- Start --> */}
                        <button
                          className="btn border-slate-200 hover:border-slate-300 text-indigo-500"
                          onClick="fillPrompt('customer_support')"
                        >
                          💁 Customer Support
                        </button>
                      </div>
                      <div className="m-1.5">
                        <button
                          className="btn border-slate-200 hover:border-slate-300 text-indigo-500"
                          onClick="fillPrompt('critical_thinker')"
                        >
                          🤔 Critical thinker
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* <!-- Password --> */}
              <section>
                <h3 className="text-xl leading-snug text-slate-800 font-bold mb-1">
                  Delete the bot
                </h3>
                <div className="text-sm">
                  Deleting the bot will delete all the data associated with it.
                </div>
                <div className="mt-5">
                  <Link
                    className="btn border-slate-200 shadow-sm text-indigo-500"
                    to="/chatbot/settings.delete"
                  >
                    Delete
                  </Link>
                </div>
              </section>
            </div>
            {/* <!-- Panel footer --> */}
            <footer>
              <div className="flex flex-col px-6 py-5 border-t border-slate-200">
                <div className="flex self-end">
                  <button
                    className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3"
                    type="submit"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </footer>
          </form>
        </div>
      </div>
    </div>
  </div>;
};
export default Settings;
