import React from 'react';

const ProductList = () => {
    const products = [
        { id: 1, name: 'Product 1', price: 20.99 },
        { id: 2, name: 'Product 2', price: 30.99 },
        // Add more products
    ];

    return (
        <div className="product-list">
            <h2>Products 👗</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
