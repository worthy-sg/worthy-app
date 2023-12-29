import React from 'react';
import Image from 'next/image';
import profile from '@images/profile_img.png'
import slipper from '@images/item_slipper.png'
import chevronleft from '@icons/icon-fi-chevron left.svg';
import '@css/Notifications.css'

function Notifications() {

  return (
    <main className="container">
        <div className="row mt-3 mb-5 mx-auto custom-header">     
            <div className="col-3 col-md-3 col-lg-3 custom-text-align-center">
                <a href="/home">
                <Image src={chevronleft} width="24" alt="chevronleft"/>
                </a>
            </div>
            <div className="col-6 col-md-6 col-lg-6 display-8 fw-bold custom-text-align-center">
            Notifications 
            </div>
        </div>
        
        <div className="row mt-3 mb-3 mx-auto"> 
            <p>Today</p>
        </div>
        
        <div className="row mb-4 mx-auto"> 
            <div className="col-8">
                <Image className="img-fluid" src={profile} width={40} alt="user"/>
                <span>  <strong>David</strong> started supporting you.</span>
            </div>
            <div className="col-4">
                <button className="btn btn-primary custom-support-btn">Support Back</button>
            </div>  
        </div>

        <div className="row mb-4 mx-auto"> 
            <div className="col-8">
                <Image className="img-fluid" src={profile} width={40} alt="user"/>
                <span>  <strong>David</strong> liked your listing.</span>
            </div>
            <div className="col-4 custom-img">
            <Image className="img-fluid" src={slipper} width={40} alt="slipper"/>
            </div>   
        </div>

        <div className="row mt-3 mb-3 mx-auto"> 
            <div className="col-8">
                <Image className="img-fluid" src={profile} width={40} alt="user"/>
                <span>  <strong>David</strong> started supporting you.</span>
            </div>
            <div className="col-4">
                <button className="btn btn-primary custom-support-btn">Support Back</button>
            </div>   
        </div>

        <div className="row mt-4 mb-3 mx-auto"> 
            <p>Yesterday</p>
        </div>

        <div className="row mb-3 mx-auto"> 
            <div className="col-8">
                <Image className="img-fluid" src={profile} width={40} alt="user"/>
                <span>  <strong>David</strong> started supporting you.</span>
            </div>
            <div className="col-4">
                <button className="btn btn-primary custom-support-btn">Support Back</button>
            </div>   
        </div>

        <div className="row mt-4 mb-3 mx-auto"> 
            <p>Last 30 days</p>
        </div>

        <div className="row mb-3 mx-auto"> 
            <div className="col-8">
                <Image className="img-fluid" src={profile} width={40} alt="user"/>
                <span>  <strong>David</strong> started supporting you.</span>
            </div>
            <div className="col-4">
                <button className="btn btn-primary custom-support-btn">Support Back</button>
            </div>   
        </div>

        <div className="row mt-4 mb-3 mx-auto"> 
            <p>Older</p>
        </div>

        <div className="row mb-3 mx-auto"> 
            <div className="col-8">
                <Image className="img-fluid" src={profile} width={40} alt="user"/>
                <span>  <strong>David</strong> started supporting you.</span>
            </div>
            <div className="col-4">
                <button className="btn btn-primary custom-support-btn">Support Back</button>
            </div>   
        </div>

    </main>

  );
}

export default Notifications;
