import React, { useState } from 'react';

const Discounts = ({ cartTotal, applyDiscount }) => {
    const [discountCode, setDiscountCode] = useState('');
    const [message, setMessage] = useState('');

    const validDiscounts = {
        SAVE10: 0.1, // 10% off
        WELCOME15: 0.15, // 15% off
    };

    const handleApplyDiscount = () => {
        if (validDiscounts[discountCode]) {
            const discount = validDiscounts[discountCode];
            applyDiscount(discount);
            setMessage(`Discount applied: ${discount * 100}% off!`);
        } else {
            setMessage('Invalid discount code. Please try again.');
        }
    };

    const styles = {
        container: {
            marginTop: '20px',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            backgroundColor: '#f9f9f9',
            textAlign: 'center',
        },
        heading: {
            fontSize: '20px',
            marginBottom: '10px',
        },
        input: {
            width: '200px',
            padding: '8px',
            marginRight: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
        },
        button: {
            padding: '8px 12px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
        buttonHover: {
            backgroundColor: '#0056b3',
        },
        message: {
            marginTop: '10px',
            color: 'green',
            fontSize: '14px',
        },
    };

    return (
        <div style={styles.container}>
            <h3 style={styles.heading}>Apply Discount Code</h3>
            <input
                style={styles.input}
                type="text"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                placeholder="Enter discount code"
            />
            <button
                style={styles.button}
                onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                onClick={handleApplyDiscount}
            >
                Apply
            </button>
            <p style={styles.message}>{message}</p>
        </div>
    );
};

export default Discounts;
