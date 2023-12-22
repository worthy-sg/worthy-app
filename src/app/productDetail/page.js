'use client'

import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowLeft, ThumbsDown, ThumbsUp, CornerUpRight} from 'react-feather';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React, { useState } from 'react';
import './productDetailPage.css'

import slippers from './slippers.jpg'

const imgStyle = {
    height: '200px',
}

const iconStyle = {
    color: '#514FB5'
}

const sizing = {
    height: '150px'
}

const containerStyle = {
    width: '100%',
    height: '200px',
    borderRadius: '15px',
};

const center = {
    lat: -34.397,
    lng: 150.644,
};

export default function ProductDetailPage() {
    const [thumbsUpActive, setThumbsUpActive] = useState(false);
    const [thumbsDownActive, setThumbsDownActive] = useState(false);

    const handleThumbsUpClick = () => {
        setThumbsUpActive(!thumbsUpActive);
        if (thumbsDownActive) {
            setThumbsDownActive(false);
        }
    };

    const handleThumbsDownClick = () => {
        setThumbsDownActive(!thumbsDownActive);
        if (thumbsUpActive) {
            setThumbsUpActive(false);
        }
    };

    return (
        <>
            <Row className='p-3 sticky-top bg-white w-auto'>
                <Col className='d-flex'>
                    <ArrowLeft />
                    <h1 className='w-100 text-center me-4 fw-medium'>Item Name</h1>
                </Col>
            </Row>

            <Container>

                <Row className='mt-4 mx-auto rounded'>
                    <Col className='d-flex align-self-center justify-content-center'>
                        <img src={slippers} style={imgStyle} />
                    </Col>
                </Row>

                <Row className='d-flex mt-4 d-flex justify-content-center mx-auto'>
                    <Col xs='12' lg='5' className='d-flex'>
                        <Col className=''>
                            <p>Item Name</p>
                            <p className='fw-bold'>$100</p>
                        </Col>
                    
                
                        <Col className='d-flex justify-content-end'>
                            <ThumbsUp 
                                className={`me-3 ${thumbsUpActive ? 'thumbsUpA' : ''}`}
                                strokeWidth={thumbsUpActive ? 3 : 2}
                                size={thumbsUpActive ? 26 : 24}
                                onClick={handleThumbsUpClick} 
                            />
                            <ThumbsDown 
                                className={thumbsDownActive ? 'thumbsDownA' : ''}
                                strokeWidth={thumbsDownActive ? 3 : 2}
                                size={thumbsDownActive ? 26 : 24}
                                onClick={handleThumbsDownClick} 
                            /> 
                        </Col>
                    </Col>
                </Row>

                <Row className='mt-4 mx-auto d-flex justify-content-center'>
                    <Col xs='12' lg='5'>
                    <h1>Pickup Details</h1>
                    {/* <p></p> */}
                        <Row className='mx-auto'>                     
                        <input className='border-secondary-subtle rounded'/>
                        </Row>
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

                <Row className='mt-4 d-flex justify-content-center mx-auto'>
                    <Col xs='12' lg='5'>
                        <h1>Meet your Seller</h1>

                        <Row className='' style={sizing}>
                            <Col className='d-flex'>
                                <div className='profilePic'>
                                    {/* <img src={img} /> */}
                                    <img src={slippers} />
                                </div>
                            
                                <div className='ms-3 pt-3'>
                                    <h1 className='fw-medium'>Name</h1>

                                    <button className='rounded px-2'>
                                    Text
                                    </button>

                                    <button className='rounded ms-2 px-2'>
                                    Text
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    
                </Row>

            </Container>

            <Row className='pb-3 pt-4 px-2 mx-auto d-flex justify-content-center'>
                <Col xs='12' lg='5' className='d-flex'>
                    <button className='w-50 rounded p-2'>
                        Message
                    </button>

                    <button className='w-50 rounded ms-2 p-2'>
                        Request Item
                    </button>
                    <CornerUpRight className='mx-3 my-2' style ={iconStyle} />
                </Col>
            </Row>  
        </>
    )
}