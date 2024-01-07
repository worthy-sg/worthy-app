'use client'

import React from 'react';
import Image from 'next/image';
import Nav from '@/components/Navbar';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import profile from '@images/profile_img.png'
import chevronleft from '@icons/icon-fi-chevron left.svg';
import chevronright from '@icons/icon-fi-chevron right.svg';
import mylisting from '@json/mylisting.json';
import '@css/Profile.css';

const data = mylisting.listing;


function EditProfile() {

  return (
    <div className="container">
    <Nav />
    <div className="row mt-3 mb-3 mx-auto custom-header">     
        <div className="col-2 col-md-2 col-lg-3 custom-text-align-center">
            <a href="/profile">
            <Image src={chevronleft} width="24" alt="chevronleft"/>
            </a>
        </div>
        <div className="col-8 col-md-8 col-lg-6 custom-text-align-center">
        Edit Profile 
        </div>
        <div className="col-2 col-md-2 col-lg-2 custom-text-align-right ">
          <a className="custom-lbl custom-link">Save</a>
        </div>
    </div>

    <div className="row">
        <a href="/profile/edit/fullname" className="custom-link">
            <div className="btn custom-setting-btn ">
                Full Name
                <span className="ml-auto">
                Sie Choon Hong<Image src={chevronright} alt="chevronright" className="mr-2" />
                </span>
            </div>
        </a>
        <a href="/profile/edit/phone" className="custom-link">
            <div className="btn custom-setting-btn ">
                Phone
                <span className="ml-auto">
                1234 5678<Image src={chevronright} alt="chevronright" className="mr-2" />
                </span>
            </div>
        </a>
        <a href="/profile/edit/email" className="custom-link">
            <div className="btn custom-setting-btn ">
                Email
                <span className="ml-auto">
                choonhong.worthy@gmail.com<Image src={chevronright} alt="chevronright" className="mr-2" />
                </span>
            </div>
        </a>
        <a href="/profile/edit/password" className="custom-link">
            <div className="btn custom-setting-btn ">
                Password
                <span className="ml-auto">
                <Image src={chevronright} alt="chevronright" className="mr-2" />
                </span>
            </div>
        </a>
        <a href="/profile/edit" className="custom-link">
            <div className="btn custom-setting-btn ">
                Location
                <span className="ml-auto">
                <Image src={chevronright} alt="chevronright" className="mr-2" />
                </span>
            </div>
        </a>
    </div> 
    

    </div>
  );
}

export default EditProfile;
