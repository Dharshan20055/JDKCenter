import React, { useState, useEffect } from 'react';
import coursesData from '../data/courses.json';
import './Courses.css';

const Courses = () => {
    const [filter, setFilter] = useState('All');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [filter]);

    const categories = ['All', 'Programming Languages', 'Frontend', 'Fullstack'];

    const filteredCourses = (filter === 'All'
        ? coursesData
        : coursesData.filter(course => course.category === filter)
    ).sort((a, b) => a.title.localeCompare(b.title));

    return (
        <section id="courses" className="courses">
            <div className="container">
                <h2 className="section-title">Our Courses</h2>

                <div className="filter-buttons">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => {
                                setFilter(cat);
                                setIsLoading(true);
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="courses-grid">
                    {filteredCourses.map(course => (
                        <div key={course.id} className={`course-card glass-card ${isLoading ? 'is-loading' : 'is-loaded'}`}>
                            {isLoading && (
                                <div className="card-loader-overlay">
                                    <div className="shimmer"></div>
                                </div>
                            )}
                            <div className="course-header">
                                <span className="course-icon">
                                    {course.logo.startsWith('http') ? (
                                        <img
                                            src={course.logo}
                                            alt={course.title}
                                            className={`logo-img ${(course.title.toLowerCase().includes('github') || course.title.toLowerCase().includes('jdbc')) ? 'invert-white' : ''}`}
                                        />
                                    ) : (
                                        course.logo
                                    )}
                                </span>
                                <span className="course-tag">{course.category}</span>
                            </div>
                            <h3>{course.title}</h3>
                            <div className="course-meta">
                                <span className="course-duration">⏱ {course.duration}</span>
                            </div>
                            <p className="course-desc">{course.description}</p>
                            <a href={course.enrollPath} className="btn-primary enroll-btn">Enroll Now</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
