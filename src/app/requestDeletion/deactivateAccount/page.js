'use client'

import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowLeft } from 'react-feather';
import { useState } from 'react';
import './deactivateAccountPage.css'

export default function deactivateAccountPage() {
    const [textValue, setTextValue] = useState('');

    const handleTextareaChange = (event) => {
        const value = event.target.value;
        setTextValue(value);
    };

    return (
        <>
            <Row className='p-3 sticky-top bg-white w-auto'>
                <Col xs='12' lg='12' className='d-flex'>
                    <ArrowLeft />
                    <h1 className='w-100 text-center me-4 fw-medium'>Deactivate Account</h1>
                </Col>
            </Row>
            
            <Container>
                <Row className='mt-4 mx-auto d-flex justify-content-center'>
                    <Col xs='12' lg='5' className='ms-3'>
                        <h1>Reason for deactivating my account</h1>
                        <p></p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                    </Col>

                    <Row className='mt-2 mx-auto d-flex justify-content-center'>
                        <Col xs='12' lg='5'>
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
                </Row>
            </Container>

            <Row className='pb-3 pt-4 px-2 mx-auto fixed-bottom d-flex justify-content-center'>
                <Col xs='12' lg='5'>
                    <button className='w-100 p-2 rounded'>Deactivate my account</button>
                </Col>
            </Row>
        </>
    )
}