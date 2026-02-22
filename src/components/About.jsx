import React from 'react';
import foundersData from '../data/founders.json';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Us</h2>
                <div className="about-intro glass-card">
                    <p>
                        JDKCenter is an online technical training platform focused on building strong programming foundations
                        and making students job-ready through practical learning. We believe in learning by doing and
                        provide a supportive environment for aspiring developers.
                    </p>
                </div>

                <div className="founders-grid grid grid-3">
                    {foundersData.map((founder) => (
                        <div key={founder.id} className="founder-card glass-card">
                            <div className="founder-info">
                                <h3>{founder.name}</h3>
                                <span className="founder-role">{founder.role}</span>
                                <p>{founder.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
