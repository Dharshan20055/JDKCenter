import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2 className="footer-logo">JDK<span>Center</span></h2>
                        <p className="footer-tagline">Learn Today. Code Tomorrow. Grow Forever.</p>
                    </div>

                    <div className="footer-nav">
                        <a href="#home">Home</a>
                        <a href="#about">About Us</a>
                        <a href="#courses">Courses</a>
                        <a href="#services">Services</a>
                        <a href="#feedbacks">Feedbacks</a>
                        <a href="#enroll">Enroll</a>
                        <a href="#certification">Certification</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="footer-contact">
                        <div className="contact-item">
                            <a href="tel:+918072181033">
                                <img src="https://cdn.jsdelivr.net/gh/lucide-icons/lucide@latest/icons/phone.svg" alt="Phone" className="footer-icon" />
                                +91 8072181033
                            </a>
                        </div>
                        <div className="contact-item">
                            <a href="https://wa.me/+918072181033" target="_blank" rel="noopener noreferrer">
                                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/whatsapp.svg" alt="WhatsApp" className="footer-icon" />
                                +91 8072181033
                            </a>
                        </div>
                        <div className="contact-item">
                            <a href="mailto:jdkcenter05@gmail.com">
                                <img src="https://cdn.jsdelivr.net/gh/lucide-icons/lucide@latest/icons/mail.svg" alt="Email" className="footer-icon" />
                                jdkcenter05@gmail.com
                            </a>
                        </div>
                        <div className="contact-item">
                            <a href="https://www.instagram.com/jdkcenter/" target="_blank" rel="noopener noreferrer">
                                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/instagram.svg" alt="Instagram" className="footer-icon" />
                                @jdkcenter
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} JDKCenter. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
