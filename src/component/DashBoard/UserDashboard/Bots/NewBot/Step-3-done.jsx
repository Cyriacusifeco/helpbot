import './NewBot.css';
import { Link } from 'react-router-dom';

const Step3 = () => {
  <>
    <div className="px-4 py-8">
      <div className="text-center">
        <svg
          className="inline-flex w-16 h-16 fill-current mb-6"
          viewBox="0 0 64 64"
        >
          <circle className="text-emerald-100" cx="32" cy="32" r="32"></circle>
          <path
            className="text-emerald-500"
            d="m28.5 41-8-8 3-3 5 5 12-12 3 3z"
          ></path>
        </svg>
        <h1 className="text-3xl text-slate-800 font-bold mb-8">
          That is it! 🙌
        </h1>
        <Link
          className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
          to="chatbot"
        >
          Open your bot❤️ -&gt;
        </Link>
      </div>
    </div>
  </>;
};
export default Step3;
