import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = ({product, handleAddToCart}) => {
    // const {product, handleAddToCart} = props;
    const {img, name, seller, price, ratings} = product;
    // const {handleAddToCart} = props;
    return (
        <div className='product'>
                <img src= {img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price : ${price}</p>
                <p className='product-seller'>Manufacturer : {seller}</p>
                <p className='product-rating'>Raing : {ratings} stars</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add to Cart </p>
                <FontAwesomeIcon icon = {faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;