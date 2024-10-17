import React from 'react';
import './styles/App.css';
import useImageLoader from './hooks/imageLoader';

const Navbar = ({ logoSrc }) => (
  <header>
    <div className="navbar">
      <a href="/">
        {logoSrc && <img src={logoSrc} alt='Company Logo' />}
      </a>
      <nav>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#booking" className="btn-book">Book Now</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section id="hero">
    <div className="hero-content">
      <h2>Your Trusted Car Mechanic</h2>
      <p>We keep your car running like new.</p>
      <a href="#services" className="cta">Our Services</a>
      <div className="car-logo-slider">
        <div className="car-logo-track">
          <img src='../public/resources/logos/bmw-logo.png' alt="BMW Logo" />
          <img src='../public/resources/logos/mercedes-logo.png' alt="Mercedes Logo" />
          <img src='../public/resources/logos/audi-logo.png' alt="Audi Logo" />
          <img src='../public/resources/logos/tesla-logo.png' alt="Tesla Logo" />
          <img src='../public/resources/logos/ford-logo.png' alt="Ford Logo" />
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services">
    <h2>Our Services</h2>
    <div className="service-list">
      <div className="service-item">
        <h3>Engine Repair</h3>
        <p>Complete engine diagnostics and repairs.</p>
      </div>
      <div className="service-item">
        <h3>Tire Replacement</h3>
        <p>Top-quality tires for all vehicle types.</p>
      </div>
      <div className="service-item">
        <h3>Oil Change</h3>
        <p>Quick and efficient oil change services.</p>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about">
    <h2>About Us</h2>
    <p>We are a team of experienced mechanics who are passionate about keeping your car in top shape.</p>
  </section>
);

const Contact = () => (
  <section id="contact">
    <h2>Contact Us</h2>
    <form id="contact-form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
      <button type="submit" className="btn-submit">Send</button>
    </form>
  </section>
);

const Footer = () => (
  <footer>
    <p>&copy; 2024 Sandvikensautomotive. All rights reserved.</p>
  </footer>
);

const App = () => {
  const logoSrc = useImageLoader('/resources/SandvikensautomotiveLogo.png');

  return (
    <>
      <Navbar logoSrc={logoSrc} />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
