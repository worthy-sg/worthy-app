'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import chevronleft from '@icons/icon-fi-chevron left.svg';
import profile from '@images/profile_img.png'
import '@css/Settings.css';

function Transactions() {
    const [smsChecked, setsmsChecked] = useState(false);
    const [emailChecked, setemailChecked] = useState(false);
    const [pushChecked, setpushChecked] = useState(false);


    const handleSmsToggle = () => {
        setsmsChecked((prevChecked) => !prevChecked);
    };

    const handleEmailToggle = () => {
        setemailChecked((prevChecked) => !prevChecked);
    };

    const handlePushToggle = () => {
        setpushChecked((prevChecked) => !prevChecked);
    };

    return (
        <main className="container">
            <div className="row mt-4 mb-5 mx-auto">
                <div className="col-3 col-md-3 col-lg-3 custom-text-align-center">
                    <a href="/settings/notification">
                    <Image src={chevronleft} width="24" alt="chevronleft"/>
                    </a>
                </div>
                <div className="col-6 col-md-6 col-lg-6 display-8 fw-bold custom-text-align-center">
                Transactions
                </div>
            </div>
    
            <div className="row mb-2">
                <div className="mb-3">
                    <p>Update your chats, offers, reviews and listings</p>
                    <div className="item-block">
                        <Image className="custom-img img-fluid" src={profile} width={40} alt="user"/>
                        <span><strong>David</strong> accepted your request on the following item: Jams</span>
                    </div>
                </div>

                <div className="row mb-3 mx-1">
                    <h5 className='fw-bold'>About there notifications</h5>
                    <p>These are important updates...</p>

                    <div className="mt-3">
                        <h6 className='fw-bold'>More notification settings</h6>
                    </div>

                </div>
            </div>


            <div className="row mx-1" >
                <div className="custom-toggle-div mb-3">
                    <span>SMS</span>
                    <div className="background_box">
                        <label className={`toggle_box ${smsChecked ? 'checked' : ''}`}>
                            <input type="checkbox" id="checkbox" onChange={handleSmsToggle} checked={smsChecked}/>
                            <div className="circle"></div>
                        </label>
                    </div>
                </div>
                <div className="custom-toggle-div mb-3">
                    <span>Email</span>
                    <div className="background_box">
                        <label className={`toggle_box ${emailChecked ? 'checked' : ''}`}>
                            <input type="checkbox" id="checkbox" onChange={handleEmailToggle} checked={emailChecked}/>
                            <div className="circle"></div>
                        </label>
                    </div>
                </div>
                <div className="custom-toggle-div mb-3">
                    <span>Push Notification</span>
                    <div className="background_box">
                        <label className={`toggle_box ${pushChecked ? 'checked' : ''}`}>
                            <input type="checkbox" id="checkbox" onChange={handlePushToggle} checked={pushChecked}/>
                            <div className="circle"></div>
                        </label>
                    </div>
                </div>
            </div>
        </main>
      );
    }
export default Transactions;
