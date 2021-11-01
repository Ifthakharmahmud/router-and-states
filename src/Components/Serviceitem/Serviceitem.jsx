import React from 'react';
import { Badge, Button, Card, Col } from 'react-bootstrap';
import './Serviceitem.css';

const Serviceitem = (props) => {
    const { title, img, description, price } = props.service;

    return (
        <Col>
            <Card className="home-card">
                <Card.Img variant="top" src={img} className="card-img" />
                <Card.Body>
                    <Card.Title className="fw-bold">{title}</Card.Title>
                    <Card.Text>{description.slice(0, 200)}</Card.Text>
                    <Button variant="info">  Price: <Badge bg="primary">  {price} </Badge> TK  </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Serviceitem;