'use client'

// UserHome.js
import React from 'react';
import Image from 'next/image';
import Nav from '@/components/Navbar';
import bell from '@icons/icon-fi-bell-outlined.svg'
import ItemCard from '@/components/ItemCard'
import mylisting from '@json/mylisting.json';

const data = mylisting.listing;
const categories = ['100m', '500m', '1km', 'Food', 'Beverage'];

function UserHome() {

  return (
    <main className="container">
        <Nav />
        <div className="row mt-4 mb-5 mx-auto">
          <div className="col-9 col-md-9 col-lg-10 fs-3 fw-bold">
            Worthy
          </div>
        <div className="col-3 col-md-3 col-lg-2 custom-text-align-right my-auto">
            <a href="/notifications" className="text-secondary fw-bold custom-lbl custom-link"><Image src={bell} width={28} alt="bell"/></a>
        </div>
        </div>
        
        {/* Category Filter with Scrollable Buttons */}
        <div className="row mt-3 mb-5 mx-auto">
            <div className="col">
              <div className="scrollable-categories-container custom-text-align-center">
                  {categories.map((category, index) => (
                  <button key={index} className="btn custom-category-btn fw-bold">{category}</button>
                  ))}
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
  );
}

export default UserHome;
