import React from "react";
import "./ProductList.css";

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.title}</h3>
            <p>Discount: {product.discountPercentage}%</p>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

export default ProductList;
