import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/components/Navbar';

import profileImage from '@images/profile_img.png';
import slipper from '@images/item_slipper.png';
import bicycle from '@images/item_bicycle.png';
import profileheader from '@json/profileheader.json';
import chevronleft from '@icons/icon-fi-chevron left.svg';
import mylisting from '@json/mylisting.json';

const data1 = mylisting.listing;

function Profile() {
  return (
    <main className="container">
        <Nav />
        <div className="row mt-4 mb-4 mx-auto">     
            <div className="col-3 col-md-3 col-lg-3 custom-text-align-center">
                <a href="/home">
                <Image src={chevronleft} width="24" alt="chevronleft"/>
                </a>
            </div>
            <div className="col-6 col-md-6 col-lg-6 display-8 fw-bold custom-text-align-center">
            Profile
            </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-12 row-cols-md-2 mb-3">
            <div className="col-3">
            <Image src={profileImage} alt="Profile" className="img-fluid" />
            </div>
            <div className="col">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
                <div className="col-3">
                <div>
                    <label className="text-secondary fw-bold ft-5 mb-0">{profileheader.Supporting}</label>
                </div>
                <div>
                    <label className="text-secondary ft-5">Supporting</label>
                </div>
                <div>
                    <label className="text-secondary fw-bold ft-5 mb-0">{profileheader.Listing}</label>
                </div>
                <div>
                    <label className="text-secondary ft-5">Listing</label>
                </div>
                </div>
                <div className="col-3">
                <div>
                    <label className="text-secondary fw-bold ft-5 mb-0">{profileheader.Supporter}</label>
                </div>
                <div>
                    <label className="text-secondary ft-5">Supporter</label>
                </div>
                <div>
                    <label className="text-secondary fw-bold ft-5 mb-0">{profileheader.Coins}</label>
                </div>
                <div>
                    <label className="text-secondary ft-5">Coins</label>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-12 row-cols-md-1">
            <div className="col-sm-12">
            <button className="btn btn-primary w-50 custom-btn">
                <Link href="/edit-profile">
                Edit Profile
                </Link>
            </button>
            </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-12 row-cols-md-2 mb-3">
            <div className="col-6">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
                {data1.map((data, index) => (
                <div className="col-6" key={index}>
                    <div>
                    <div className="card shadow-sm">
                        <Image src={(data.label === "Slipper") ? slipper : bicycle} alt="Products" width={100} height={100} />
                    </div>
                    <div className="card-body">
                        <p className="card-text fw-bold">{data.label}</p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
    </main>
  );
}

export default Profile;
