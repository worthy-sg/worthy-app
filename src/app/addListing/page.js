'use client'

//AddListing.js
import Image from 'next/image';
import Nav from '@/components/Navbar';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useRef, useState } from 'react';

//Icons
import book from '@icons/icon-fa-book-outlined.svg';
import utensils from '@icons/icon-fa-utensils-outlined.svg';
import chevronleft from '@icons/icon-fi-chevron left.svg';
import '@css/AddListing.css'

const containerStyle = {
    width: '100%',
    height: '200px',
    borderRadius: '15px',
};

const center = {
    lat: -34.397,
    lng: 150.644,
};

const AddListing = () => {
  const [FileDrop, setFileDrop] = useState(null);
  const inputRef = useRef(null);

  const handleDragOver = (event) => {
    event.preventDefault();
};

const handleDrop = (event) => {
    event.preventDefault();
    console.log(event);
};

    return (
        <div className="AddListingPageContainer">
            <Nav />
            <div className="row mb-4 mx-auto">
                <div className="col-3 col-md-3 col-lg-3 custom-text-align-center">
                    <a href="/home">
                    <Image src={chevronleft} width="24" alt="chevronleft"/>
                    </a>
                </div>
                <div className="col-6 col-md-6 col-lg-6 display-8 fw-bold custom-text-align-center">
                Add Listing
                </div>
            </div>

            <div className="DragNDropContainer"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}>
                {!FileDrop && (
                    <div>
                        <i className="Image bi bi-image" style={{ fontSize: '30px', paddingTop: '10px' }} onClick={() => inputRef.current.click()}></i>
                        <input
                            type="file"
                            multiple
                            onChange={(event) => setFileDrop(event.target.FileDrop)}
                            hidden
                            ref={inputRef}
                        ></input>
                        <p>Add Photo</p>
                        <p>Add up to 10 images</p>
                    </div>
                )}
            </div>

            <div className="CategoryContainer">
                <h1>Category</h1>
                <div className="BtnArea">
                    <button id="BtnOne" className="image-button">
                        <Image src={book} alt="book"/>
                        Food
                    </button>
                    <button id="BtnTwo" className="image-button">
                        <Image src={utensils} alt="utensils"/>
                        Non-Food
                    </button>
                </div>
            </div>

            <div className="InputContainer">
                <h1>Item Name</h1>
                <p> Include keywords that people often search for when buying buying this item.</p>
                <input />
            </div>

            <div className="DescriptionContainer">
                <h1>Description</h1>
                <p>What makes your item unique? Buyers will only see the first few lines unless they click to see more.</p>
                <textarea />
            </div>

            <div className="ValueContainer">
                <h1>Estimated Value of Item</h1>
                <div className="ValOptions">
                    <button>$10</button>
                    <button>$20</button>
                    <button>$50</button>
                    <button>$100</button>
                    <button>Others</button>
                </div>
            </div>

            <div className="MapContainer">
                <h1>Pickup Location</h1>
                <p>Select a location.</p>
                <div className="MapArea">
                    <LoadScript googleMapsApiKey="AIzaSyD4WNtAN39CEDGpnu36QfDX5IhBRc_TRy4">
                        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                            <Marker position={center} />
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>

            <br></br>
            <br></br>
            
            <div className="Button">
                <button>Button</button>
            </div>
        </div>
    )
}

export default AddListing;