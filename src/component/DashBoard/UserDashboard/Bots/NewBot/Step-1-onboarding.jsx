// import Chatbot from '../Chatbots/Chatbots';
import '../Chatbots/Chatbots.css';
// import Dashboard from '../../DashBoard';
// import Sidebar from '../../../SideBar/Sidebar';

const Step1 = () => {
  return (
    <>
      {/* <Sidebar /> */}
      <div className="div-container">
        <div className="mx-auto max-w-md">
          <h1 className="text-3xl mb-6">
            Lets set up your chatbot, it is free!✨
          </h1>
          <p className="newbot-p">And here how we are going to do it:</p>
          {/* Form */}
          <form>
            <div className="mb-8">
              <ul className="-my-2">
                <li className="relative py-2">
                  <div className="mb-1 flex">
                    <div
                      aria-hidden={true}
                      className="h-full absolute left-0"
                    ></div>
                    <div
                      className="absolute left-0 rounded-full bg-indigo-500"
                      aria-hidden={true}
                    >
                      <svg
                        className="w-5 h-5 fill-current text-white"
                        viewBox="0 0 20 20"
                      >
                        <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z"></path>
                      </svg>
                    </div>
                    <h3>You provide the system with data</h3>
                  </div>
                  <div className="pl-9">
                    It has to be a PDF file. Hopefully, you will have the option
                    to integrate with many more very soon
                  </div>
                </li>
                <li className="relative py-2">
                  <div className="mb-1 flex">
                    <div
                      aria-hidden={true}
                      className="h-full absolute left-0"
                    ></div>
                    <div
                      className="absolute left-0 rounded-full bg-indigo-500"
                      aria-hidden={true}
                    >
                      <svg
                        className="w-5 h-5 fill-current text-white"
                        viewBox="0 0 20 20"
                      >
                        <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z"></path>
                      </svg>
                    </div>
                    <h3>We train our AI on the knowledge from the PDF file</h3>
                  </div>
                  <div className="pl-9">
                    It might take minutes or hours, depending on how bulky your
                    data is.
                  </div>
                </li>
                <li className="relative py-2">
                  <div className="mb-1 flex">
                    <div
                      aria-hidden={true}
                      className="h-full absolute left-0"
                    ></div>
                    <div
                      className="absolute left-0 rounded-full bg-indigo-500"
                      aria-hidden={true}
                    >
                      <svg
                        className="w-5 h-5 fill-current text-white"
                        viewBox="0 0 20 20"
                      >
                        <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z"></path>
                      </svg>
                    </div>
                    <h3>You integrate the chatbot on your website</h3>
                  </div>
                  <div className="pl-9">
                    That is it! we will provide you with a Javascript code to
                    put it on your website.
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-between">
              <a href="/dashboard/create-bot/pdf-upload">Let us do it! -&gt;</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Step1;
