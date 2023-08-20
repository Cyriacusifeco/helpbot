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
        ;
      </div>
    </section>
  );
};

export default Features;
