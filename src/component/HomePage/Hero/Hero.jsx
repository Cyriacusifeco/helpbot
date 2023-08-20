import './Hero.css';
import Hero_Img from '../../../assets/hero.svg';

const Hero = () => {
  return (
    <div className="hero-container h-50">
      <div className="left">
        <div className="col-sm-6 hero-article pt-4">
          <h1 className="heading-1 p-2  text-wrap">
            Enhance Your Customer Service with a Personalized{' '}
            <span className="helpbot">HelpBot!</span>
          </h1>
          <h4 className="p-2 pb-3 lh-sm text-wrap">
            Answer most customer questions instantly with conversational AI and
            Provide hands-on support with live chat.
          </h4>
          <div className="startup p-2">
            <button className="btn-1">Build your Chatbot</button>
            <button className="btn-2">Learn more</button>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={Hero_Img} alt="hero-img" />
      </div>
    </div>
  );
};
export default Hero;
