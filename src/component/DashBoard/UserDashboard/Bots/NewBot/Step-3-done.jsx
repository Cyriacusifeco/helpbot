import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NewBot.css';
import { Link } from 'react-router-dom';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Step3 = () => {
  return (
    <>
      <div className="px-4 py-8">
        <div className="text-center">
          <FontAwesomeIcon
            className="icon-done fill-current mb-6 w-16 h-16 inline-flex"
            icon={faCheck}
          ></FontAwesomeIcon>
          <h2 className="text-3xl space text-slate-800 font-bold mb-8">
            That is it! Your bot is readyyy🙌
          </h2>
          <Link className="btn-1 space btn-onboarding" to="/dashboard/chatbot">
            Open your bot🤍 -&gt;
          </Link>
        </div>
      </div>
    </>
  );
};
export default Step3;
