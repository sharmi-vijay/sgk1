import React, { useState } from 'react';

const AdminDiscounts = () => {
    const [discounts, setDiscounts] = useState([
        { code: 'SAVE10', value: 0.1 },
        { code: 'WELCOME15', value: 0.15 },
    ]);
    const [newCode, setNewCode] = useState('');
    const [newValue, setNewValue] = useState('');

    const handleAddDiscount = () => {
        if (!newCode || !newValue || isNaN(parseFloat(newValue))) {
            alert('Please enter a valid discount code and value.');
            return;
        }

        if (discounts.some((discount) => discount.code === newCode)) {
            alert('Discount code already exists.');
            return;
        }

        setDiscounts([...discounts, { code: newCode, value: parseFloat(newValue) }]);
        setNewCode('');
        setNewValue('');
    };

    const handleDeleteDiscount = (code) => {
        setDiscounts(discounts.filter((discount) => discount.code !== code));
    };

    return (
        <div>
            <h3>Manage Discounts</h3>
            <div>
                <input
                    type="text"
                    placeholder="Discount Code"
                    value={newCode}
                    onChange={(e) => setNewCode(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Discount Value (e.g., 0.1 for 10%)"
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value ? parseFloat(e.target.value) : '')}
                />
                <button onClick={handleAddDiscount}>Add Discount</button>
            </div>
            <ul>
                {discounts.map((discount) => (
                    <li key={discount.code}>
                        {discount.code} - {discount.value * 100}%{' '}
                        <button onClick={() => handleDeleteDiscount(discount.code)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDiscounts;
