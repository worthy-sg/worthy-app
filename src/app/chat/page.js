'use client'

import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowLeft } from 'react-feather';
import { useState } from 'react';
import './chatPage.css';

export default function ChatPage() {

    // USER STATUS ---

    // const [userStatus, setUserStatus] = useState(''); 

    // const setUserTyping = () => {
    //     setUserStatus('typing...');
    // };

    // const setUserActive = () => {
    //     setUserStatus('active 1 hr ago');
    // };

    // MESSAGING ---

    const [message, setMessage] = useState('');

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    // const [image, setImage] = useState(null); 

    // const handleImageChange = (e) => {
    //     const selectedImage = e.target.files[0];
    //     setImage(selectedImage);
    // };

    const [messageList, setMessageList] = useState([]);

    const sendMessage = () => {

        setMessage('');
        // setImage(null);

        if (message.trim() !== '') {
            const currentTime = new Date().toLocaleTimeString();
            setMessageList([...messageList, { content: message, timestamp: currentTime }]);
            setMessage('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    };

    // TIMESTAMP ---

    const [clickedIndex, setClickedIndex] = useState(-1);

    const [showTimestamp, setShowTimestamp] = useState({
        display: 'none',
        top: 0,
        left: 0,
        content: '',
        index: -1,
    })

    const showMessageTimestamp = (event, timestamp, index) => {
        setShowTimestamp({
            display: 'block',
            top: event.clientY - 25 + 'px',
            left: event.clientX + 'px',
            content: timestamp,
            index: index,
        });
    };

    const handleClickShowTimestamp = (event, timestamp, index) => {
        // prevent other events from being triggered
        event.stopPropagation();

        // const rect = event.target.getBoundingClientRect();

        if (clickedIndex === index) {
            setShowTimestamp(prevState => ({
                ...prevState,
                display: prevState.display === 'none' ? 'block' : 'none',
            }));
        } else {
            setShowTimestamp({
                display: 'block',
                content: timestamp,
                index: index,
            });
            setClickedIndex(index);
        }
    };

    return (
        <>
            <Row className='p-3 sticky-top bg-white w-auto'>
                <Col xs='12' lg='12' className='d-flex'>
                    <ArrowLeft />
                    <div className='mx-auto'>
                        <h1 className='w-100 text-center me-4 fw-medium'>User's Name</h1>

                        {/* Buttons to simulate status change, testing purposes */}
                        {/* <h5 className='text-center'>{userStatus}</h5>
                        <button onClick={setUserTyping}>Set Typing</button>
                        <button onClick={setUserActive}>Set Active</button> */}

                        <h5 className='text-center'>Typing...</h5>
                    </div>
                </Col>
            </Row>

            <Container>
                <Row className='messaging justify-content-center align-items-center'>
                    <Col xs='11' lg='6' className=''>
                        <ul className={`messages`}>
                            {messageList?.map((msg, index) => (
                                <li
                                    key={index}
                                    className="message-bubble py-2 px-3 my-1 rounded-pill"
                                    onClick={(e) => handleClickShowTimestamp(e, msg.timestamp, index)}
                                >
                                    <div className="message-content">
                                        {msg.content}
                                        <span
                                            className="timestamp"
                                            style={{
                                                display: index === showTimestamp.index ? showTimestamp.display : 'none',
                                            }}
                                        >
                                            {showTimestamp.content}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>

                <Row className='mt-4 mx-auto d-flex justify-content-center fixed-bottom'>
                    <Col xs='12' lg='5'>
                        <form className='compose py-2'>
                            <textarea
                                className='form-control rounded-pill my-3 w-100'
                                type="text"
                                placeholder="Type a message"
                                value={message}
                                onChange={handleMessageChange}
                                onKeyPress={handleKeyPress}
                            ></textarea>

                            {/* <label htmlFor="fileInput" className="file-input-button">
                                    Upload Image
                                </label> */}
                            {/* <input 
                                    id="fileInput"
                                    type="file" 
                                    accept="image/*" 
                                    onChange={handleImageChange} 
                                    style={{ display: 'none' }}
                                /> */}
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
