import React, { useEffect, useState } from "react";
import "./FilterByDiscount.css";
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";

function FilterByDiscount() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedDiscount, setSelectedDiscount] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
      });
  }, []);

  const filterProducts = (discount) => {
    if (discount === null) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.discountPercentage >= discount
      );
      setFilteredProducts(filtered);
    }
    setSelectedDiscount(discount);
  };

  const clearFilter = () => {
    setFilteredProducts(products);
    setSelectedDiscount(null);
  };

  return (
    <div className="App">
      <Sidebar
        filterProducts={filterProducts}
        clearFilter={clearFilter}
        selectedDiscount={selectedDiscount}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default FilterByDiscount;
