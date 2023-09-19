import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import './NewBot.css';

const Step2 = () => {
  // PDF upload logic
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  const url = 'http://localhost:3000/file/knowledge/6509a0e6192e5ffc6c64382f';

  // Function to handle file input change
  const handleFileInputChange = (event) => {
    const files = event.target.files;
    const imageElements = [];

    Array.from(files).forEach((file) => {
      const imgElement = (
        <img
          key={file.name}
          src={URL.createObjectURL(file)} // Use createObjectURL to get a URL for the file
          alt={file.name}
          className="img-thumbnail mr-2 mb-2"
        />
      );
      imageElements.push(imgElement);
    });

    setUploadedImages(imageElements);
  };

  const handleClickUploader = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (uploadedImages.length === 0) {
      return;
    }

    setIsLoading(true);

    const formData = new FormData();

    uploadedImages.forEach((file) => {
      formData.append('pdffiles', file); // Append the file directly
    });

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // File upload was successful
        // Navigate to a new location upon success
        window.location.href = '/dashboard/create-bot/success';
      } else {
        console.error('File upload failed');
      }
    } catch (error) {
      console.error('An error occurred', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="div-container h-full flex flex-col after:flex-1">
      <div className="px-4 py-8">
        <div className="mx-auto max-w-md">
          <h1 className="text-3xl text-slate-800 font-bold mb-6">
            Upload PDF files as data source 📄
          </h1>
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
          </div>

          {isLoading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <div className="flex items-center justify-between">
              <Link
                className="bot-a text-s underline hover:no-underline"
                to="/dashboard/create-bot/onboarding"
              >
                &lt;- Back
              </Link>
              <button className="btn-2 ml-auto" type="submit">
                Next -&gt;
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Step2;
