import React, { useState } from "react";

const ColorMixer = () => {
  const [selectedColors, setSelectedColors] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setSelectedColors((prevColors) => ({
      ...prevColors,
      [name]: checked,
    }));
  };

  const calculateMixedColor = () => {
    const { red, blue, yellow } = selectedColors;
    if (red && blue && yellow) return "#808080"; // Grey
    if (red && blue) return "#800080"; // Purple
    if (red && yellow) return "#FFA500"; // Orange
    if (blue && yellow) return "#008000"; // Green
    if (red) return "red";
    if (blue) return "blue";
    if (yellow) return "yellow";
    return "white";
  };

  return (
    <div>
      <h2>Select Colors</h2>
      <div>
        <label>
          <input
            type="checkbox"
            name="red"
            checked={selectedColors.red}
            onChange={handleChange}
          />
          Red
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="blue"
            checked={selectedColors.blue}
            onChange={handleChange}
          />
          Blue
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="yellow"
            checked={selectedColors.yellow}
            onChange={handleChange}
          />
          Yellow
        </label>
      </div>
      <div
        style={{
          marginTop: "20px",
          width: "100px",
          height: "100px",
          backgroundColor: calculateMixedColor(),
        }}
      />
    </div>
  );
};

export default ColorMixer;
