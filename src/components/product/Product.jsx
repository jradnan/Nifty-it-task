import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = (props) => {

    const { name, price, img, seller, quantity, ratings } = props.product;
    const handleAddtoCart = props.handleAddtoCart;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} star</p>
            </div>
            <button onClick={() => handleAddtoCart(props.product, price)} className='btn-cart'>Add to Cart
                <span className='cart-icon'><FontAwesomeIcon icon={faShoppingCart} /></span>
            </button>
        </div>
    );
};

export default Product;