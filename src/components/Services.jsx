import React from 'react';
import servicesData from '../data/services.json';
import './Services.css';

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <h2 className="section-title">Our Services</h2>
                <div className="services-grid grid">
                    {servicesData.map(service => (
                        <div key={service.id} className="service-card glass-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
