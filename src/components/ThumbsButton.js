// ThumbsButtons.js
import React, { useState } from 'react';
import Image from 'next/image';
import thumbsup from '@icons/icon-bs-handthumbsup-outlined.svg';
import thumbsupfilled from '@icons/icon-bs-handthumbsup-filled.svg';
import thumbsdown from '@icons/icon-bs-handthumbsdown-outlined.svg';
import thumbsdownfilled from '@icons/icon-bs-handthumbsdown-filled.svg';

const ThumbsButtons = () => {
  const [thumbsUpClicked, setThumbsUpClicked] = useState(false);
  const [thumbsDownClicked, setThumbsDownClicked] = useState(false);

  const handleThumbsUpClick = () => {
    setThumbsUpClicked(!thumbsUpClicked);
    if (thumbsDownClicked) {
      setThumbsDownClicked(false);
    }
  };

  const handleThumbsDownClick = () => {
    setThumbsDownClicked(!thumbsDownClicked);
    if (thumbsUpClicked) {
      setThumbsUpClicked(false);
    }
  };

  return (
    <div className="row">
      <div className="col-5">
        <a onClick={handleThumbsUpClick}>
          {thumbsUpClicked ? (
            <Image src={thumbsupfilled} width={24} alt="thumbsupfilled" />
          ) : (
            <Image src={thumbsup} width={24} alt="thumbsup" />
          )}
        </a>
      </div>
      <div className="col">
        <a onClick={handleThumbsDownClick}>
          {thumbsDownClicked ? (
            <Image src={thumbsdownfilled} width={24} alt="thumbsdownfilled" />
          ) : (
            <Image src={thumbsdown} width={24} alt="thumbsdown" />
          )}
        </a>
      </div>
    </div>
  );
};

export default ThumbsButtons;
