import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzon from '../Qzon/Qzon';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h2>Login With</h2>
            <Button className='mb-2' variant="outline-primary"><FaGoogle />Login with Google</Button>
            <Button variant="outline-secondary"><FaGithub />Login with Github</Button>


            <div>
                <h4 className='mt-5'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebookF />Facbook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter />Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram />Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzon></Qzon>

            <div style={{
                position: 'relative'
            }}>
                <img src={bg} alt="" />
                <div style={{
                    position: 'absolute',
                    inset: 40,
                    textAlign: 'center',
                    color: 'white'
                }}>
                    <h1>Create an Amazing Newspaper</h1>
                    <p className='my-5'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;