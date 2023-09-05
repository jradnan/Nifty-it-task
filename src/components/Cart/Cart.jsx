import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let total = 0;
   
    for(const product of cart){
        total += product.price;
      
    }
    
    const grandTotal = total;
    return (
        <div className='cart p-[24px] sticky top-0 bg-red-200'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <h6 style={{fontSize:"21px", fontWeight:"400"}}>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;