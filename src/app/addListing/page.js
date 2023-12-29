'use client'

import Image from 'next/image';
import Nav from '@/components/Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import { useRef, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

//Icons
import book from '@icons/icon-fa-book-outlined.svg';
import utensils from '@icons/icon-fa-utensils-outlined.svg';
import chevronleft from '@icons/icon-fi-chevron left.svg';
import '@css/addListingPage.css'

const containerStyle = {
    width: '100%',
    height: '200px',
    borderRadius: '15px',
};

const center = {
    lat: -34.397,
    lng: 150.644,
};

const values = ['$10', '$20', '$50', '$100', 'Others'];

export default function AddListingPage() {

    const [FileDrop, setFileDrop] = useState(null);
    const inputRef = useRef(null);

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        console.log(event);
    };

    const [textValue, setTextValue] = useState('');

    const handleTextareaChange = (event) => {
        const value = event.target.value;
        setTextValue(value);
    };

    return (
        <>
            <Row className='p-3 sticky-top bg-white w-auto'>
                <Col xs='12' lg='12' className='d-flex w-100'>
                    <a href="/home">
                    <Image src={chevronleft} width="24" alt="chevronleft"/>
                    </a>
                    <h1 className='w-100 text-center me-4 fw-medium'>Add Listing</h1>
                </Col>
            </Row>

            <Container className="mb-5">
                {/* Drag and drop container; still need some functionality codes */}
                <Row id='DropContainer' className='mt-4  d-flex justify-content-center align-items-center'>
                    <Col xs='11' lg='4' onDragOver={handleDragOver} onDrop={handleDrop} className='DropArea'>
                        {!FileDrop && (
                            <div>
                                <i className='bi bi-image mb-2 mx-auto' size='10' style={{ fontSize: '30px', paddingTop: '10px', strokeWidth:'1' }} strokeWidth='1' onClick={() => inputRef.current.click()} />
                                <input
                                    type="file"
                                    multiple
                                    onChange={(event) => setFileDrop(event.target.FileDrop)}
                                    hidden
                                    ref={inputRef}
                                ></input>
                                <p>Add Photo
                                Add up to 10 images</p>
                            </div>
                        )}
                    </Col>
                </Row>

                <Row className='mt-4 mx-auto d-flex justify-content-center'>
                    <Col xs='12' lg='5'>
                        <h1>Category</h1>
                        <div className='mx-auto d-flex'>                    
                            <button className='image-button d-flex w-100 p-2 border-end-0 rounded-start justify-content-center'>
                                <Image src={book} alt="book" strokeWidth='2' />
                                Food
                            </button>

                            <button className='image-button d-flex w-100 p-2 rounded-end justify-content-center'>
                                <Image src={utensils} alt="utensils" strokeWidth='2'/>
                                Non-Food
                            </button>
                        </div>
                    </Col>
                </Row>

                <Row className='mt-4 mx-auto d-flex justify-content-center'>
                    <Col xs='12' lg='5'>
                    <h1>Item Name</h1>
                    <p> Include keywords that people often search for when buying buying this item.</p>
                        <Row className='mx-auto'>                     
                        <input className='rounded '/>
                        </Row>
                    </Col>
                </Row>

                <Row className='mt-4 mx-auto d-flex justify-content-center'>
                    <Col xs='12' lg='5'>
                    <h1>Description</h1>
                    <p>What makes your item unique? Buyers will only see the first few lines unless they click to see more.</p>
                        <Row className='mx-auto'>                     
                            <textarea 
                                value={textValue}
                                onChange={handleTextareaChange}
                                rows={4} 
                                className='form-control border-secondary-subtle'
                                maxLength={140}
                            />
                            <h5 className='my-2 text-end'>{textValue.length} / 140</h5>
                        </Row>
                    </Col>
                </Row>

                <Row className='mt-4 mx-auto d-flex justify-content-center'>
                    <Col xs='12' lg='5'>
                        <h1>Estimated Value of Item</h1>
                        <div className='d-flex justify-content-between mt-3'>
                            {values.map((value, index) => (
                            <button key={index} className='px-3 py-1 rounded-pill'>{value}</button>
                            ))}
                        </div>
                    </Col>
                </Row>

                <Row id='MapContainer' className='mx-0 mt-4 d-flex justify-content-center'>
                    <Col xs='12' lg='5'>
                        <h1>Pickup Location</h1>
                        <p>Select a location.</p>
                        <div className=''>
                            <LoadScript googleMapsApiKey='AIzaSyD4WNtAN39CEDGpnu36QfDX5IhBRc_TRy4'>
                                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                                    <Marker position={center} />
                                </GoogleMap>
                            </LoadScript>
                        </div>
                    </Col>
                </Row>

                <Row className='pb-3 pt-4 px-2 mx-auto d-flex justify-content-center'>
                    <Col xs='12' lg='5'>
                        <button id='btn' className='w-100 p-2 rounded'>Add New Listing</button>
                    </Col>
                </Row>
            </Container>


        </>
    )
}