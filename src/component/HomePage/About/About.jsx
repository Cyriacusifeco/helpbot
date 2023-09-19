import Fade from 'react-reveal/Fade';
import './About.css';
import team from '../../../assets/about.svg';

const About = () => {
  return (
    <section className="section-about section overflow-hidden py-5" id="about">
      <div className="about-text">
        <h1 className="section-header-title">About Us</h1>
        <div className="section-body">
          <p className="section-text-center">
            HelpBot is your partner in revolutionizing customer service through
            the power of AI. We specialize in providing businesses with
            cutting-edge AI chatbot solutions that elevate customer interactions
            to new heights. HelpBot is your partner in revolutionizing customer
            service through the power of AI. HelpBot is your partner in
            revolutionizing customer service through the power of AI.HelpBot is
            your partner in revolutionizing customer service through the power
            of AI.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="row col-md-11 mx-auto">
          <div className="col-md-6 img">
            <Fade duration={2000} left>
              <img src={team} alt="" className="img-fluid" />
            </Fade>
          </div>
          <div className="col-md-6 ps-2 p-1">
            <Fade duration={2000} right>
              <header className="section-header">
                <h1 className="headerTitle section-title">
                  We can help enhance your{' '}
                  <span className="headerHighlight">Business</span>
                </h1>
              </header>
              {/* <p className="miniTitle section-tagline">Our Mission</p> */}
              <p className="section-body section-text">
                Our mission is to empower businesses with the tools they need to
                deliver exceptional customer service, improve efficiency, and
                build stronger customer relationships. With HelpBot, you can
                streamline customer inquiries, provide instant support, and
                offer personalized assistance 24/7.
              </p>
              <button className="btn-1">Learn More</button>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
