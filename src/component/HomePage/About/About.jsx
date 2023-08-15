import Fade from 'react-reveal/Fade';
import './About.css';
import team from '../../../assets/about.svg';

const About = () => {
  return (
    <section className="section-about-us overflow-hidden py-5" id="about">
      <div className="row">
        <div className="row col-md-11 mx-auto">
          <div className="col-md-6 img">
            <Fade duration={2000} left>
              <img src={team} alt="" className="img-fluid" />
            </Fade>
          </div>
          <div className="col-md-6 ps-2">
            <Fade duration={2000} right>
              <header className="section-header">
                <h1 className="headerTitle section-title">
                  We can help enhance your{' '}
                  <span className="headerHighlight">Business</span>
                </h1>
              </header>
              <p className="miniTitle section-tagline">Our Mission</p>
              <div className="section-body">
                <p className="headerContent">
                  Welcome to HelpBot, your partner in revolutionizing customer
                  service through the power of AI. We specialize in providing
                  businesses with cutting-edge AI chatbot solutions that elevate
                  customer interactions to new heights.
                </p>
                <p className="miniTitle section-tagline">About Us</p>
                <p>
                  Our mission is to empower businesses with the tools they need
                  to deliver exceptional customer service, improve efficiency,
                  and build stronger customer relationships. With HelpBot, you
                  can streamline customer inquiries, provide instant support,
                  and offer personalized assistance 24/7.
                </p>
                <button className="branBtn">Learn More</button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
