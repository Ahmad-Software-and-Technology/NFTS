import React from 'react';
import "./WhitelistSec.css"

const WhitelistSection = () => {
  return (
    <section className='whitelist-container '>
        <div className="whitelist-sub-container">
            <div className='whitelist-border-container'>
      <h4 className='title'>JOIN THE WHITELIST</h4>
      <p className='subtitle'>We invite you to be whitelisted – simply submit your email address and wallet details.</p>
      <form className='form'>
        <div className='text-left'>
            <label className='my-3'>Email</label>
      <input type="email"  required />

      <label className='my-3'>Wallet Address</label>
        <input type="text" placeholder=''  required />
        </div>
        <input type="submit" value="GET WHITELISTED" />
      </form>
      </div>
      </div>
    </section>
  );
};

export default WhitelistSection;
