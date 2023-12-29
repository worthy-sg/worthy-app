'use client'

import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowLeft, ArrowRight } from 'react-feather';
import './messagesPage.css'

import image from './slippers.jpg';

import messageList from './messageList.json';
const info = messageList.listing;

const categories = ['All', 'Donating', 'Requesting', 'Unread', 'Others'];

const sizing = {
    width: '120px',
    height: '120px',
    borderRadius: '10px',
    overflow: 'hidden'
}

export default function messagesPage() {
    return (
        <>
            <Row className='p-3 sticky-top bg-white w-auto'>
                <Col xs='12' lg='12' className='d-flex'>
                    <ArrowLeft />
                    <h1 className='w-100 text-center me-4 fw-medium'>Messages</h1>
                </Col>
            </Row>
            
            <Container>
                <Row className='mb-4'>
                    <Row className='mt-2 mx-auto d-flex justify-content-center'>
                        <Col xs='11' lg='4'>
                            <div className="scrollable-categories-container custom-text-align-center">
                                {categories.map((category, index) => (
                                    <button key={index} className='px-4 ms-0 me-4 py-1 rounded-pill'>{category}</button>
                                ))}
                            </div>
                        </Col>
                    </Row>

                    <Row className='pt-4 d-flex justify-content-center mx-auto'>
                        {info.map((item,index) => (
                            <div className=" d-flex justify-content-center mx-auto" key={index}>
                                <Col xs='11' lg='4'>
                                    <Row className=''>
                                        <Col className='d-flex'>
                                            <div className='w-100 d-flex'>
                                                <div>
                                                    <Image src={image} style={sizing} />
                                                </div>
                                                
                                                <div className='ms-4 my-2 d-flex flex-column'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='profilePic'>
                                                        <Image src={image} />
                                                        </div>
                                                        <h1 className='ms-3 fw-normal'>{item.name}</h1>
                                                    </div>

                                                    <p className='fw-medium pt-3 ps-1'>{item.message}</p>
                                                    <h5 className='fw-medium ps-1'>{item.duration} days ago</h5>
                                                </div>
                                            </div>
                        
                                            <div className=' w-25 d-flex align-items-center justify-content-end r-0'> 
                                                <ArrowRight/>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>   
                            </div>
                        ))}
                    </Row>
                </Row>
            </Container>
        </>
    )
}

