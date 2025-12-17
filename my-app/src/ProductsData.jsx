import React from 'react';
import Cart from './Cart.jsx'

export const products = [
    {
        _id: '1',
        name: 'Sample Product 1',
        image: '/assets/sample1.jpg',
        price: 199,
    },
    {
        _id: '2',
        name: 'Sample Product 2',
        image: '/assets/sample2.jpg',
        price: 299,
    },
];

const ProductData = ({ products, onEdit, onDelete, loading }) => {
    if (loading) {
        return (
            <div >
                <p>Loading products...</p>
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div >
                <h3>No Products Found</h3>
                <p>Start by adding your first product!</p>
            </div>
        );
    }

    return (
        <div>
            {products.map((product) => (
                <Cart
                    key={product._id}
                    product={product}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default ProductData;
