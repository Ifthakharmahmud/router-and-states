/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';
import './Contact.css';

const Contact = () => (
    <Container>
        <h1 className="text-center py-3">Contact Us</h1>
        
            <div className="contact-form">
                <Form>
                    <h2>Email Us</h2>
                    <Form.Group className="mb-3">
                        <Form.Label> Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Label>Message</Form.Label>
                    <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
                        <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '150px' }} />
                    </FloatingLabel>
                    <Button variant="primary" type="submit"> Submit </Button>
                </Form>

            </div>

            

        
    </Container>


);

export default Contact;