import React from 'react';
import './Enroll.css';

const Enroll = () => {
    return (
        <section id="enroll" className="enroll">
            <div className="container">
                <div className="enroll-content glass-card">
                    <h2 className="section-title">Enroll Now</h2>
                    <p className="enroll-subtitle">Start your journey with us today and secure your spot in the next batch!</p>

                    <div className="enroll-actions">
                        <a href="https://forms.gle/zaUBnDL7NwczbCUV8" target="_blank" rel="noopener noreferrer" className="btn-primary enroll-action-btn">
                            Enroll via Google Forms
                        </a>
                        <a href="https://wa.me/+918072181033" target="_blank" rel="noopener noreferrer" className="btn-outline-teal enroll-action-btn whatsapp">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="action-icon" />
                            WhatsApp Enrollment
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Enroll;
