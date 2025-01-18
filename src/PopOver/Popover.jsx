import React, { useState } from "react";
import "./Popover.css";

const Popover = () => {
  const [showBody, setShowBody] = useState(false);

  const handleHeaderClick = () => {
    setShowBody(!showBody);
  };

  return (
    <div className="componentContainer">
      <h2>Popover</h2>
      <button onClick={handleHeaderClick}>Click Here</button>
      {showBody ? (
        <div className="popOverContainer">
          <>
            <div className="popoverHeader">Header</div>
            <div className="popoverBody">The content is added here</div>
          </>
        </div>
      ) : null}
    </div>
  );
};

export default Popover;
