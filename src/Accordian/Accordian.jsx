import React, { useState } from "react";
import "./Accordian.css";

// Single Accordion Item
const AccordionItem = ({
  title,
  content,
  isActive,
  onClick,
  isChecked,
  onCheckboxChange,
}) => {
  return (
    <div className="accordion-item">
      <div className="accordion-title">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onCheckboxChange}
          onClick={(e) => e.stopPropagation()} // Prevents accordion toggle on checkbox click
        />
        <span onClick={onClick} style={{ display: "flex", gap: "20px" }}>
          {title}
          <span className="toggle-icon">{isActive ? "-" : "+"}</span>
        </span>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

// Accordion Component
const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null); // State to manage active section
  const [checkedItems, setCheckedItems] = useState(
    new Array(items.length).fill(false) // Initialize all checkboxes as unchecked
  );

  const handleItemClick = (index) => {
    // Toggle the accordion item
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleCheckboxChange = (index) => {
    const updatedCheckedItems = checkedItems.map((item, i) =>
      i === index ? !item : item
    );
    setCheckedItems(updatedCheckedItems);
  };

  const allChecked = checkedItems.every((checked) => checked); // Check if all checkboxes are checked

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isActive={activeIndex === index}
          onClick={() => handleItemClick(index)}
          isChecked={checkedItems[index]}
          onCheckboxChange={() => handleCheckboxChange(index)}
        />
      ))}
      <button
        type="submit"
        disabled={!allChecked}
        className={allChecked ? "enabled" : "disabled"}
      >
        Submit
      </button>
    </div>
  );
};

export default Accordion;
