'use client'

import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowLeft, ArrowRight } from 'react-feather';
import './requestDeletionPage.css'

import image from './slippers.jpg';

const imgStyle = {
    height: '200px',
    width: 'auto',
}

const iconStyle = {
    color: '#514FB5'
}

export default function RequestDeletionPage() {
    return (
        <>
            <Row className='p-3 sticky-top bg-white w-auto'>
                <Col xs='12' lg='12' className='d-flex'>
                    <ArrowLeft />
                    <h1 className='w-100 text-center me-4 fw-medium'>Delete Account</h1>
                </Col>
            </Row>

            <Container>
                <Row className='mt-4 mx-auto rounded d-flex justify-content-center'>
                    <Col xs='12' lg='5' className='d-flex align-self-center justify-content-center'>
                        <Image src={image} style={imgStyle} />
                    </Col>
                </Row>

                <Row xs='12' lg='10' className='mt-4 mx-auto d-flex justify-content-center'>
                    <Col>
                        <h1 className='text-center'> Sorry to see you leave! Want to deactivate your account instead?</h1>
                        <p className='text-center'>This way, your account stays, but everything else gets hidden from other users in the community.</p>               
                    </Col>
                </Row>
            </Container>

            <Row className='pb-3 pt-4 px-2 mx-auto fixed-bottom d-flex justify-content-center'>
                <Col xs='12' lg='5' className=''>
                    <Col>
                        <Row className=''>
                            <button className='w-100 p-2 rounded mb-2'>
                                Deactivate my account
                            </button>
                        </Row>
                    </Col>
                    <Col className='d-flex'>
                        <button id='btn' className='w-100 p-2 rounded fw-medium'>
                            Delete my account anyway
                        </button>
                        <ArrowRight className='mx-3' style ={iconStyle} />
                    </Col>
                </Col>
            </Row>  
        </>
    )
}