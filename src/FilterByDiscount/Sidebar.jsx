import React from "react";
import "./Sidebar.css";

function Sidebar({ filterProducts, clearFilter, selectedDiscount }) {
  const discounts = [10, 20, 5, 70];

  return (
    <div className="sidebar">
      <h2>Filter by Discount</h2>
      {discounts.map((discount) => (
        <div key={discount}>
          <input
            type="checkbox"
            checked={selectedDiscount === discount}
            onChange={() => filterProducts(discount)}
          />
          <label>{discount}% and more</label>
        </div>
      ))}
      <button onClick={clearFilter}>Clear Filter</button>
    </div>
  );
}

export default Sidebar;
