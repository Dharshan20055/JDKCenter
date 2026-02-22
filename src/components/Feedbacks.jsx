import React from 'react';
import feedbacksData from '../data/feedbacks.json';
import './Feedbacks.css';

const Feedbacks = () => {
    return (
        <section id="feedbacks" className="feedbacks">
            <div className="container">
                <h2 className="section-title">Feedbacks</h2>
                <div className="feedbacks-grid grid grid-3">
                    {feedbacksData.map(feedback => (
                        <div key={feedback.id} className="feedback-card glass-card">
                            <div className="stars">
                                {[...Array(feedback.rating)].map((_, i) => (
                                    <span key={i} className="star">⭐</span>
                                ))}
                            </div>
                            <p className="feedback-text">"{feedback.feedback}"</p>
                            <h4 className="student-name">- {feedback.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Feedbacks;
