import React, { useState } from 'react';
import Discounts from './Discounts';
import CheckoutSteps from './CheckoutSteps'; // Import CheckoutSteps

const Checkout = () => {
    const [cartTotal, setCartTotal] = useState(1000); // Example cart total in ₹
    const [discountValue, setDiscountValue] = useState(0);

    const applyDiscount = (discount) => {
        setDiscountValue(discount);
    };

    const finalTotal = cartTotal - cartTotal * discountValue;

    return (
        <div>
            {/* Render CheckoutSteps with appropriate progress */}
            <CheckoutSteps 
                shipping={true} 
                confirmOrder={true} 
                discount={true} 
                payment={false} 
            />

            <h2>Checkout</h2>
            <p>Cart Total: ₹{cartTotal.toFixed(2)}</p>
            <Discounts cartTotal={cartTotal} applyDiscount={applyDiscount} />
            <p>Discount: {discountValue * 100}%</p>
            <p>Final Total: ₹{finalTotal.toFixed(2)}</p>
        </div>
    );
};

export default Checkout;
