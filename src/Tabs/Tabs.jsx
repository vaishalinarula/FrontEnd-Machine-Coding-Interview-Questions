import { useState } from "react";
import "./styles.css";

export default function Tabs({ defaultValue, items }) {
  const [activeValue, setActiveValue] = useState(
    defaultValue ?? items[0].value
  );

  return (
    <div className="tabs">
      {/* Tabs List */}
      <div className="tabs-list">
        {items.map(({ label, value }) => (
          <button
            key={value}
            type="button"
            className={`tabs-list-item ${
              value === activeValue ? "tabs-list-item--active" : ""
            }`}
            onClick={() => setActiveValue(value)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Tabs Panels */}
      <div className="tabs-panels">
        {items
          .filter(({ value }) => value === activeValue)
          .map(({ panel, value }) => (
            <div key={value} className="tabs-panel">
              {panel}
            </div>
          ))}
      </div>
    </div>
  );
}
