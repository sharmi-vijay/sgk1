import React from 'react';

const AboutUs = () => {
    return (
        <div className="flex flex-col md:flex-row items-center bg-gray-100 p-6 rounded-2xl shadow-lg">
            {/* Image Section */}
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <img 
                    src="https://via.placeholder.com/500" 
                    alt="About Us"
                    className="w-full h-auto rounded-lg shadow-md"
                />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 md:pl-6">
                <h1 className="text-3xl font-bold mb-4 text-blue-700">About Us</h1>
                <p className="text-gray-700 text-lg">
                    Welcome to <strong>Sgk Fabrics</strong>! We are committed to delivering the best products and services. 
                    Our mission is to innovate and provide solutions that make your life easier. With a focus on quality, 
                    creativity, and customer satisfaction, we strive to exceed expectations.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
