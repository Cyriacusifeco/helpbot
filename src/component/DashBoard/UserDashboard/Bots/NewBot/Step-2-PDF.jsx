// import Chatbot from '../Chatbots/Chatbots';
import '../Chatbots/Chatbots.css';
// import Dashboard from '../../DashBoard';
// import Sidebar from '../../../SideBar/Sidebar';

const Step2 = () => {
  return (
    <>
      <div className="div-container h-full flex flex-col after:flex-1">
        <div className="px-4 py-8">
          <div className="mx-auto max-w-md">
            <h1 className="text-3xl mb-6">
              Upload PDF files as data source 📄
            </h1>
            {/* Error handling, logic needed */}
            <div className="flex w-full justify-between items-start">
              <div className="flex">
                <svg
                  className="w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"></path>
                </svg>
                <div> Error: Too large!</div>
              </div>
              <button className="opacity-70 hover:opacity-80 ml-3 mt-[3px]">
                <div className="sr-only">Close</div>
                <svg className="w-4 h-4 fill-current">
                  <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Form
        <form method="POST" id="pdfCreate">
          <div className="space-y-4 mb-8">
            <div className="image-uploader" id="imageUploader">
              <div className="emoji" style="font-size: 30px">
                ⬆️
              </div>
              <p style="font-weight: bold; margin-bottom: 1rem">
                Click to upload or drag & drop
              </p>
              <span style="color: #2563eb">
                you can upload more then one .pdf file.
              </span>
            </div>
          </div>
        </form> */}
      </div>
    </>
  );
};

export default Step2;
