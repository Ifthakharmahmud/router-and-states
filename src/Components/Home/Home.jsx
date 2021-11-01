import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Serviceitem from '../Serviceitem/Serviceitem';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./servicehome.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div>
            {/* Header Banner   */}
            <Container fluid>
               <div className="header-banner">
                   <div className="banner-content">
                       <h2>Welcome to our E-Larning Platform</h2>
                       <p>Saepe velit rem atque. Dolorum harum eaque est fuga voluptatibus dicta amet!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe velit rem atque. Dolorum harum eaque est fuga voluptatibus dicta amet!</p>
                   </div>
               </div>
            </Container>

            
            <Container>
                <h1 className="text-center py-3">Our Service</h1>
                <Row xs={1} md={2} lg={4} className="g-4 py-4">
                    {
                        services.map(service => <Serviceitem key={service.id} service={service}></Serviceitem>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;