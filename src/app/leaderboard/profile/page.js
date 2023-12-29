'use client'

import React from 'react';
import Image from 'next/image';
import Nav from '@/components/Navbar';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import profile from '@images/profile_img.png'
import chevronleft from '@icons/icon-fi-chevron left.svg';
import ItemCard from '@/components/ItemCard'
import mylisting from '@json/mylisting.json';
import '@css/Profile.css';


const data = mylisting.listing;

const containerStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
  };

  const center = {
    lat: 1.3521,
    lng: 103.8198,
};

const mapOptions = {
    disableDefaultUI: true, // Hide default UI controls
};


function Profile() {

  return (
    <div>
    <div className="row mt-3 mb-3 mx-auto">     
        <div className="col-3 col-md-3 col-lg-3 custom-text-align-center">
            <a href="/home">
            <Image src={chevronleft} width="24" alt="chevronleft"/>
            </a>
        </div>
        <div className="col-6 col-md-6 col-lg-6 display-8 fw-bold custom-text-align-center">
        David
        </div>
    </div>

    <div>
      <div className="map-section">
        <div className="custom-map">
          <LoadScript googleMapsApiKey='AIzaSyD4WNtAN39CEDGpnu36QfDX5IhBRc_TRy4'>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} options={mapOptions}>
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>

    <main className="container">
        <Nav />
        <div className="row row-cols-1 row-cols-sm-12 row-cols-md-2">
            <div className="col-4">
            <Image className="custom-img img-fluid" src={profile} width={100} alt="user"/>
            </div>
            <div className="col-8 mt-3">
            <strong>Kingdom of Ang Mo Kio Estate</strong>
            </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-12 row-cols-md-12 m-1 mb-3">
            <div className="col-12 ">
            Prince (500)
            </div>
            <div className="col-12 mb-1">
            <strong>David</strong>
            </div>
            <div className="col-12 mb-1">
            <i className="bi bi-clock" /> Joined on September 2023 - 1 month ago
            </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-10 row-cols-md-12 mb-4 m-1">
            <div className="col-12">
            <strong>1234</strong> Likes · <strong>5324</strong> Supporters · <strong>1532</strong> Assets
            </div>
        </div>

        <div className="row row-cols-1 row-cols-sm-10 row-cols-md-12 mb-3 custom-tab-container">
            <div className="col-6 col-sm-6 p-1">
                <button className="btn btn-primary custom-btn">
                    Support
                </button>
            </div>
            <div className="col-6 col-sm-6 p-1">
                <button className="btn btn-primary custom-btn ">
                    Message
                </button>
            </div>
        </div>

        {/* Filter Tab  */}
        <div className="row row-cols-1 row-cols-sm-10 row-cols-md-12 custom-tab-container">
            <div className="col-6 col-sm-6 custom-tab">
                <div className="btn">
                All Listing (100)
                </div>
            </div>
            <div className="col-6 col-sm-6 custom-tab">
                <div className="btn">
                Review (50)
                </div>
            </div>
        </div>

      {/* Featured Products Section */}
      <div className="row mt-3 mx-auto">
        {data.map((item, index) => (
          <div className="col-6 col-md-6 col-lg-3 mb-4" key={index}>
            <ItemCard item={item} index={index} />
          </div>
        ))}
      </div>

    </main>
    </div>
  );
}

export default Profile;
