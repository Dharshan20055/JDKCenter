import React from 'react';
import './Certification.css';
import certificateImg from '../assets/images/certificate.jpg';

const Certification = () => {

    return (
        <section id="certification" className="certification">
            <div className="container">
                <div className="certification-container">
                    <div className="certification-text">
                        <h2 className="section-title">Get Certified</h2>
                        <p className="certification-desc">
                            This is a proof of upskilling which can be used in the skills section of your resume to showcase your technical expertise and dedication.
                        </p>
                    </div>

                    <div className="certificate-wrapper">
                        <div className="certificate-display glass-card">
                            <img
                                src={certificateImg}
                                alt="JDKCenter Certificate"
                                className="certificate-img"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.classList.add('no-image');
                                }}
                            />
                            <div className="certificate-overlay">
                                <span>Official Certification</span>
                            </div>
                            <div className="certificate-placeholder">
                                <p>Certificate Preview</p>
                                <span>(certificate.jpg)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certification;
