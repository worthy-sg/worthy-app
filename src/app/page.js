'use client'

// GuestHome.js
import React from 'react';
import ItemCard from '@/components/ItemCard'
import mylisting from '@json/mylisting.json';

const data = mylisting.listing;

function GuestHome() {

  return (
    <main className="container">
      <div className="row mt-4 mb-5 mx-auto">
        <div className="col-9 col-md-9 col-lg-10 fs-3 fw-bold">
          Worthy
        </div>
        <div className="col-3 col-md-3 col-lg-2 custom-text-align-right my-auto">
          <a href="/login" className="fw-bold custom-lbl custom-link">Login</a>
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

export default GuestHome;

