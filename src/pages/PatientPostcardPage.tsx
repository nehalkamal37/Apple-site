import React from 'react';
import './PatientPostcardPage.css';

const PatientPostcardPage = () => {
  return (
    <div className="postcard-container">
      <div className="postcard">
        <h1 className="title">Your Experience Matters</h1>
        
        <p className="description">
          At Apple Specialty Pharmacy, your care is a partnership - each service a vital piece of the puzzle, 
          coming together to support your unique health journey.
        </p>
        
        <ul className="feature-list">
          <li>Care That Puts You First</li>
          <li>Free Delivery to Your Door</li>
          <li>Answers That Make Sense</li>
          <li>Help With Costs and Coverage</li>
          <li>Your Health Team, Working Together</li>
        </ul>
        
        <p className="tools-description">
          Our secure online and mobile tools help you manage your medications with ease.
        </p>
        
        <ul className="tool-list">
          <li>Secure messaging with our pharmacy team</li>
          <li>Order and manage prescription refills using your mobile device</li>
          <li>Track your order status in real time</li>
          <li>Review your account and make secure payments.</li>
        </ul>
        
        <div className="pharmacy-name">APPLE SPECIALTY PHARMACY</div>
        
        <div className="cta-title">Get Started Today</div>
        
        <p className="cta-description">
          Let Apple Specialty Pharmacy take the stress out of specialty care.
        </p>
        
        <div className="contact-info">
          <div>323-999-APPL (2775)</div>
          <div>323-955-APPL (2775)</div>
          <div>1211 N. Broadway, Ste 300 Santa Ana, CA 92701</div>
        </div>
        
        <div className="stay-connected">Stay Connected, Anytime, Anywhere</div>
        
        <div className="hours-section">
          <div className="hours-title">Hours of Operation</div>
          <div>Mondays - Fridays</div>
          <div>8:30 AM - 5:00 PM PST</div>
          <div className="clinical-support">Clinical support available weekdays, weekends and holidays.</div>
        </div>
        
        <div className="visit-online">Visit Us Online</div>
        
        <div className="website">www.applespecialtypharmacy.com</div>
        
        <div className="tagline">
          <div>MODERN CARE</div>
          <div>PERSONALIZED PRECISION</div>
        </div>
      </div>
    </div>
  );
};

export default PatientPostcardPage;