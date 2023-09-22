// Import necessary React libraries and CSS for styling
import React from 'react';
import '../styles/WelcomePage.css'; // Create a CSS file for styling
import Footer from './Footer';
import Header from './Header';
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import logo from "../images/image3.jpg";
const WelcomePage = () => {
  return (
    <div className="welcome-page">
      {/* <header>
        <h1>Welcome to Your Intranet System</h1>
        <p>Your company's central hub for information and collaboration</p>
      </header> */}
      <header className="header">
      <div className="logo">Your Logo</div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="/">Home</a></li>
          <li className="nav-item"><a href="/about">About</a></li>
          <li className="nav-item"><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
      <main>
      <div className='welc'>
      <h1>Welcome to Your Intranet System</h1>
        <p>Your company's central hub for information and collaboration</p>
      </div>
        <section className="features">
          <div className="feature">
            <h2>Announcements</h2>
            <p>Stay updated with the latest company news and announcements.</p>
          </div>
          <div className="feature">
            <h2>Teams</h2>
            <p>Connect with your colleagues and collaborate in dedicated teams.</p>
          </div>
          <div className="feature">
            <h2>Documents</h2>
            <p>Access and manage important documents and files.</p>
          </div>
        
        </section>
        <div className='images'>
        <div className="image-box">
        <img src={image1} alt="Image 1" />
      </div>
      <div className="image-box">
        <img src={image2} alt="Image 2" />
      </div>
      <div className="image-box">
        <img src={image3} alt="Image 3" />
      </div>

        </div>
      </main>
      <button className="get-started-button">Let's Get Started</button>
      <div><Footer /></div>
      
    </div>
    
  );
 
};


export default WelcomePage;
