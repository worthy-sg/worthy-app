// Card.js
import React, { useState } from 'react';
import Image from 'next/image';
import profile from '@images/profile_img.png'
import dots from '@icons/icon-bs-ThreeDotsVertical.svg';
import Dropdown from '@/components/Dropdown';
import ThumbsButtons from '@/components/ThumbsButton';

const Card = ({ item, index }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="item-block">
          <Image className="custom-profile img-fluid" src={profile} alt="user"/>
          <span><strong>{item.user}</strong></span>
      </div>
      <div className="card border-0">
      <Image src={item.image} width={240} height={240} alt={item.label} className="card-img-top img-fluid" />
      {/* Icon overlay */}
      <a onClick={handleDropdownToggle}>
      <div className="map-overlay">
        <i className="bi bi-geo-alt-fill custom-icon"></i>
        80m
      </div>
      </a>
      {/* Icon overlay */}
      <div className="icon-overlay">
        {/* Dropdown */}
        <a onClick={handleDropdownToggle}>
          <Image src={dots} alt="dots" />
        </a>
        <Dropdown isOpen={isDropdownOpen} />
      </div>
      <div className="card-body p-0 mt-3">
          <div className="row">
              <div className="col-8 pr-0">
                  <h5 className="card-title">{item.label}</h5>
                  <div className="card-text fw-bold">{item.price}</div>
              </div>
              <div className="col p-0">
                  <ThumbsButtons />
                  <div className="row">
                      <div className="col custom-font-size-small">{item.score}</div>
                  </div>
              </div> 
          </div>   
      </div>
      </div>
    </div>
    
  );
};

export default Card;
