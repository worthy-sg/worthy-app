import React from 'react';
import Image from 'next/image';
import chevronleft from '@icons/icon-fi-chevron left.svg';
import chevronright from '@icons/icon-fi-chevron right.svg';

import '@css/Settings.css';

function Notification() {
    return (
        <div className="container">
          <div className="row mt-4 mb-5 mx-auto">
              <div className="col-3 col-md-3 col-lg-3 custom-text-align-center">
                  <a href="/settings">
                  <Image src={chevronleft} width="24" alt="chevronleft"/>
                  </a>
              </div>
              <div className="col-6 col-md-6 col-lg-6 display-8 fw-bold custom-text-align-center">
              Notification
              </div>
          </div>
    
          <div className="row mb-3">
            <a href="/settings/notification/transaction" className="custom-link">
            <div className="btn custom-setting-btn ">
              Transactions
              <span className="ml-auto">
                on
                <Image src={chevronright} alt="chevronright" className="mr-2" />
              </span>
            </div>
            </a>
          </div>
    
          <div className="row mb-3">
            <a href="/settings/notification/user-interests" className="custom-link">
            <div className="btn custom-setting-btn">
                Listing you're interested in           
                <span className="ml-auto">
                on
                <Image src={chevronright} alt="chevronright" className="mr-2" />
                </span>
            </div>
            </a>
            </div>
        </div>
      );
    }
export default Notification;
