import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section id="home" className="home">
            <div className="container">
                <div className="home-layout">
                    <div className="home-content">
                        <h1 className="main-title">
                            Learn Today. <br />
                            <span className="accent-text">Code Tomorrow.</span> <br />
                            <span className="secondary-text">Grow Forever.</span>
                        </h1>
                        <p className="hero-desc">
                            Empower your journey at JDKCenter. We bridge the gap between learning and career growth through immersive live training in Java, SQL, and Full Stack technologies. Master industry-ready skills with our expert-led sessions and hands-on projects.
                        </p>
                        <div className="hero-btns">
                            <a href="#courses" className="btn-outline-teal">Course Tour</a>
                            <a href="#contact" className="btn-solid-navy">Contact Us</a>
                        </div>
                    </div>

                    <div className="home-visual">
                        <div className="orbital-system">
                            <div className="central-rhombus"></div>
                            <div className="orbit-line"></div>

                            <div className="floating-item item-1">
                                <div className="item-icon">{"</>"}</div>
                            </div>
                            <div className="floating-item item-2">
                                <div className="item-icon">🌐</div>
                            </div>
                            <div className="floating-item item-3">
                                <div className="item-icon">📟</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
