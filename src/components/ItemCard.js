// Card.js
import React, { useState } from 'react';
import Image from 'next/image';
import dots from '@icons/icon-bs-ThreeDotsVertical.svg';
import Dropdown from '@/components/Dropdown';
import ThumbsButtons from '@/components/ThumbsButton';

const Card = ({ item, index }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="card mb-3 border-0">
      <Image src={item.image} width={240} height={240} alt={item.label} className="card-img-top img-fluid" />
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
            <div className="col-8" style={{ paddingRight: '0' }}>
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
        <div className="row">
            <p className="custom-font-size-small">{item.user}</p>
        </div>     
      </div>
    </div>
  );
};

export default Card;
