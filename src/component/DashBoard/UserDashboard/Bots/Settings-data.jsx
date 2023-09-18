import { Link } from 'react-router-dom';
import './Settings.css';
// import { useState } from 'react';
// import { Image } from 'react-bootstrap';
// import widgetGif from './../../../../assets/images/chat-widget-info.gif';

const SettingsData = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // Function to toggle the isOpen state
  // const toggleOpen = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div className="bodyfont px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <div className="mb-8">
        {/* Header Title */}
        <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
          Data and Knowledge✨
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
            <a className="text-slate-500">Data and Knowledge</a>
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
            <div className="p-6 space-y-6">
              <section>
                <h3 className="text-xl leading-snug text-slate-800 font-bold mb-1">
                  Data sources
                </h3>
                <div className="text-sm">
                  Currently we onlysupport PDFs and Text. Soon, we will support
                  web based sources
                </div>
                <div className="orr">
                  <div className="rounded-sm border border-slate-200">
                    <div className="overflow-x-auto">
                      <table className="table-auto w-full divide-y divide-slate-200">
                        <tbody className="text-sm" /*x-data="{ open: false }"*/>
                          <tr>
                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                              <div className="flex items-center text-slate-800">
                                <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-slate-100 rounded-full mr-2 sm:mr-3">
                                  <img
                                    className="rounded-full ml-1"
                                    src="{{ source.icon }}"
                                    width="40"
                                    height="40"
                                    alt="User 01"
                                  />
                                </div>
                                <div className="font-medium text-slate-800">
                                  <strong>website</strong>:{/**/}
                                </div>
                              </div>
                            </td>
                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                              <div className="text-left font-medium text-emerald-500">
                                {/*{ source.crawled_pages.count }*/} pages
                                scanned
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingsData;
