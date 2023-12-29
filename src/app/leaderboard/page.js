//Leaderboard.js
import React from 'react';
import Image from 'next/image';
import Nav from '@/components/Navbar';

import chevronleft from '@icons/icon-fi-chevron left.svg';
import usersData from '@json/userData.json';

const userData = usersData.userData;

function Leaderboard() { 
  const topThreeUsers = userData.slice(0, 3);
  const otherUsers = userData.slice(3);

  return (
      <main className="container">
        <Nav />
        <div className="row mt-4 mb-5 mx-auto">
            <div className="col-3 col-md-3 col-lg-3 custom-text-align-center">
                <a href="/home">
                <Image src={chevronleft} width="24" alt="chevronleft"/>
                </a>
            </div>
            <div className="col-6 col-md-6 col-lg-6 display-8 fw-bold custom-text-align-center">
            Leaderboard
            </div>
        </div>
        {/*
        <div className="row col-11 mx-auto">
          {topThreeUsers.map((user, index) => (
            <div
              key={index}
              className={`col-4 col-md-4 col-lg-4 ${index === 0 ? '' : 'mt-5'}`}
              style={{ order: index === 1 ? -1 : 0 }} // Swap position
            >
              <div className="text-center">
                <p>{user.name}</p>
                <Image src={user.profileImage} width={100} height={100} className="img-fluid" alt={`Profile ${index + 1}`} />
                <p>
                  <i className="bi-solid-star"></i>
                  {user.score}
                </p>
              </div>
            </div>
          ))}
        </div>
          */}
        
        {/* Filter Tab  */}
        <div className="row row-cols-1 row-cols-sm-10 row-cols-md-12 custom-tab-container mb-3">
          <div className="col-6 col-sm-6 custom-tab">
              <div className="btn p-0 pb-2">
              My Ranking (Lord/Noble Lady)
              </div>
          </div>
          <div className="col-6 col-sm-6 custom-tab">
              <div className="btn p-0 pb-2">
              Global
              </div>
          </div>
        </div>

        {userData.map((user, index) => (
          <div key={index} className="row col-12 mx-auto">
            <div className="col-2 col-md-2 col-lg-2">
              <p>{`#${index + 1 }`}</p>
            </div>
            <div className="col-8 col-md-8 col-lg-8">
              <a href="/leaderboard/profile" className="text-secondary ft-5 custom-link"><p>{user.name}</p></a>
            </div>
            <div className="col-2 col-md-2 col-lg-2">
              <p>{user.score}</p>
            </div>
          </div>
        ))}
      </main>
  );
}

export default Leaderboard;
