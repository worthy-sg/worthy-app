import React from 'react';
import Image from 'next/image';
import profile from '@images/profile_img.png'
import slipper from '@images/item_slipper.png'
import chevronleft from '@icons/icon-fi-chevron left.svg';
import '@css/Notifications.css'

function Supporting() {

  return (
    <main className="container">
        <div className="row mt-3 mb-5 mx-auto custom-header">     
            <div className="col-3 col-md-3 col-lg-3 custom-text-align-center">
                <a href="/profile">
                <Image src={chevronleft} width="24" alt="chevronleft"/>
                </a>
            </div>
            <div className="col-6 col-md-6 col-lg-6 display-8 fw-bold custom-text-align-center">
            Supporting
            </div>
        </div>
        
        
        <div className="row mb-4 mx-auto d-flex justify-content-center custom-item-align-center"> 
            <div className="col-8">
                <Image className="img-fluid" src={profile} width={60} alt="user"/>
                <span>  Ang Bo Huat</span>
            </div>
            <div className="col-4">
                <button className="btn btn-primary custom-support-btn">Support</button>
            </div>  
        </div>
        <div className="row mb-4 mx-auto d-flex justify-content-center custom-item-align-center"> 
            <div className="col-8">
                <Image className="img-fluid" src={profile} width={60} alt="user"/>
                <span>  Ang Bo Huat</span>
            </div>
            <div className="col-4">
                <button className="btn btn-primary custom-support-btn">Support</button>
            </div>  
        </div>
        <div className="row mb-4 mx-auto d-flex justify-content-center custom-item-align-center"> 
            <div className="col-8">
                <Image className="img-fluid" src={profile} width={60} alt="user"/>
                <span>  Ang Bo Huat</span>
            </div>
            <div className="col-4">
                <button className="btn btn-primary custom-support-btn">Support</button>
            </div>  
        </div>
        <div className="row mb-4 mx-auto d-flex justify-content-center custom-item-align-center"> 
            <div className="col-8">
                <Image className="img-fluid" src={profile} width={60} alt="user"/>
                <span>  Ang Bo Huat</span>
            </div>
            <div className="col-4">
                <button className="btn btn-primary custom-support-btn">Support</button>
            </div>  
        </div>
        <div className="row mb-4 mx-auto d-flex justify-content-center custom-item-align-center"> 
            <div className="col-8">
                <Image className="img-fluid" src={profile} width={60} alt="user"/>
                <span>  Ang Bo Huat</span>
            </div>
            <div className="col-4">
                <button className="btn btn-primary custom-support-btn">Support</button>
            </div>  
        </div>
        <div className="row mb-4 mx-auto d-flex justify-content-center custom-item-align-center"> 
            <div className="col-8">
                <Image className="img-fluid" src={profile} width={60} alt="user"/>
                <span>  Ang Bo Huat</span>
            </div>
            <div className="col-4">
                <button className="btn btn-primary custom-support-btn">Support</button>
            </div>  
        </div>

        

    </main>

  );
}

export default Supporting;
