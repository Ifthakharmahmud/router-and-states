import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Serviceitem from '../Serviceitem/Serviceitem';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (

        <Container>
            <h1 className="text-center py-3">Our Service</h1>
            <Row xs={1} md={2} lg={4} className="g-4 py-4">
                {
                    services.map(service => <Serviceitem key={service.id} service={service}></Serviceitem>)
                }
            </Row>
        </Container>

    );
};

export default Services;