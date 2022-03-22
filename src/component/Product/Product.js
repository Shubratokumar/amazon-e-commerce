import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, seller, price, stock, ratings } = props.product;
    return (
        <div className='product'>
            <div>
                <img src= {img} alt="" />
            </div>
            <div>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price : ${price}</p>
                <p className='product-seller'>Manufacturer : {seller}</p>
                <p className='product-rating'>Raing : {ratings} star</p>
            </div>
        </div>
    );
};

export default Product;