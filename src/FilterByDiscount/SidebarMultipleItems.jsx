import React from "react";
import "./Sidebar.css";

function SidebarMultipleItems({
  filterProducts,
  clearFilter,
  selectedDiscounts,
}) {
  const discounts = [5, 10, 15, 70];

  return (
    <div className="sidebar">
      <h2>Filter by Discount - Mulitple Items</h2>
      {discounts.map((discount) => (
        <div key={discount}>
          <input
            type="checkbox"
            checked={selectedDiscounts?.includes(discount)}
            onChange={() => filterProducts(discount)}
          />
          <label>{discount}% and more</label>
        </div>
      ))}
      <button onClick={clearFilter}>Clear Filter</button>
    </div>
  );
}

export default SidebarMultipleItems;
