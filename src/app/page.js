'use client'

// GuestHome.js
import React, { useState } from 'react';
import Image from 'next/image';
import Nav from '@/components/Navbar';
import dots from '@icons/icon-bs-ThreeDotsVertical.svg';
import thumbsup from '@icons/icon-bs-handthumbsup-outlined.svg';
import thumbsupfilled from '@icons/icon-bs-handthumbsup-filled.svg';
import thumbsdown from '@icons/icon-bs-handthumbsdown-outlined.svg';
import thumbsdownfilled from '@icons/icon-bs-handthumbsdown-filled.svg';
import chevronright from '@icons/icon-fi-chevron right.svg';

import mylisting from '@json/mylisting.json';

const data = mylisting.listing;

function GuestHome() {
  const [openDropdown, setOpenDropdown] = useState(Array(data.length).fill(false));
  const [thumbsUpClicked, setThumbsUpClicked] = useState(Array(data.length).fill(false));
  const [thumbsDownClicked, setThumbsDownClicked] = useState(Array(data.length).fill(false));

  const handleDropdownToggle = (index) => {
    const newOpenDropdown = [...openDropdown];
    newOpenDropdown[index] = !newOpenDropdown[index];
    setOpenDropdown(newOpenDropdown);
  };

  const handleThumbsUpClick = (index) => {
    setThumbsUpClicked((prevThumbsUpClicked) => {
      const newThumbsUpClicked = [...prevThumbsUpClicked];
      newThumbsUpClicked[index] = !newThumbsUpClicked[index];

      if (newThumbsUpClicked[index] && thumbsDownClicked[index]) {
        setThumbsDownClicked((prevThumbsDownClicked) => {
          const newThumbsDownClicked = [...prevThumbsDownClicked];
          newThumbsDownClicked[index] = false;
          return newThumbsDownClicked;
        });
      }

      return newThumbsUpClicked;
    });
  };

  const handleThumbsDownClick = (index) => {
    setThumbsDownClicked((prevThumbsDownClicked) => {
      const newThumbsDownClicked = [...prevThumbsDownClicked];
      newThumbsDownClicked[index] = !newThumbsDownClicked[index];

      if (newThumbsDownClicked[index] && thumbsUpClicked[index]) {
        setThumbsUpClicked((prevThumbsUpClicked) => {
          const newThumbsUpClicked = [...prevThumbsUpClicked];
          newThumbsUpClicked[index] = false;
          return newThumbsUpClicked;
        });
      }

      return newThumbsDownClicked;
    });
  };

  return (
    <main className="container">
      <div className="row mt-4 mb-5 mx-auto">
        <div className="col-3 col-md-3 col-lg-3 display-6 fw-bold">
          Worthy
        </div>
        <div className="col-6 col-md-6 col-lg-7"></div>
        <div className="col-3 col-md-3 col-lg-2 custom-text-align-right my-auto">
          <a href="/login" className="text-secondary fw-bold custom-lbl custom-link">Login</a>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="row mt-3 mb-5 mx-auto">
        {data.map((item, index) => (
          <div className="col-6 col-md-6 col-lg-3 mb-4" key={index}>
            <div className="card mb-3 border-0">
              <Image src={item.image} width={240} height={240} alt={item.label} className="card-img-top img-fluid"/>
              {/* Icon overlay */}
              <div className="icon-overlay">
                {/* Dropdown */}
                <a href="#" onClick={() => handleDropdownToggle(index)}>
                  <Image src={dots} alt="dots" />
                </a>
                <div className={`dropdown-menu ${openDropdown[index] ? 'show' : ''}`}>
                  <a className="dropdown-item">
                    <div className="row">
                      <div className="col-8">Report Item</div>
                      <div className="col-4"><Image src={chevronright} alt="chevronright" /></div>
                    </div>
                  </a>
                  <a className="dropdown-item">
                    <div className="row">
                      <div className="col-8">Follow User</div>
                      <div className="col-4"><Image src={chevronright} alt="chevronright" /></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-8 p-0">
                    <h5 className="card-title">{item.label}</h5>
                    <div className="card-text fw-bold">{item.price}</div>
                  </div>
                  <div className="col-4 p-0">
                    <div className="row">
                      <div className="col">
                        <a href="#" onClick={() => handleThumbsUpClick(index)}>
                          {thumbsUpClicked[index] ? (
                            <Image src={thumbsupfilled} width="18" alt="thumbsupfilled" />
                          ) : (
                            <Image src={thumbsup} width="18" alt="thumbsup" />
                          )}
                        </a>
                      </div>
                      <div className="col">
                        <a href="#" onClick={() => handleThumbsDownClick(index)}>
                          {thumbsDownClicked[index] ? (
                            <Image src={thumbsdownfilled} width="18" alt="thumbsdownfilled" />
                          ) : (
                            <Image src={thumbsdown} width="18" alt="thumbsdown" />
                          )}
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col custom-font-size-small">{item.score}</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <p className="custom-font-size-small p-0">{item.user}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default GuestHome;

