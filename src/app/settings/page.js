import React from 'react';
import Image from 'next/image';
import chevronleft from '@icons/icon-fi-chevron left.svg';
import chevronright from '@icons/icon-fi-chevron right.svg';
import '@css/Settings.css';


function Settings() {
  return (
    <div className="container">
      <div className="row mt-4 mb-4 mx-auto">
          <div className="col-3 col-md-3 col-lg-3 custom-text-align-center">
              <a href="/profile">
              <Image src={chevronleft} width="24" alt="chevronleft"/>
              </a>
          </div>
          <div className="col-6 col-md-6 col-lg-6 display-8 fw-bold custom-text-align-center">
          Settings
          </div>
      </div>

      <div className="row custom-grey-bg custom-item-align-center">
        <h6>General</h6>
      </div>

      <div className="row">
        <a href="/settings/notification" className="custom-link">
        <div className="btn custom-setting-btn ">
          Notifications
          <span className="ml-auto">
            <Image src={chevronright} alt="chevronright" className="mr-2" />
          </span>
        </div>
        </a>
      </div>

      <div className="row custom-grey-bg custom-item-align-center">
        <h6>Support</h6>
      </div>

      <div className="row">
        <a href="/help" className="custom-link">
        <div className="btn custom-setting-btn">
          Help Center
          <span className="ml-auto">
            <Image src={chevronright} alt="chevronright" className="mr-2" />
          </span>
        </div>
        </a>
        <a href="/terms" className="custom-link">
        <div className="btn custom-setting-btn">
          Terms and Conditions
          <span className="ml-auto">
            <Image src={chevronright} alt="chevronright" className="mr-2" />
          </span>
        </div>
        </a>
        <a href="/feedback" className="custom-link">
        <div className="btn custom-setting-btn">
          Contact Us/Feedback
          <span className="ml-auto">
            <Image src={chevronright} alt="chevronright" className="mr-2" />
          </span>
        </div>
        </a>
        <a href="/requestDeletion" className="custom-link">
        <div className="btn custom-setting-btn">
          Request Account Deletion
          <span className="ml-auto">
            <Image src={chevronright} alt="chevronright" className="mr-2" />
          </span>
        </div>
        </a>
        <a className="custom-link">
        <div className="btn custom-setting-btn">
          About Us
          <span className="ml-auto">
            <Image src={chevronright} alt="chevronright" className="mr-2" />
          </span>
        </div>
        </a>
        <a href="/login" className="custom-link">
        <div className="btn custom-setting-btn">
          Logout
        </div>
        </a>
      </div>
    </div>
  );
}

export default Settings;