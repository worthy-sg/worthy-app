// Dropdown.js
import React from 'react';
import Image from 'next/image';
import chevronright from '@icons/icon-fi-chevron right.svg';

const Dropdown = ({ isOpen }) => {
  return (
    <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
      <a className="dropdown-item">
        <div className="row">
          <div className="col-8">Report Item</div>
          <div className="col-4">
            <Image src={chevronright} alt="chevronright" />
          </div>
        </div>
      </a>
      <a className="dropdown-item">
        <div className="row">
          <div className="col-8">Follow User</div>
          <div className="col-4">
            <Image src={chevronright} alt="chevronright" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Dropdown;
