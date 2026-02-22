import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Services from './components/Services';
import Feedbacks from './components/Feedbacks';
import Enroll from './components/Enroll';
import Certification from './components/Certification';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <About />
        <Courses />
        <Services />
        <Feedbacks />
        <Enroll />
        <Certification />
      </main>
      <Footer />
    </div>
  );
}

export default App;
