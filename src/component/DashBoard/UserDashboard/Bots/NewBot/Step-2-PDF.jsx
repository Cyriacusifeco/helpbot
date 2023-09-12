import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import './NewBot.css';

const Step2 = () => {
  // PDF upload logic
  const [uploadedImages, setUploadedImages] = useState([]);
  const fileInputRef = useRef(null);

  // Function to handle file input change
  const handleFileInputChange = (event) => {
    const files = event.target.files;
    const imageElements = [];
    // // eslint-disable-next-line no-unused-vars, react-hooks/rules-of-hooks, no-undef
    // const fileInputRef = useRef(null);

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const imgElement = (
          <img
            key={file.name}
            src={reader.result}
            alt={file.name}
            className="img-thumbnail mr-2 mb-2"
          />
        );
        imageElements.push(imgElement);
        setUploadedImages([...imageElements]); // Updates state with new images
      };
    });
  };

  const handleClickUploader = () => {
    // eslint-disable-next-line no-undef
    fileInputRef.current.click();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="div-container h-full flex flex-col after:flex-1">
        <div className="px-4 py-8">
          <div className="mx-auto max-w-md">
            <h1 className="text-3xl mb-6">
              Upload PDF files as data source 📄
            </h1>
            {/* Error handling, logic needed */}
            {/* <div className="flex w-full justify-between items-start">
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
            </div> */}
          </div>
        </div>
        {/* Form */}
        <form method="POST" id="pdfCreate" onSubmit={handleSubmit}>
          <div className="space-y-4 mb-8">
            <div>
              <div
                className="image-uploader"
                id="imageUploader"
                onClick={handleClickUploader}
              >
                <div className="emoji">⬆️</div>
                <p className="step2-text">Click to upload file..</p>
                <span className="imp-span">
                  you can upload up to 5 pdf files..
                </span>
              </div>
              <input
                type="file"
                name="pdffiles"
                id="fileInput"
                className="pdf-input"
                accept="application/pdf"
                required
                multiple
                onChange={handleFileInputChange}
                ref={fileInputRef}
                style={{ display: 'none' }}
              />
              <div className="uploaded-images" id="uploadedImages">
                {uploadedImages}
              </div>
            </div>

            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="font-medium text-slate-800 text-sm mb-1">
                  Make sure that your files are scannable (text not images)🆗
                </div>
                <div className="text-xs">
                  You can upload multiple files at once and we will process them
                  in the background. Atleast, I think so..😒
                </div>
              </div>
            </div>
          </div>

          <div className="flex flx">
            <Link
              className="bot-a text-sm underline "
              to="/dashboard/create-bot/onboarding"
            >
              &lt;- Back
            </Link>
            <Link to="/dashboard/create-bot/done">
              <button
                className="btn-2 btn-onboarding"
                type="button"
                // form="pdfCreate"
              >
                Complete Training -&gt;
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Step2;
