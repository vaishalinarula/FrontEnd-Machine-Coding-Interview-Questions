import React, { useEffect, useState } from "react";
import "./FilterByDiscount.css";
import ProductList from "./ProductList";
import SidebarMultipleItems from "./SidebarMultipleItems";

function FilterByDiscountMultpleItems() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedDiscounts, setSelectedDiscounts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
      });
  }, []);

  const filterProducts = (discount) => {
    let updatedDiscounts = [...selectedDiscounts];
    if (updatedDiscounts.includes(discount)) {
      updatedDiscounts = updatedDiscounts.filter((d) => d !== discount);
    } else {
      updatedDiscounts.push(discount);
    }

    setSelectedDiscounts(updatedDiscounts);

    if (updatedDiscounts.length === 0) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        updatedDiscounts.some((d) => product.discountPercentage >= d)
      );
      setFilteredProducts(filtered);
    }
  };

  const clearFilter = () => {
    setFilteredProducts(products);
    setSelectedDiscounts([]);
  };

  return (
    <div className="App">
      <SidebarMultipleItems
        filterProducts={filterProducts}
        clearFilter={clearFilter}
        selectedDiscounts={selectedDiscounts}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default FilterByDiscountMultpleItems;
