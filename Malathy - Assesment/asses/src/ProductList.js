import React from 'react';
import './ProductList.css'; 

const ProductList = () => {
    const products = [
        { id: 1, name: 'Modern Shirt', price: 299, image: 'img2.jpg' },
        { id: 2, name: 'Red shirt', price: 499, image: 'img3.jpg' },
        { id: 3, name: 'Pinck shirt', price: 199, image: 'img4.jpg' },
        { id: 4, name: 'Green shirt', price: 199, image: 'img4.jpg' },
        { id: 5, name: 'Blue shirt', price: 199, image: 'img5.jpg' },
        { id: 6, name: 'Black shirt', price: 199, image: 'img6.jpg' },
       
    ];

    return (
        <div className="product-list">
            <h2>Products</h2>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={require(`./images/${product.image}`).default} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>₹{product.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
