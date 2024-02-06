import React from 'react';
import './SubscriptionSection.css'; // Make sure to provide the correct path to your CSS file

const SubscriptionSection = () => {
  return (
    <div className="subscription-section">
      <div className="subscription-container">
        <h3 className='title'>JOIN THE WHITELIST</h3>
        <p>We invite you to be whitelisted </p>
        <form className="subscription-form">
          <div className='subscription-form-input'>

          <input type="email" placeholder='Email'  required />
          
            
          <textarea type="text" placeholder='Bio' rows={2}  required />
          </div>
          <div className='subscription-form-button'>
          <button type="submit" className='btn-whitelist sc-button   style-2'>GET WHITELISTED</button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionSection;
