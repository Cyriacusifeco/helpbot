// import Chatbot from '../Chatbots/Chatbots';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Chatbots/Chatbots.css';
import { Link } from 'react-router-dom';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Step1 = () => {
  return (
    <div className="min-h-screen items-center h-full flex flex-col after:flex-1">
      <div className="px-4 py-8 ">
        <div className="max-w-md mx-auto ">
          <div className="div-container">
            <h1 className="text-3xl text-slate-800 mb-6">
              Lets set up your chatbot, it is free!✨
            </h1>
            <p className="newbot-p">And here is how we are going to do it:</p>
          </div>

          {/* Form */}
          <form>
            <div className="space-y-3 mb-8">
              <ul className="-my-2">
                <li className="relative py-2">
                  <div className="mb-1 flexx items-center">
                    {/* <div
                      aria-hidden="true"
                      className="absolute left-0 h-full w-0.5 bg-slate-200 self-start ml-2.5 -translate-x-1/2 translate-y-3"
                    ></div> 
                    <div
                      className="absolute left-0 rounded-full bg-indigo-500"
                      aria-hidden="true"
  ></div> */}
                    <FontAwesomeIcon
                      className="custom-icon"
                      icon={faCircleCheck}
                    ></FontAwesomeIcon>
                    <h3 className="text-lg bold text-slate-800 pl-9">
                      You provide our system with data
                    </h3>
                  </div>
                  <div className="pl-9 light">
                    It has to be a PDF file. Hopefully, you will have the option
                    to integrate with many more very soon.
                  </div>
                </li>
                <li className="relative py-2">
                  <div className="mb-1 items-center flexx">
                    {/* <div
                      aria-hidden="true"
                      className="absolute left-0 h-full w-0.5 bg-slate-200 self-start ml-2.5 -translate-x-1/2 translate-y-3"
                    ></div>
                    <div
                      className="absolute left-0 rounded-full bg-indigo-50"
                      aria-hidden="true"
                    ></div> */}
                    <FontAwesomeIcon
                      className="custom-icon"
                      icon={faCircleCheck}
                    ></FontAwesomeIcon>

                    <h3 className="text-lg bold text-slate-800 pl-9">
                      We train our AI on the knowledge from the PDF file
                    </h3>
                  </div>
                  <div className="pl-9 light">
                    It might take minutes or hours, depending on how bulky your
                    data is.
                  </div>
                </li>
                <li className="relative py-2">
                  <div className="mb-1 flexx items-center">
                    {/* <div
                      aria-hidden="false"
                      className="absolute left-0 h-full w-0.5 bg-slate-200 self-start ml-2.5 -translate-x-1/2 translate-y-3"
                    ></div> */}
                    {/* <div
                      className="absolute left-0 rounded-full bg-indigo-500"
                      aria-hidden="true"
                    ></div> */}
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="custom-icon"
                    ></FontAwesomeIcon>
                    <h3 className="text-lg bold text-slate-800 pl-9">
                      You integrate the chatbot on your website
                    </h3>
                  </div>
                  <div className="pl-9 light">
                    That is it! we will provide you with a Javascript code to
                    put it on your website.
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-between">
              <Link className="btn-1" to="/dashboard/create-bot/pdf-upload">
                Let us do it! -&gt;
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step1;
