import React from 'react';

const ContactUs = () => {
    const contactDetails = {
        location: "No.9, 6th cross college road, Opp. Govt Boys hostel, Muthusamy Street, Odakkadu, Tirupur.",
        email: "sgkfabricssg@gmail.com",
        phone: "9842846842",
        mapLink: "https://www.google.com/maps?q=123+Fashion+Street,+New+York,+NY",
    };

    const styles = {
        container: {
            padding: '20px',
            backgroundColor: '#f8f9fa',
            border: '1px solid #e0e0e0',
            borderRadius: '5px',
            margin: '20px auto',
            maxWidth: '600px',
            textAlign: 'left',
        },
        heading: {
            textAlign: 'center',
            marginBottom: '20px',
            color: '#333',
        },
        details: {
            margin: '10px 0',
            color: '#555',
            fontSize: '16px',
        },
        link: {
            color: '#007bff',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
        },
        linkHover: {
            color: '#0056b3',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Contact Us</h2>
            <div>
                <p style={styles.details}>
                    <strong>Location:</strong> {contactDetails.location}{' '}
                    <a
                        href={contactDetails.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.link}
                    >
                        (View on Map)
                    </a>
                </p>
                <p style={styles.details}>
                    <strong>Email:</strong>{' '}
                    <a
                        href={`mailto:${contactDetails.email}`}
                        style={styles.link}
                    >
                        {contactDetails.email}
                    </a>
                </p>
                <p style={styles.details}>
                    <strong>Phone:</strong>{' '}
                    <a
                        href={`tel:${contactDetails.phone}`}
                        style={styles.link}
                    >
                        {contactDetails.phone}
                    </a>
                </p>
            </div>
        </div>
    );
};

export default ContactUs;
