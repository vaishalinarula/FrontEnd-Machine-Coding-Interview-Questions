import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        const slicedTrendingProducts = data.products.slice(0, 6);
        setTrendingProducts(slicedTrendingProducts);
      });
  });
  return (
    <div>
      <span>Trending Products</span>
      <div className="product-grid">
        {trendingProducts?.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
            </Link>
          </div>
        ))}
      </div>
      <Link to="/products">
        <button style={{ width: "100%", padding: 10 }}>
          View All Products
        </button>
      </Link>
    </div>
  );
};

export default Home;
