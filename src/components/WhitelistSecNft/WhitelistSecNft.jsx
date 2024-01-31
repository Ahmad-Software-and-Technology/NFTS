import React from 'react';
import './SubscriptionSection.css'; // Make sure to provide the correct path to your CSS file

const SubscriptionSection = () => {
  return (
    <div className="subscription-section">
      <div className="subscription-container">
        <h2 className='title'>JOIN THE WHITELIST</h2>
        <p>We invite you to be whitelisted </p>
        <form className="subscription-form">
            <label htmlFor=""> Email</label>
          <input type="email"  required />
          
            <label htmlFor=""> Bio</label>
          <input type="email"  required />
          
        </form>
          <button type="submit" className='btn-whitelist sc-button   style-2'>GET WHITELISTED</button>
      </div>
    </div>
  );
};

export default SubscriptionSection;
