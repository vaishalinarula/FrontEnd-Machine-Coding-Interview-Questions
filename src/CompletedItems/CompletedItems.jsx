import React, { useEffect, useState } from "react";
import "./CompletedItems.css";

function CompletedItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        const itemsWithCompletion = data.products.map((item) => ({
          ...item,
          completed: false,
        }));
        setItems(itemsWithCompletion);
      });
  }, []);

  const toggleComplete = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h1>Product List - Check list</h1>
      <div id="item-container">
        {items.map((item) => (
          <div
            key={item.id}
            className={`item ${item.completed ? "completed" : ""}`}
          >
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleComplete(item.id)}
            />
            <span>{item.title}</span>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompletedItems;
