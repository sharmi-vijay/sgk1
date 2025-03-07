import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Sgk Fabrics</h4>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/careers">Careers</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="/help">Help Center</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <ul className="social-links">
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={24} />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={24} />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={24} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Sgk Fabrics. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
