'use client'

import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowLeft } from 'react-feather';
import { useState } from 'react';
import './feedbackPage.css'

export default function FeedbackPage() {
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
                    <h1 className='w-100 text-center me-4 fw-medium'>Feedback</h1>
                </Col>
            </Row>
            
            <Container>
                <Row className='mt-4 mx-auto d-flex justify-content-center'>
                    <Col xs='12' lg='5'>
                        <h1>Feedback Category</h1>
                        <div className='mx-auto'>                    
                            <button className='rounded px-4'>
                                Account
                            </button>

                            <button className='rounded ms-2 px-4'>
                                Other
                            </button>
                        </div>
                    </Col>
                </Row>

                <Row id='DescriptionContainer' className='mt-4 mx-auto d-flex justify-content-center'>
                    <Col xs='12' lg='5'>
                        <h1>Feedback Content</h1>
                        <p>Please enter any problems or suggestions.</p>
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
            </Container>

            <Row className='pb-3 pt-4 px-2 mx-auto fixed-bottom d-flex justify-content-center'>
                <Col xs='12' lg='5'>
                    <button className='w-100 p-2 rounded'>Submit</button>
                </Col>
            </Row>
        </>
    )
}