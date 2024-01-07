'use client'

import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowLeft, ArrowRight } from 'react-feather';
import './noMessagesPage.css'

import image from './bored.png';

const categories = ['All', 'Donating', 'Requesting', 'Unread', 'Others'];

const sizing = {
    width: '300px',
    height: 'auto',
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

                    <Row className='justify-content-center mx-auto'>
                        <div className='d-flex justify-content-center'>
                            <Image src={image} style={sizing}/>
                        </div>          
                        <div className='d-flex justify-content-center pt-3'>
                        </div>
                    </Row>
                </Row>
            </Container>
        </>
    )
}

