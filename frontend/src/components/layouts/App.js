import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/layouts/footer';
import AboutUs from './components/pages/AboutUs';
import Careers from './components/pages/Careers';
import ContactUs from './components/pages/ContactUs';
import HelpCenter from './components/pages/HelpCenter';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfService from './components/pages/TermsOfService';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/about" element={<AboutUs />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/help" element={<HelpCenter />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
