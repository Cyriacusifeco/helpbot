import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Image } from 'react-bootstrap';
import './Settings.css';
import widgetGif from './../../../../assets/images/chat-widget-info.gif';

// eslint-disable-next-line react/prop-types
const Theme = ({ botToken }) => {
  //Fetch data sources updates
  // function fetchDataSourcesUpdates() {
  //   fetch("widget.data-sources-updates' or the bot.id")
  //     .then((response) => response.text())
  //     .then((data) => {
  //       document.querySelector('#data-sources-updates-container').innerHTML =
  //         data;
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data sources updates:', error);
  //     });
  // }
  // Initially fetch data
  // fetchDataSourcesUpdates();
  // Then fetch data every 2 seconds
  // setInterval(fetchDataSourcesUpdates, 2000);

  const [isOpen, setIsOpen] = useState(false);
  // Function to toggle the isOpen state
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <div className="mb-8">
        {/* Header Title */}
        <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
          Try and Share!✨
        </h1>
        <ul className="inline-flex flex-wrap text-sm font-medium">
          <li className="flex items-center">
            <Link className="text-slate-500" to="/dashboard/chatbot">
              Home
            </Link>
            <svg
              className="h-4 w-4 fill-current text-slate-400 mx-3"
              viewBox="0 0 16 16"
            >
              <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z"></path>
            </svg>
          </li>
          <li className="flex items-center">
            <a className="text-slate-500">Try & Share</a>
          </li>
        </ul>
      </div>
      <div className="bg-white shadow-lg rounded-sm mb-8">
        <div className="flex flex-col md:flex-row md:-mr-px">
          {/* <SidebarBot /> */}
          <div className="flex flex-nowrap overflow-x-scroll no-scrollbar md:block md:overflow-auto px-3 py-6 border-b md:border-b-0 md:border-r border-slate-200 min-w-60 md:space-y-3">
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
                    <svg
                      className="w-4 h-4 shrink-0 fill-color text-slate-400  text-indigo-400 mr-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15 4c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H3c-1.7 0-3-1.3-3-3V3c0-1.7 1.3-3 3-3h7c.6 0 1 .4 1 1v3h4zM2 3v1h7V2H3c-.6 0-1 .4-1 1zm12 11V6H2v7c0 .6.4 1 1 1h11zm-3-5h2v2h-2V9z"></path>
                    </svg>
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
                    <svg
                      className="w-4 h-4 shrink-0 fill-color mr-2 text-slate-400 "
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.311 9.527c-1.161-.393-1.85-.825-2.143-1.175A3.991 3.991 0 0012 5V4c0-2.206-1.794-4-4-4S4 1.794 4 4v1c0 1.406.732 2.639 1.832 3.352-.292.35-.981.782-2.142 1.175A3.942 3.942 0 001 13.26V16h14v-2.74c0-1.69-1.081-3.19-2.689-3.733zM6 4c0-1.103.897-2 2-2s2 .897 2 2v1c0 1.103-.897 2-2 2s-2-.897-2-2V4zm7 10H3v-.74c0-.831.534-1.569 1.33-1.838 1.845-.624 3-1.436 3.452-2.422h.436c.452.986 1.607 1.798 3.453 2.422A1.943 1.943 0 0113 13.26V14z"></path>
                    </svg>
                    <span className="text-sm font-medium">
                      General Settings
                    </span>
                  </Link>
                </li>
                <li className="mr-0.5 md:mr-0 md:mb-0.5">
                  <Link
                    className="flexs flex items-center px-2.5 py-2 rounded whitespace-nowrap"
                    to="/dashboard/chatbot/settings-data"
                  >
                    {/* <FontAwesomeIcon
                      className="custom-icon"
                      icon={faRoute}
                    ></FontAwesomeIcon> */}
                    <svg
                      className="w-4 h-4 shrink-0 mr-2 fill-color text-slate-400 "
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.414 2L9 7.586V16H7V8.414l-5-5V6H0V1a1 1 0 011-1h5v2H3.414zM15 0a1 1 0 011 1v5h-2V3.414l-3.172 3.172-1.414-1.414L12.586 2H10V0h5z"></path>
                    </svg>
                    <span className="text-sm font-medium">
                      Data and Knowledge
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Main Panel */}
          <div className="grow">
            <div
              className="data-sources-real-time"
              id="data-sources-updates-container"
            ></div>
            <div className="p-6 space-y-6 flexx sm:flex">
              <div className="inputs">
                <section className="sm:w-1/2">
                  <h3 className="text-xl leading-snug text-slate-800 font-bold mb-1">
                    How to install
                  </h3>
                  <div className="text-sm">
                    Here you can embed it in your web apps. You can also try out
                    your bot and share it.
                  </div>
                  {/* <!-- Chat Bubble Embed --> */}
                  <div
                    className={`px-5 py-4 rounded-sm border border-slate-200 mt-5 ${
                      isOpen ? 'open' : ''
                    }`}
                  >
                    <button
                      className="flex items-center justify-between w-full group mb-1"
                      onClick={toggleOpen}
                      aria-expanded={isOpen}
                    >
                      <div className="text-sm text-slate-800 font-medium">
                        🌎 Embed widget on your web appl as a chat bubble..
                      </div>
                      <svg
                        className={`w-8 h-8 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        viewBox="0 0 32 32"
                        onClick={toggleOpen}
                      >
                        <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="text-sm" /*x-show="open"*/>
                        <div className="img-container">
                          <Image src={widgetGif} alt=""></Image>
                        </div>
                        <div>
                          <div className="flex items-center justify-between embed">
                            <strong>
                              1. Copy the following code into your website head
                              script
                            </strong>
                          </div>
                          <textarea
                            id="tooltip"
                            className="form-input w-full"
                            type="text"
                            disabled
                          >
                            {/* Embeded code */}
                            {`<script src="https://helpbot.com/chat.js"></script>
                          <script>
                            document.addEventListener('DOMContentLoaded', function () {
                              var chatConfig = {
                                token: "${botToken}",
                              };
                              initializeChatWidget(chatConfig);
                            });
                          </script>`}
                          </textarea>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="meg">
                    {/* <!-- Share Link --> */}
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="tooltip"
                        >
                          {' '}
                          🔗 Share with others!
                        </label>
                        <div
                          className="relative ml-2" /*x-data="{ open: false }"*/
                        >
                          <button
                            className="block"
                            aria-haspopup="true"
                            aria-expanded={isOpen}
                            onFocus={() => setIsOpen(true)}
                            onBlur={() => setIsOpen(false)}
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                          >
                            <svg
                              className="w-4 h-4 fill-current text-slate-400"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"></path>
                            </svg>
                          </button>
                          {isOpen && (
                            <div className="z-10 absolute bottom-full left-1/2 -translate-x-1/2">
                              <div className="min-w-60 bg-slate-800 text-slate-200 px-2 py-1 rounded overflow-hidden mb-2 link">
                                <div className="text-sm">
                                  Anyone with this link will be able to interact
                                  with your chatbot
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <Link to="chatbot" target="_blank" className="chatlink">
                      <input
                        id="tooltip"
                        className="form-input w-full"
                        type="text"
                        value="http://localhost:8000/bot.id"
                        disabled
                      />
                    </Link>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Theme;
