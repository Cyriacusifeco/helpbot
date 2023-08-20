import './Features.css';
// import { useState, useEffect } from 'react';

const Features = () => {
  return (
    <section className="section-features section" id="features">
      <div className="about-text">
        <header className="section-header">
          <h2 className="section-header-title">Features</h2>
          <p className="section-tagline">We provide awesome services</p>
        </header>
        <div className="section-body">
          <ul className="features-row">
            <li className="col-1-3 pad-1">
              <div className="card-services">
                <h3 className="card-title">
                  <a href="#">24/7 Customer Support</a>
                </h3>
              </div>
            </li>
            <li className="col-1-3 pad-1">
              <div className="card-services">
                <h3 className="card-title">
                  <a href="#">Instant Responses</a>
                </h3>
              </div>
            </li>
            <li className="col-1-3 pad-1">
              <div className="card-services">
                <h3 className="card-title">
                  <a href="#">Troubleshooting Assistance</a>
                </h3>
              </div>
            </li>
          </ul>
          <ul className="features-row">
            <li className="col-1-3 pad-1">
              <div className="card-services">
                <h3 className="card-title">
                  <a href="#">Automated Ticket Creation</a>
                </h3>
              </div>
            </li>
            <li className="col-1-3 pad-1">
              <div className="card-services">
                <h3 className="card-title">
                  <a href="#">Escalation to Human Agents</a>
                </h3>
              </div>
            </li>
            <li className="col-1-3 pad-1">
              <div className="card-services">
                <h3 className="card-title">
                  <a href="#">Feedback Collection</a>
                </h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="feature-hero">
        <h1 className="section-feature-title">
          Solve up to 70% of Customer problems in seconds with{' '}
          <span className="helpbot">HelpBot</span>
        </h1>
        <p className="section-title-text">
          Small and medium businesses can now scale their support capacity
          without extra hiring. HelpBot talks to your customers and answers
          their questions in an instant.
        </p>
        <button className="feat-btn">Build your Chatbot</button>
      </div>
    </section>
  );
};

export default Features;
