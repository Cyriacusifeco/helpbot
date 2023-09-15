import { Link } from 'react-router-dom';
import SidebarBot from './SidebarBot';
import { Image } from 'react-bootstrap';
import './style.css';
import widgetGif from './../../../../assets/images/chat-widget-info.gif';

const Theme = () => {
  // Fetch data sources updates
  function fetchDataSourcesUpdates() {
    fetch("widget.data-sources-updates' or the bot.id")
      .then((response) => response.text())
      .then((data) => {
        document.querySelector('#data-sources-updates-container').innerHTML =
          data;
      })
      .catch((error) => {
        console.error('Error fetching data sources updates:', error);
      });
  }

  // Initially fetch data
  fetchDataSourcesUpdates();

  // Fetch data every 2 seconds
  setInterval(fetchDataSourcesUpdates, 2000);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
          bot name: try & share ✨
        </h1>
        <ul className="inline-flex flex-wrap text-sm font-medium">
          <li className="flex items-center">
            <Link
              className="text-slate-500 hover:text-indigo-500"
              to="dashboard"
            >
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
            <Link className="text-slate-500 hover:text-indigo-500">
              Try & Share
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-white shadow-lg rounded-sm mb-8">
        <div className="flex flex-col md:flex-row md:-mr-px">
          <SidebarBot />
          <div className="grow">
            <div
              className="data-sources-real-time"
              id="data-sources-updates-container"
            ></div>
            <div className="p-6 space-y-6 flexx sm:flex">
              <div className="inputs">
                <section className="sm:w-1/2">
                  <h3 className="text-xl leading-snug text-slate-800 font-bold mb-1">
                    Try & Share!
                  </h3>
                  <div className="text-sm">
                    Here you can embed it in your web apps. You can also try out
                    your bot and share it.
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
                            aria-haspopup="true" /*:aria-expanded="open"*/
                            /*@focus="open = true" @focusout="open = false" @click.prevent=""*/
                            aria-expanded="false"
                          >
                            <svg
                              className="w-4 h-4 fill-current text-slate-400"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"></path>
                            </svg>
                          </button>
                          <div className="z-10 absolute bottom-full left-1/2 -translate-x-1/2">
                            <div
                              className="min-w-60 bg-slate-800 text-slate-200 px-2 py-1 rounded overflow-hidden mb-2 link"
                              /*x-show="open"
                              x-transition:enter="transition ease-out duration-200 transform"
                              x-transition:enter-start="opacity-0 translate-y-2"
                              x-transition:enter-end="opacity-100 translate-y-0"
                              x-transition:leave="transition ease-out duration-200"
                              x-transition:leave-start="opacity-100"
                              x-transition:leave-end="opacity-0"*/
                            >
                              <div className="text-sm">
                                Anyone with this link will be able to interact
                                with your chatbot
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link to="chat page" target="_blank" className="chatlink">
                      <input
                        id="tooltip"
                        className="form-input w-full"
                        type="text"
                        value=""
                        disabled
                      />
                    </Link>
                  </div>
                  {/* <!-- Chat Bubble Embed --> */}
                  <div
                    className="px-5 py-4 rounded-sm border border-slate-200 mt-5"
                    /*x-data="{ open: false }"*/
                  >
                    <button
                      className="flex items-center justify-between w-full group mb-1"
                      /*@click.prevent="open = !open" :aria-expanded="open"*/ aria-expanded="false"
                    >
                      <div className="text-sm text-slate-800 font-medium">
                        🌎 Embed on your web app as a chat bubble
                      </div>
                      <svg
                        className="w-8 h-8 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3"
                        /*:className="{ 'rotate-180': open }"*/ viewBox="0 0 32 32"
                      >
                        <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                      </svg>
                    </button>

                    <div
                      className="text-sm"
                      /*x-show="open"*/
                    >
                      <div className="img-container">
                        <Image src={widgetGif} alt=""></Image>
                      </div>
                      <div>
                        <div className="flex items-center justify-between copy-code">
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
                          {/* <script src="{% static 'chat.js' %}"></script>
                                                
                                                    <script>
                                                        document.addEventListener('DOMContentLoaded', function () {
                                                            var chatConfig = {
                                                                token: "{{ bot.token }}",
                                                            };
                                                            initializeChatWidget(chatConfig);
                                                        });
                                                    </script> */}
                          This will be filled with the integration code later
                          This will be filled with the integration code later
                          This will be filled with the integration code later
                          This will be filled with the integration code later
                          This will be filled with the integration code later
                        </textarea>
                      </div>
                    </div>
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
