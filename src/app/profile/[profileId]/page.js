import React from 'react';
import Image from 'next/image';
import chevronleft from '@icons/icon-fi-chevron left.svg';
import chevronright from '@icons/icon-fi-chevron right.svg';

function ProfileSettings( {params} ) {

    return (

    <div className="container">
        <div className="row mt-4 mb-4 mx-auto">
            <div className="col-2 col-md-2 col-lg-2 custom-text-align-center">
                <a href="/profile">
                <Image src={chevronleft} width="24" alt="chevronleft"/>
                </a>
            </div>
            <div className="col-8 col-md-8 col-lg-8 display-8 fw-bold custom-text-align-center">
            User {params.profileId}'s Stats
            </div>
            <div className="col-2 col-md-2 col-lg-2 custom-text-align-right ">
                    <a className="custom-lbl custom-link">Save</a>
                </div>
        </div>
        <div className="row custom-grey-bg"> 
            <div className="col-8">
                <span>Worthy Coins</span>
            </div>
            <div className="col-4 custom-text-align-right">
                <span>1200</span>
            </div>  
        </div>
        <div className="row custom-grey-bg"> 
            <div className="col-8">
                <span>Supporters</span>
            </div>
            <div className="col-4 custom-text-align-right">
                <span>1200</span>
            </div>  
        </div>
        <div className="row custom-grey-bg"> 
            <div className="col-8">
                <span>Supporting</span>
            </div>
            <div className="col-4 custom-text-align-right">
                <span>1200</span>
            </div>  
        </div>
        <div className="row custom-grey-bg"> 
            <div className="col-8">
                <span>Likes</span>
            </div>
            <div className="col-4 custom-text-align-right">
                <span>1200</span>
            </div>  
        </div>
        <div className="row mb-4 custom-grey-bg"> 
            <div className="col-8">
                <span>Asset</span>
            </div>
            <div className="col-4 custom-text-align-right">
                <span>1200</span>
            </div>  
        </div>
        <div className="row mb-4"> 
            <div className="col-8">
                <span>Item(s) Donated</span>
            </div>
            <div className="col-4 custom-text-align-right">
                <span>100</span>
            </div>  
        </div>
        <div className="row mb-4"> 
            <div className="col-8">
                <span>Item(s) Received</span>
            </div>
            <div className="col-4 custom-text-align-right">
                <span>100</span>
            </div>  
        </div>
    </div>
    );
};

export default ProfileSettings;